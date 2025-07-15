//example of optional chaining and nullish coalescing operator
const user = {
    name: "Alice"
};

//Optional chaining allows you to safely access deeply nested properties without throwing an error if a property is undefined or null.
// If user is null or undefined, it will not throw an error, but return undefined instead
console.log(user?.name); // Output: Alice
console.log(user?.age); // Output: undefined (no error thrown)

//Nullish coalescing operator (??) allows you to provide a default value when the left-hand side is null or undefined.
// If user.city is undefined, it will return "City is unknown" instead of throwing an error
console.log(user?.city ?? "City is unkown"); // Output: City is unknown
