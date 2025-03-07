// Maps
var map1 = new Map()
map1.set(true, "Hello")
map1.set(true, "Hello1") // This overides the previous key
console.log(map1)
console.log(map1.get(true))

// Keys
console.log("Keys")
console.log(map1.keys())

// Values
console.log("Values")
console.log(map1.values())

//for each
map1.forEach((v, k) => {
    console.log(`This is value : ${v} for key ${k}`)
})

//Delete
map1.delete(true)
console.log(map1)

// Has
map1.set(1,2)
map1.set(2,()=> {console.log('I am a function')})
console.log(`This map has key 2 : ${map1.has(2)}`)

//Size
console.log(`This map has size : ${map1.size}`)

// Entries
console.log(`These are the entries of map1 map: ${map1.entries()}`)