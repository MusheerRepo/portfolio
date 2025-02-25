const bookTitle: string = "The TypeScript Guide";
const author: string = "John Doe";
const price: number = 29.99;
let isAvailable: boolean = true;
let borrowedBy: string | null = null;
const bookId: symbol = Symbol(bookTitle);

console.log(`Book: ${bookTitle}, Author: ${author}, Price: $${price}, Available: ${isAvailable}`);

function borrowBook(user: string): void {
    if (isAvailable) {
        isAvailable = false;
        borrowedBy = user;
        console.log(`${user} borrowed the book.`);
    } else {
        console.log(`Sorry, the book is not available.`);
    }
}

function returnBook(): void {
    if (!isAvailable) {
        isAvailable = true;
        console.log(`${borrowedBy} returned the book.`);
        borrowedBy = null;
    } else {
        console.log(`The book is already available.`);
    }
}

borrowBook("Alice");
returnBook();
