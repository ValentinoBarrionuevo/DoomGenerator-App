import { ContenidoEducativo } from "./ContenidoEducativo.js";

export class TarjetaPDF extends ContenidoEducativo {
    url: string;

    constructor(tema: string, dificultad: number, url: string) {
        super(tema, dificultad);
        this.url = url;
    }

    override renderizar(): string {
        return `
            <div class="pdf-header">
                <h3 style="color: #ff0055;">[PDF_NODE] :: ${this.tema}</h3>
                <small>DOC_ID: ${Math.floor(Math.random() * 9999)}</small>
            </div>
            <iframe src="${this.url}" width="100%" height="500px" style="border:none; margin-top:10px;"></iframe>
        `;
    }
}