import { DoomGenerator } from './DoomGenerator.js'
import { FeedManager } from './FeedManager.js';
import { TarjetaPDF } from './TarjetaPDF.js';
import { ContenidoEducativo } from './ContenidoEducativo.js';

const feed = new FeedManager<ContenidoEducativo>();
const generador = new DoomGenerator();

const pdfUnit = new TarjetaPDF("UNIDAD 1: OBJETOS", 1, "../../public/unidad1_poo.pdf");

const c1 = generador.crearContenido('TEORIA', 2, 'POLIFORMISMO', 'Capacidad de un objeto de tomar muchas formas...', 'Java')
const c2 = generador.crearContenido('CODIGO', 2, 'HERENCIA', 'class Perro extends Animal { ... }', 'TypeScript')
const c3 = generador.crearContenido('TEORIA', 3, 'XSS ATTACK', 'Inyección de scripts maliciosos en sitios web confiables.', 'Security');

feed.agregarAlFeed(pdfUnit);
feed.agregarAlFeed(c1);
feed.agregarAlFeed(c2);
feed.agregarAlFeed(c3);

console.log("Iniciando sistema...");
for(let i = 0; i < 4; i++) {
    feed.scrollear();
}

const pantalla = document.getElementById('tarjeta-actual');
const boton = document.getElementById('btn-next');

for(let i = 0; i < 5; i++) {
    feed.scrollear();
}

window.addEventListener('scroll', () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    
    if (scrollTop + clientHeight >= scrollHeight - 50) {
        feed.scrollear();
    }
})