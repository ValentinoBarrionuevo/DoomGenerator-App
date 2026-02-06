import { TarjetaTeoria } from "./TarjetaTeoria"

export class DoomGenerator {

    crearContenido(tema: string, dificultad: number, texto: string) {
        return new TarjetaTeoria(tema, dificultad, texto)
    }
}