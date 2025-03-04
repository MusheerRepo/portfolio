// Book borrow system
const bookTitle1: string = "The TypeScript Guide";
const author1: string = "John Doe";
const price1: number = 29.99;
let isAvailable1: boolean = true;
let borrowedBy1: string | null = null;
const bookId1: symbol = Symbol(bookTitle1);

const bookTitle2: string = "Advanced JavaScript";
const author2: string = "Jane Smith";
const price2: number = 35.99;
let isAvailable2: boolean = true;
let borrowedBy2: string | null = null;
const bookId2: symbol = Symbol(bookTitle2);

console.log(`Book: ${bookTitle1}, Author: ${author1}, Price: $${price1}, Available: ${isAvailable1}`);
console.log(`Book: ${bookTitle2}, Author: ${author2}, Price: $${price2}, Available: ${isAvailable2}`);

function borrowBook1(user: string): void {
    if (isAvailable1) {
        isAvailable1 = false;
        borrowedBy1 = user;
        console.log(`${user} borrowed the book: ${bookTitle1}`);
    } else {
        console.log(`Sorry, the book ${bookTitle1} is not available.`);
    }
}

function returnBook1(): void {
    if (!isAvailable1) {
        isAvailable1 = true;
        console.log(`${borrowedBy1} returned the book: ${bookTitle1}`);
        borrowedBy1 = null;
    } else {
        console.log(`The book ${bookTitle1} is already available.`);
    }
}

function borrowBook2(user: string): void {
    if (isAvailable2) {
        isAvailable2 = false;
        borrowedBy2 = user;
        console.log(`${user} borrowed the book: ${bookTitle2}`);
    } else {
        console.log(`Sorry, the book ${bookTitle2} is not available.`);
    }
}

function returnBook2(): void {
    if (!isAvailable2) {
        isAvailable2 = true;
        console.log(`${borrowedBy2} returned the book: ${bookTitle2}`);
        borrowedBy2 = null;
    } else {
        console.log(`The book ${bookTitle2} is already available.`);
    }
}

borrowBook1("Alice");
returnBook1();
borrowBook2("Bob");
returnBook2();


// Marriage system
const personName1: string = "Alice";
const age1: number = 25;
const hasLicense1: boolean = true;
let spouse1: string | null = null;
const personId1: symbol = Symbol(personName1);

const personName2: string = "Bob";
const age2: number = 30;
const hasLicense2: boolean = false;
let spouse2: string | null = "Alice";
const personId2: symbol = Symbol(personName2);

console.log(`Person: ${personName1}, Age: ${age1}, Has License: ${hasLicense1}, Spouse: ${spouse1}`);
console.log(`Person: ${personName2}, Age: ${age2}, Has License: ${hasLicense2}, Spouse: ${spouse2}`);

function updateSpouse1(newSpouse: string | null): void {
    spouse1 = newSpouse;
    console.log(`${personName1} is now married to ${newSpouse ?? "no one"}.`);
}

function updateSpouse2(newSpouse: string | null): void {
    spouse2 = newSpouse;
    console.log(`${personName2} is now married to ${newSpouse ?? "no one"}.`);
}

function checkDrivingEligibility(name: string, hasLicense: boolean): void {
    if (hasLicense) {
        console.log(`${name} is eligible to drive.`);
    } else {
        console.log(`${name} is not eligible to drive.`);
    }
}

updateSpouse1("Bob");
updateSpouse2("Alice");
checkDrivingEligibility(personName1, hasLicense1);
checkDrivingEligibility(personName2, hasLicense2);

