console.log("Using var:");
var x = 10;
if (true) {
    var x = 20;
    console.log("Inside block:", x); // 20
}
console.log("Outside block:", x); // 20 
console.log("\nUsing let:");
var y = 30;
if (true) {
    var y_1 = 40;
    console.log("Inside block:", y_1); // 40
}
console.log("Outside block:", y); // 30
console.log("\nUsing const:");
var z = 50;
if (true) {
    var z_1 = 60;
    console.log("Inside block:", z_1); // 60
}
console.log("Outside block:", z); // 50
var users = [
    { username: "admin", password: "admin123" },
    { username: "user", password: "user123" }
];
function login(username, password) {
    var user = users.find(function (u) { return u.username === username && u.password === password; });
    return user ? "Login successful!" : "Invalid credentials";
}
console.log(login("admin", "admin123"));
console.log(login("user", "wrongpass"));
a: number = 103;
console.log(a);
