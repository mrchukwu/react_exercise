//regular function
function getRectangleArea(width, height) {
    return width * height;
}

// console.log(getRectangleArea(5, 10)); // Output: 50

//arrow function
const getRectangleAreaArrow = (width, height) =>  width * height;
// console.log(getRectangleAreaArrow(5, 10)); // Output: 50

const numbers = [1, 2, 3, 4, 5];
const double = numbers.map(function(num) {
    return num * 2;
});
const doubleArrow = numbers.map(num => num * 2);
// console.log(double); // Output: [2, 4, 6, 8, 10]

const person = {
    name: "Kennedy",

    sayHelloRegular: function() {
        console.log(`Hello, my name is ${this.name}`);
    },

    sayHelloArrow: () => {
        console.log(`Hello, my name is ${this.name}`);
    }   
}

person.sayHelloRegular(); // Output: Hello, my name is 
person.sayHelloArrow(); // Output: Hello, my name is undefined. This is because arrow functions do not have their own `this` context and inherit it from the parent scope, which in this case is the global scope where `this.name` is undefined. The "this" keyword here refers to the global object, not the `person` object.