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