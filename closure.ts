let x10 = 20;

function f1() {
    let x11 = 201;

    return function f2() {
        x10++
        x11++
        console.log(x10, x11)
    }
}

f1()()
f1()()
f1()()

const l = f1()
l()
l()
l()