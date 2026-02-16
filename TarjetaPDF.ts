import { ContenidoEducativo } from "./ContenidoEducativo.js";

export class TarjetaPDF extends ContenidoEducativo {
    url: string;

    constructor(tema: string, dificiultad: number, url: string) {
        super(tema, dificiultad)
        this.url = url
    }

    override renderizar(): string {
        const contenedor = document.getElementById('feed-container');

        const card = document.createElement('div')
        card.className = 'doom-card pdf-card';
        card.style.border = "1px solid #00ff00";
        card.style.margin = "20px 0";
        card.style.padding = "10px";


        const header = document.createElement('h3');
        header.innerText = `[PDF: ${this.tema}] - Dificultad: ${this.dificultad}`;
        card.appendChild(header);


        const iframe = document.createElement('iframe');
        iframe.src = this.url;
        iframe.width = "100%";
        iframe.height = "500px";
        iframe.style.border = "none";

        card.appendChild(iframe);


        if(contenedor) {
            contenedor.appendChild(card);
            return card.outerHTML;
        }
        return "";
    }
}