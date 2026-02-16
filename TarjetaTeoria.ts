import { ContenidoEducativo } from "./ContenidoEducativo.js"


export class TarjetaTeoria extends ContenidoEducativo {
    private codigo: string
    private lenguaje: string

    constructor(tema: string, dificultad: number, codigo: string, lenguaje: string) {
        super(tema, dificultad)
        this.codigo = codigo
        this.lenguaje = lenguaje
    }
renderizar(): string {
        return `
            <h3 style="color: orange;">[CODE_SNIPPET] :: ${this.tema}</h3>
            <small>SYNTAX: ${this.lenguaje}</small>
            <div style="background: #111; padding: 10px; border: 1px dashed orange; margin-top: 10px;">
                <code>${this.codigo}</code>
            </div>
        `;
    }
}