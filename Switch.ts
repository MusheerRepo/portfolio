let value = 1;

switch(value) {
    case 1:
        console.log('One')
        console.log("Another message")
        break
    default:
        console.log('Other numbers')
}

switch(value.toString()) {
    case "1": 
        console.log("One")
        console.log("Another message")
        break
    default:
        console.log("Another message")
}