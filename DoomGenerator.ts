import { TarjetaTeoria } from "./TarjetaTeoria"

export type TipoContenido = 'TEORIA' | 'CODIGO';

export class DoomGenerator {

    crearContenido(tema: string, dificultad: number, texto: string, contenido: string, extra?: string): ContenidoEducativo {
        switch (tipo) {
            case 'TEORIA':
                return new TarjetaTeoria(tema, dificultad, contenido);
            case 'CODIGO':
                return new TarjetaTeoria(tema, dificultad, contenido, extra || 'txt');
            default:
                throw new Error("Tipo de contenido no soportado (Kernel Panic!)");
        }
    }
}