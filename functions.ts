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