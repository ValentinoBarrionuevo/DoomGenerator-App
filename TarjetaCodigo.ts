import { ContenidoEducativo } from "./ContenidoEducativo";

export class TarjetaCodigo extends ContenidoEducativo {
    private codigo: string;
    private lenguaje: string;


    constructor(tema: string, dificultad: number, codigo: string, lenguaje: string) {
        super(tema, dificultad);
        this.codigo = codigo
        this.lenguaje = lenguaje
    }

    renderizar(): void {
        console.log(`[CODE] ${this.tema} (${this.lenguaje})`);
        console.log(`----------------------------------------`)
        console.log(`${this.codigo}`)
        console.log(`----------------------------------------`)
    }
}