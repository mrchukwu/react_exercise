//using if statment
const number = 5;
let message;

if(number % 2 === 0) {
    message = "The number is even.";
} else {    
    message = "The number is odd.";
}
console.log("Using If statment: " + message); // Output: The number is odd.  

//example using ternary operator
const numberTernary = 5;
const messageTernary = numberTernary % 2 === 0 ? "The number is even." : "The number is odd.";
console.log("Using Ternary: " + messageTernary); // Output: The number is odd.

//example 2 using ternary operator
const note = {
    title : "Meeting Notes",
    content: "Discuss project updates and next steps.",
    timestamp: Date.now(),
    isPinned: true
}

const noteText = `
title: ${note.title}
content: ${note.content}
created on: ${new Date(note.timestamp).toLocaleDateString()} at ${new Date(note.timestamp).toLocaleTimeString()}
status: ${note.isPinned ? "📌Pinned" : "Not Pinned, regular note"}
`
console.log(noteText);


//example 3 using short-circuit 
//essence of short-circuit rendering is to use logical operators to conditionally render content without needing an explicit if statement or ternary operator.
const isLoggedIn = true;
function showWelcomeMessage() {
    return isLoggedIn && "Welcome, User!";
}

console.log(showWelcomeMessage()); // Output: Welcome, User!