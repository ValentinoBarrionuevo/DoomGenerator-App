import { TarjetaTeoria } from "./TarjetaTeoria.js"
import { ContenidoEducativo } from "./ContenidoEducativo.js";

export type TipoContenido = 'TEORIA' | 'CODIGO';

export class DoomGenerator {

    crearContenido(tema: string, dificultad: number, texto: string, contenido: string, codigo: string): ContenidoEducativo {
        switch (tema) {
            case 'TEORIA':
                return new TarjetaTeoria(tema, dificultad, contenido, texto);
            case 'CODIGO':
                return new TarjetaTeoria(tema, dificultad, contenido, codigo || 'txt');
            default:
                throw new Error("Tipo de contenido no soportado");
        }
    }
}