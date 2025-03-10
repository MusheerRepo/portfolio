console.log("Using var:");
var x = 10;
if (true) {
    var x = 20; 
    console.log("Inside block:", x); // 20
}
console.log("Outside block:", x); // 20 

console.log("\nUsing let:");
let y = 30;
if (true) {
    let y = 40;
    console.log("Inside block:", y); // 40
}
console.log("Outside block:", y); // 30

console.log("\nUsing const:");
const z = 50;
if (true) {
    const z = 60;
    console.log("Inside block:", z); // 60
}
console.log("Outside block:", z); // 50

// login

interface User {
    username: string;
    password: string;
}

const users: User[] = [
    { username: "admin", password: "admin123" },
    { username: "user", password: "user123" }
];

function login(username: string, password: string): string {
    const user = users.find(u => u.username === username && u.password === password);
    return user ? "Login successful!" : "Invalid credentials";
}

console.log(login("admin", "admin123"));
console.log(login("user", "wrongpass"));

var a:number = 103
console.log(a)

let b1 = {
    a : 'a',
    b : 'bdvev'
}

console.log(b1[`b`])

console.log(123124125125125125125125125125125125125135135)