function* j1() {
    yield 1
    yield "Musheer"
}

let x = j1()
let check11 = x.next()

while(!check11.done) {
    console.log(check11.value)
    check11 = x.next()
}

// Practice

function* g1() {
    yield [1,2]
    yield 22
    yield 'musheer'
}

let funcvar1 = g1()
let check2 = funcvar1.next()

while(!check2.done) {
    console.log(check2.value)
    check2 = funcvar1.next()
}

function* g2(a: number[]) {
    for (let i of a) {
        yield i
    }
}

let funcvar2 = g1()
let check22 = funcvar1.next()

while(!check2.done) {
    console.log(check22.value)
    check22 = funcvar1.next()
}
