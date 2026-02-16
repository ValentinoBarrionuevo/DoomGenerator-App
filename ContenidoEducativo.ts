export abstract class ContenidoEducativo {
    protected tema: string;
    protected dificultad: number;

    constructor(tema: string, dificultad: number) {
        this.tema = tema;
        this.dificultad = dificultad;
    }
    abstract renderizar(): string;
    
}