import { ContenidoEducativo } from "./ContenidoEducativo.js";

export class TarjetaCodigo extends ContenidoEducativo {
    private texto: string;
    private lenguaje: string;


    constructor(tema: string, dificultad: number, texto: string, lenguaje: string) {
        super(tema, dificultad);
        this.texto = texto
        this.lenguaje = lenguaje
    }

    renderizar(): string {
        return `
            <h3 style="color: cyan;">[THEORY_NODE] :: ${this.tema}</h3>
            <small>LANG: ${this.lenguaje} | DIFF: ${this.dificultad}</small>
            <hr style="border-color: #00ff41;">
            <p>${this.texto}</p>
        `;
    }
}