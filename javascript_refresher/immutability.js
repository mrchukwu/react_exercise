const notes = ["Meeting notes", "Project ideas", "Shopping list", "Travel plans"];
// console.log(notes);
// notes.push("Newly added note");
// console.log(notes);

const notesCopy = ["New Note", ...notes]; // Using spread operator to create a shallow copy
// console.log(notesCopy); // Output: ["Meeting notes", "Project ideas", "Shopping list

//mutatiing the array using map
const updateNotes = notes.map(note => note === "Shopping list" ? "Updated Shopping List" : note);
// console.log(updateNotes); // Output: ["Meeting notes", "Project ideas", "Updated Shopping List", "Travel plans"]

//mutating Objects
const user = {
    name: "Kennedy",
    age: 30,
}
console.log(user); // Output: { name: "Kennedy", age: 30 }

const newUser = {
    ...user, // Using spread operator to create a shallow copy
    age: 31, // Updating the age property
}
console.log(newUser); // Output: { name: "Kennedy", age: 31 }   