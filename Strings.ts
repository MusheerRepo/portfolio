let str1: string = '0123456789012'

console.log(str1.indexOf('0122', 0))

console.log(str1.lastIndexOf('012',10))

//includes
console.log(str1.includes('345'))
console.log(str1.includes('3455'))

//startsWith
console.log(str1.startsWith('345', 2))
console.log(str1.startsWith('345', 3))

//endsWith
console.log(str1.endsWith('345', 6))
console.log(str1.endsWith('345', 3))

//Replace
console.log(str1.replace("345", "543"))
console.log(str1)

//'0123456789012'
//substring
console.log('Substring')
console.log(str1.substring(3,5))
console.log(str1.substring(-9,5))
console.log(str1.substring(5,3))

//slice
console.log('Slice')
console.log(str1.slice(3,5))
console.log(str1.slice(-9,5))
console.log(str1.slice(5,3))

let str2 = "  abcdfsdabcksjdvabcldkjfkdabc  "
console.log(str2.split("abc",30))

//trim
console.log(str2.trim())

//padstart
console.log(str2.padStart(51))
console.log(str2.padStart(51, 'Musheer'))

let str = "İSTANBUL"; // Turkish uppercase 'İ' (dot on top)
console.log(str.toLocaleLowerCase("tr-TR")); 
// Output: "istanbul" (Turkish-specific rule: 'İ' -> 'i')

console.log(str.toLocaleLowerCase("en-US")); 
// Output: "i̇stanbul" (Might keep the dot on 'İ', behaving differently)

//concat
console.log(str2.concat(...['Musheer', 'Khan']))

//repeat
console.log(str2.repeat(0))

//localeCompare
console.log(`LocaleCompare${str1}${str2}`)
console.log(str2.localeCompare(str1))

//valueOf
console.log(str1.valueOf())