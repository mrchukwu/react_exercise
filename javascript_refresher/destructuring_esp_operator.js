//Array destructuring and rest operator example

//Array of Notes
const notes = [
    {
        title: "Meeting Notes",
        content: "Discuss project updates and next steps.",
        timestamp: Date.now(),
    },
    {
        title: "Project Plan",
        content : "Outline the project milestones and deliverables.",
        timestamp : Date.now(),
    },
    {
        title: "Feedback Session",
        content: "Gather feedback from the team on the latest features.",
        timestamp: Date.now()
    }
];

//using destructuring Array to extract properties from the first notec
const [firstNote] = notes;
// console.log(firstNote.title); // Output: Meeting Notes` 

//using rest operator to collect remaining notes
const [firstnote, ...restNotes] = notes;
// console.log(firstNote) // output first note object
// console.log(restNotes); // Output: Array of remaining notes

//Object
const note = {
    title: "Meeting Notes",
    content: "Discuss project updates and next steps.",
    timestamp: Date.now(),
            address: {
            city: "Port Harcourt",
            state: "Rivers",
            country: "Nigeria"
            },
            hobbies: ["Reading", "Coding", "Traveling"]
}

//using destructuring to extract properties from the note object
const {title} = note;
console.log(title); // Output: Meeting Notes
const {title: noteTile} = note; // renaming the variable
console.log(noteTile); // Output: Meeting 
//using destructuring to extract nested properties
const {address: {city, state, country}} = note; 
console.log(city, state, country); // Output: Port Harcourt Rivers Nigeria
//Destructuring Array to extract hobbies
const {hobbies: [firstHobby, secondHobby]} = note;
console.log(firstHobby, secondHobby); // Output: Reading Coding