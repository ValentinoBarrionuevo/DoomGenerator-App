import { ContenidoEducativo } from "./ContenidoEducativo";

export class FeedManager {
    private colaDeContenido: MyNode<T>;

    constructor() {
        this.colaDeContenido = undefined as unknown as MyNode<T>
    }

    // ---> intentando usar seccion de colas para crear un scroll infinito...
 
    agregarAlFeed(contenido: ContenidoEducativo) {
        this.colaDeContenido.push(contenido);
    }

    scrollear(): void {
        if (this.colaDeContenido.length === 0) {
            console.log("No hay mas contenido")
            return;
        }
    
        const tarjeta = this.colaDeContenido.shift();

        tarjeta?.renderizar();
    }
}