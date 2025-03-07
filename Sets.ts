// Sets
// Unstructured data type

let set1 = new Set()

//Add
set1.add("Hello")
console.log(set1)

// Keys // Both keys and values are same
console.log("Keys are \n")
console.log(set1.keys())

// Values
console.log("Values are")
console.log(set1.values())

// Iterate
console.log("Iterating")
set1.add("World")
set1.add("Musheer")
set1.add("Musheer")
set1.add("Musheer")
set1.add("Musheer")
set1.add("Ahmad")
set1.add("Khan")
set1.forEach((v,v1) => {
    console.log(`Value 1 is ${v} and value 2 is ${v1}`)
})

// Entries
console.log("Entries are")
console.log(set1.entries())

// Size
console.log(`Size is ${set1.size}`)