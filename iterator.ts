/*
function citerator(a: number[]) {
    let i = 0;

    return {
        next:() => {
            if (i < a.length) {
                return { value: a[i++], hasNext: true } 
            } else {
                return { value: undefined, hasNext: false}
            }
        }
    }
}

let l43 = citerator([1,2,3,4])
let check = l43.next()
while(check.hasNext == true) {
    console.log(check.value)
    check = l43.next()
}
*/

function citerator(a: number[]) {
    let i = 0

    return {
        next : () => {
            if (i < a.length) {
                return { value: a[i++], hasNext : true}
            } else {
                return { value: undefined, hasNext : false}
            }
        }
    }
}

let x2 = citerator([1,4,7,2,4,6,2,436,523])

let check = x2.next()

while(check.hasNext) {
    console.log(check.value)
    check = x2.next()
}

let mp11 = new Map()
mp11.set(1,2)
mp11.set(2,3)
mp11.set(3,4)
mp11.set(4,5)
mp11.set(5,6)
mp11.set(6,7)

let x21 = mp11.entries()
let check1 = x21.next()
while(!check1.done) {
    console.log(check1.value)
    check1 = x21.next() 
}

// New iterator
function f1(a: number []) {
    let i:number = 0

    return {
        next : () => {
            if (i < a.length) {
                return {value: a[i++], done: false}
            } else {
                return {value: undefined, done: true}
            }
        }
    }
}

let x122 = f1([1,2,3,4,22])
let check5 = x122.next()

while(!check5.done) {
    console.log(check5.value)
    check5 = x122.next()
}