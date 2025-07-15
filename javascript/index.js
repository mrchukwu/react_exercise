//regular function
function getRectangleArea(width, height) {
    return width * height;
}

console.log(getRectangleArea(5, 10)); // Output: 50

//arrow function
const getRectangleAreaArrow = (width, height) =>  width * height;
console.log(getRectangleAreaArrow(5, 10)); // Output: 50