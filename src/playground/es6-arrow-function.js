// ARROW FUNCTIONS PART 01


// const square = function (x) {
//     return x*x;
// };
// console.log(square(8));

// //

// const squareArrow = (x) => {
//     return x*x;
// };
// console.log(squareArrow(6));

// //

// const squareArrowTwo = (x) => x*x;
// console.log(squareArrowTwo(5));


// Challenge - Arrow Functions
// Regular arrow function, passing a parameter (fullName), and using the return. 
const getFirstName = (fullName) => {
    return fullName.split(' ')[0];
};
console.log(getFirstName('Pedro Santos'));

// Simplified arrow function, not using the return keyword, they both do the same thing.
const getFirstNameTwo = (fullName) => fullName.split(' ')[0];
console.log(getFirstNameTwo('Pedro Santos'));

// ARROW FUNCTIONS PART 02