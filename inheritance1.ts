import { Musheer1 } from "./Inheritance";

class Musheer2 extends Musheer1 {
    constructor(private var8: number) {
        super(22,23,"24")
        super.printf()
        this.var8 = 87
    }

    printf1() {
        console.log(this.var8)
    }
}

let obj3 = new Musheer2(27)
obj3.printf1()