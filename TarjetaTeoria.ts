import { ContenidoEducativo } from "./ContenidoEducativo"

export class TarjetaTeoria extends ContenidoEducativo {
    private texto: string

    constructor(tema: string, dificultad: number, texto: string) {
        super(tema, dificultad)
        this.texto = texto
    }
    renderizar(): void {
        console.log(`Teoria ${this.tema}: 
        ${this.texto}`)
        }
}