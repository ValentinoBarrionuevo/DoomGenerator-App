import { DoomGenerator } from './DoomGenerator'
import { FeedManager } from './FeedManager';

const generador = new DoomGenerator();
const miFeed = new FeedManager();

const c1 = generador.crearContenido('TEORIA', 2, 'POLIFORMISMO', 'Capacidad de un objeto de tomar muchas formas...')
const c2 = generador.crearContenido('CODIGO', 2, 'HERENCIA', 'class Perro extends Animal { ... }', 'TypeScript')

miFeed.agregarAlFeed(c1);
miFeed.agregarAlFeed(c2);

console.log("--- SCROLL 1 ---")
miFeed.scrollear();

console.log("\n--- SCROLL 2 ---")
miFeed.scrollear();