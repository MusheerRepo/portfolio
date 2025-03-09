export class Musheer {
    protected var1: number;
    protected var2: number|undefined;

    constructor(var12: number) {
        this.var1 = var12
        this.var2 = undefined
    }

    set() {
        this.var2 = 20
    }

    printf() {
        console.log(`This is var1 ${this.var1} and this is var2 ${this.var2}`)
    }
}

let obj1 = new Musheer(12)
obj1.printf()
obj1.set()
obj1.printf()