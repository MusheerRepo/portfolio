let x10 = 20;

function fc() {
    let x11 = 201;

    return function f2() {
        x10++
        x11++
        console.log(x10, x11)
    }
}

fc()()
fc()()
fc()()

const lc = fc()
lc()
lc()
lc()