const num1: number = 20;
const num2: number = 10;

// Arithmetic Operators
console.log("Addition:", num1 + num2);
console.log("Subtraction:", num1 - num2);
console.log("Multiplication:", num1 * num2);
console.log("Division:", num1 / num2);
console.log("Modulus:", num1 % num2);
console.log("Exponentiation:", num1 ** num2);

// Comparison Operators
console.log("Is num1 greater than num2?", num1 > num2);
console.log("Is num1 less than num2?", num1 < num2);
console.log("Is num1 equal to num2?", num1 === num2);
console.log("Is num1 not equal to num2?", num1 !== num2);
console.log("Is num1 greater than or equal to num2?", num1 >= num2);
console.log("Is num1 less than or equal to num2?", num1 <= num2);

// Logical Operators
const isAdult: boolean = num1 >= 18;
const hasPermission: boolean = true;
console.log("Can enter the club?", isAdult && hasPermission);
console.log("Needs permission or is an adult?", isAdult || hasPermission);
console.log("Not an adult?", !isAdult);

// Conditional Statements - if
if (num1 > num2) {
    console.log("num1 is greater than num2");
}

// Conditional Statements - else
if (num1 < num2) {
    console.log("num1 is less than num2");
} else {
    console.log("num1 is not less than num2");
}

// Practice Code
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(`${i} is even`);
    } else {
        console.log(`${i} is odd`);
    }
}

const temperature: number = 35;
if (temperature > 30) {
    console.log("It's hot outside!");
} else {
    console.log("It's a comfortable temperature.");
}

const score: number = 85;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}

const userRole: string = "admin";
if (userRole === "admin") {
    console.log("Access granted to admin panel");
} else {
    console.log("Limited access");
}

// More calculations with operators
const a1: number = 5;
const b: number = 3;
console.log("Sum:", a + b);
console.log("Difference:", a - b);
console.log("Product:", a * b);
console.log("Quotient:", a / b);
console.log("Remainder:", a % b);
console.log("Exponent:", a ** b);

let balance: number = 1000;
let withdrawal: number = 500;
if (withdrawal <= balance) {
    balance -= withdrawal;
    console.log("Withdrawal successful! New balance:", balance);
} else {
    console.log("Insufficient funds");
}

let speed: number = 75;
if (speed > 60) {
    console.log("You're speeding! Slow down.");
} else {
    console.log("You're driving within the speed limit.");
}

const rainy: boolean = true;
if (rainy) {
    console.log("Take an umbrella.");
} else {
    console.log("Enjoy the sunshine!");
}

let age: number = 16;
if (age >= 18) {
    console.log("Eligible to vote");
} else {
    console.log("Not eligible to vote");
}

let number: number = 15;
if (number % 5 === 0) {
    console.log("Divisible by 5");
} else {
    console.log("Not divisible by 5");
}
