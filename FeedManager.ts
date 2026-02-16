import { ContenidoEducativo } from "./ContenidoEducativo.js";
import { MyNode } from "./MyNode.js";
import { TarjetaTeoria } from "./TarjetaTeoria.js";

export class FeedManager<T extends ContenidoEducativo> {
    private first: MyNode<T> | undefined;
    private last: MyNode<T> | undefined;

    constructor() {
        this.first = undefined;
        this.last = undefined;
    }

    public enqueue(value: T): void {
        const newNode = new MyNode(value);

        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        }
        else {
            this.last!.next = newNode;
            this.last = newNode;
        }
    }

    public dequeue(): T | undefined {
        if (this.isEmpty()){
            return undefined;
        }
        const value = this.first?.value;
        this.first = this.first?.next;
        if (!this.first) {
            this.last = undefined;
        }
        return value;
    }
    public isEmpty(): boolean {
        return this.first === undefined;
    }
    public agregarAlFeed(contenido: T): void {
        this.enqueue(contenido);
    }
    public scrollear(): void {
        const tarjeta = this.dequeue();
        
        if (tarjeta) {
            tarjeta.renderizar();
            this.enqueue(tarjeta);
        } else { 
            console.log("... ni idea como llegaste aca ...")
        }
    }
}