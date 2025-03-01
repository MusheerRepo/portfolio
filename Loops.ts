const day: number = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuessday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

// For Loop
for (let i = 1; i <= 50; i++) {
    console.log("Iteration:", i);
}

// While Loop
let count: number = 1;
while (count <= 50) {
    console.log("While count:", count);
    count++;
}

// Do-While Loop
let num: number = 1;
do {
    console.log("Do-While num:", num);
    num++;
} while (num <= 50);

// Nested Loops
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
}

// Switch with multiple cases
const grade: string = "B";
switch (grade) {
    case "A":
        console.log("Excellent");
        break;
    case "B":
    case "C":
        console.log("Good");
        break;
    case "D":
        console.log("Needs Improvement");
        break;
    default:
        console.log("Invalid Grade");
}

// Checking even and odd numbers using loops
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(`${i} is even`);
    } else {
        console.log(`${i} is odd`);
    }
}

// Counting down using while loop
let countdown: number = 10;
while (countdown > 0) {
    console.log(`Countdown: ${countdown}`);
    countdown--;
}

// Using break in a loop
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log("Breaking at 5");
        break;
    }
    console.log("Current number:", i);
}

// Using continue in a loop
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log("Odd number:", i);
}
