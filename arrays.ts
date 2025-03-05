let a3: number[] = [1,2,3,4,5,6]
let a4: Array<number> = [1,2,3]
let a5: Array<number> = new Array(5)

let max = 0
for (let i = 0; i <a3.length; i++) {
    if (a3[i] > max) {
        max = a3[i]
    }
}
console.log(max)
console.log(a4)
a5[1] = 1
a5[20] = 20
a5[27] = 96
console.log(a5)
a5.fill(5)
a5[6] = 27
console.log(a5)

let marr: Array<Array<number>> = [[1,2], [2,3]]
let marr2: number[][] = [[1,2], [2,3,4,5]]

console.log(marr)
console.log(marr2[0][2])


let arr1 = Array.from({length: 2500}, (_, i) => i + 1)
console.log(arr1)

for (let i in arr1) {
    if (arr1[i] % 2 === 0 && arr1[Number(i) + 200] % 39 === 0) {
        console.log(arr1[i])
    }
}

for (let i of arr1) {
    if (i % 111 == 0) {
        console.log(i)
    }
}

((arr: number[]) => {
    console.log(arr)
})([55,66,77])


let arrc: Array<number> = Array(5)
console.log(arrc[1])
console.log(arrc.concat(...[1,2,3]))
arrc.fill(1)
console.log(arrc.every((value) => value >= 1))
console.log(arrc.indexOf(2))
console.log(arrc.lastIndexOf(12))
console.log(arrc.includes(1))
arrc.push(2)
arrc.push(3)
arrc.push(4)
arrc.push(5)
arrc.push(6)
console.log(arrc)

arrc.pop()
console.log(arrc)

let arrpop: number[] = []
arrpop.pop()
console.log(arrpop)
console.log(arrc.reverse())
console.log(arrc)
console.log(arrc.shift())
console.log(arrpop.shift())
console.log(arrc)

console.log(arrc.slice(-2, -2))
console.log(arrc.sort())

// Destructing
let [y1, y2] = [1,4, 5]
console.log(y1, y2)