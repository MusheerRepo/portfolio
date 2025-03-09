import {Musheer} from "./classes"

export class Musheer1 extends Musheer {
    public var3: number
    constructor(var4: number, var5: number, private var6: string) {
        super(30)
        this.var1 = var5
        this.var3 = var4
    }

    printf(): void {
        super.printf()
        console.log(`This is var1 ${this.var1} and this is var2 ${this.var2} and this is var3 ${this.var3} and this is string ${this.var6}`)
    }
}

let obj2 = new Musheer1(17, 19, 'Hello')
obj2.printf()