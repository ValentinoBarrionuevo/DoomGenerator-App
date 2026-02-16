export class MyNode<T> {
    private _value: T;
    public next: MyNode<T> | undefined;

    constructor(value: T) {
        this._value = value;
        this.next = undefined;
    }

    public get value(): T {
        return this._value;
    }
}