let a22: string | number = 20;
console.log(typeof(a22))
a22 = "Hello"
console.log(typeof(a22))

//Union as a replacement of enum

type x = 1|2|3|4|5|6|7|8|9|10|11|"Musheer"

let t:x = "Musheer"

var a1A:(string | number)[] = [1, 'Musheer']
console.log(a1A[1])

//Tuple
let b1A: [string, number] = ['Hello', 1]
console.log(b)