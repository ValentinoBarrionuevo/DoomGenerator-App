import { DoomGenerator } from './DoomGenerator.js'
import { FeedManager } from './FeedManager.js';
import { TarjetaPDF } from './TarjetaPDF.js';
import { ContenidoEducativo } from './ContenidoEducativo.js';

const feed = new FeedManager<ContenidoEducativo>();
const generador = new DoomGenerator();
const streamContainer = document.getElementById('feed-stream') as HTMLDivElement;
const uploadInput = document.getElementById('pdf-upload') as HTMLInputElement;


const temasIA = ["Patrones de Diseño", "Algoritmos", "Estructuras de Datos", "Ciberseguridad", "Arquitectura Hexagonal"];
const fragmentosCodigo = [
    "function infinity() { return infinity(); }",
    "class Singleton { private static instance... }",
    "SELECT * FROM users WHERE admin = 1 --",
    "git commit -m 'fixed bug' --no-verify"
];

function generarContenidoProcedural() {
    const temaRandom = temasIA[Math.floor(Math.random() * temasIA.length)];
    const tipoRandom = Math.random() > 0.5 ? 'TEORIA' : 'CODIGO';

    if (tipoRandom === 'TEORIA') {
        return generador.crearContenido(
            'TEORIA',
        Math.floor(Math.random() * 5) + 1,
        temaRandom,
        `Concepto generado automáticamente sobre ${temaRandom}. La persistencia es clave en el aprendizaje.`,
        ''
        );
    } else {
        return generador.crearContenido(
            'CODIGO',
            Math.floor(Math.random() * 5) + 1,
            temaRandom,
            '',
            fragmentosCodigo[Math.floor(Math.random() * fragmentosCodigo.length)]
        );
    }
}

for(let i=0; i<5; i++) {
    feed.agregarAlFeed(generarContenidoProcedural());
}

function renderizarProximaTarjeta() {
    const tarjeta = feed.dequeue();
    
    if (tarjeta) {
        const div = document.createElement('div');
        div.className = 'doom-card';
        div.innerHTML = tarjeta.renderizar();
        streamContainer.appendChild(div);
        feed.enqueue(tarjeta);
        if(Math.random() > 0.7) {
            feed.enqueue(generarContenidoProcedural());
            
        }
    }
}

renderizarProximaTarjeta();
renderizarProximaTarjeta();
renderizarProximaTarjeta();


window.addEventListener('scroll', () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 100) {
        console.log("Generando...");
        renderizarProximaTarjeta;
    }
});


uploadInput.addEventListener('change', (event: Event)=> {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files[0]) {
        const file = target.files[0];
        const blobUrl = URL.createObjectURL(file);
        const nuevoPdf = new TarjetaPDF(file.name, 1, blobUrl);
        const div = document.createElement('div');
        div.className = 'doom-card';
        div.innerHTML = nuevoPdf.renderizar();
        streamContainer.insertBefore(div, streamContainer.firstChild);
        feed.enqueue(nuevoPdf);
    }
});