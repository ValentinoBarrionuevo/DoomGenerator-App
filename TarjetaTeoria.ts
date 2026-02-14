import { ContenidoEducativo } from "./ContenidoEducativo"
import { TarjetaCodigo } from "./TarjetaCodigo"

export class TarjetaTeoria extends ContenidoEducativo {
    private texto: string
    private lenguaje: string

    constructor(tema: string, dificultad: number, texto: string, lenguaje: string) {
        super(tema, dificultad)
        this.texto = texto
        this.lenguaje = lenguaje
    }
    renderizar(): void {
        console.log(`--- SNNIPET de ${this.lenguaje.toUpperCase()} (${this.tema}---`);
        console.log(this.texto);
        console.log("--------------------------------------------------------------");
        }
}