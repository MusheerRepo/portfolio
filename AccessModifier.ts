// Public is default access modifier
// Private -> In the same class where it is declared
// Protected -> Accessable in same class and also sub classes
// Read-only modifier -> This can be initalized in the run time but can only be initialized once

class Musheer {
    readonly var12
    
    constructor() {
        this.var12 = 12
    }

    print1() {
        console.log(this.var12)
    }
}

let xam = new Musheer();
xam.print1()