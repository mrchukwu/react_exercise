//using Promises to handle asynchronous operations
//Example of a simple promise
const myPromise = new Promise((resolve, rejsct) => {
    setTimeout(() => {
        resolve("Promise resolved after 2 seconds");
    }, 2000)
})

myPromise.then(data => {
    // console.log(data); // Output: Promise resolved after 2 seconds
}).catch(error => {
    // console.error("Error:", error);
});

//Fetch example
fetch('https://jsonplaceholder.typicode.com/posts/1 ')
.then(response => response.json())
.then(data => {
    // console.log(data); // Output: Post data from the API
})
.catch(error => {
    // console.error("Error fetching data:", error);
}); 

//Async/Await example
const fetchData = async () => {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        if(!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data); // Output: Post data from the API    
    }catch(error){
        console.error("Error fetching data:", error);
    }
}
fetchData();