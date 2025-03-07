function f1() {
    console.log("Hello Musheer")
}

f1()

const f2 = function () {
    console.log("Hello Musheer1")
}

f2()

const f3 = () => {
    console.log("Hello Musheer2")
}

f3()

const f4 = {
    a : function () {
        console.log("Hello Musheer3")
    },
    b : () => {
        console.log("Hello Musheer4")
    }
}

f4.a();
f4.b();


(() => {
    console.log("Hello Musheer5")
})()

function f5(a: number = 2, b?: number) {
    if (b === undefined) {
        console.log(`Hello Musheer ${a}`)
    }
    else {
        console.log(`Hello Musheer ${a} ${b}`)
    }
} 

f5(6)
f5(7,8)

let v1 = (...no: number[]) => {
    no.forEach((v) => {
        console.log(v)
    })
}

v1(1,2,3,4,45,555236236)

// Function overloading
console.log("Implementing overloading")
function f1g () {
    console.log(1)
}

function f1g(x: number) {
    console.log(x)
}

f1g()
f1g(20)