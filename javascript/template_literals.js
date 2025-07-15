const firstname = "Kennedy";

// Using string concatenation
const carrier = "Software Engineer";
const greeting = 'Hello, my name is ' + firstname + ' and I am a ' + carrier + '.';

//using template literals
const greetingTemplate = `Hello, my name is ${firstname} and I am a ${carrier}.`;

//example
const formatDate = (timestamp) => {
    const date = new Date(timestamp);

    return date.toLocaleDateString() + ' at ' + date.toLocaleTimeString();
}

const note = {
    title: "Meeting Notes",
    content: "Discuss project updates and next steps.",
    timestamp: Date.now(),
};

// Using template literals to format the note
console.log(`Note: ${note.title}\nContent: ${note.content}\nCreated on: ${formatDate(note.timestamp)}`);