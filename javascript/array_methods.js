const notes = [
    {
        title: "Meeting Notes",
        content: "Discuss project updates and next steps.",
        isPinned: true,
    },
    {
        title: "Project Plan",
        content: "Outline the project milestones and deliverables.",
        isPinned: false,
    },
    {
        title: "Feedback Session",
        content: "Gather feedback from the team on the latest features.",
        isPinned: false,
    }
]

//using map method to iterate over the notes array
const noteTitles = notes.map((note, index) => `${index + 1}. ${note.title}`);
// console.log(noteTitles); // Output: ["Meeting Notes", "Project Plan", "Feedback Session"]

//example using filter method to get pinned notes
const pinnedNotes = notes.filter(note => note.isPinned);
// console.log(pinnedNotes); // Output: Array of notes where isPinned is true

//using reduce method to count total characters in all notes content'
const totalCharacters = notes.reduce((accumulator, note) => accumulator + note.content.length, 0 );
console.log(totalCharacters); // Output: Total number of characters in all notes content