import { DoomGenerator } from './DoomGenerator'

const generador = new DoomGenerator();

const TarjetaTeoria = generador.crearContenido("POO", 1, "La programacion orientada a objeto es...");

TarjetaTeoria.renderizar()