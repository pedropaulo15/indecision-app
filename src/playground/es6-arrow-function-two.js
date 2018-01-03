const add = function(a, b) {
    console.log(arguments);
    return a + b;
}

console.log(add(55, 1 ));


const addArrow = (a, b) => {
    //console.log(arguments);
    return a + b;
}

console.log(addArrow(50, 1, 1001));


// this keyword - no longer bound

// const user = {
//     name: 'Pedro',
//     cities: ['Dublin', 'Sao Paulo', 'Valencia'],
//     printPlacesLived: function() {
//         console.log(this.name);
//         console.log(this.cities);

//         // work around to make the function below work, as the this.name variable was not accessible from the function, 
//         // it has to be done, and now the name variable is available via that.name variable.
//         const that = this;

//         this.cities.forEach(function(city) {
//             console.log(that.name + ' has lived in ' + city);
//         });
//     }
// }

// user.printPlacesLived();

const user = {
    name: 'Pedro',
    cities: ['Dublin', 'Sao Paulo', 'Valencia'],
    printPlacesLived() {

        // It gets called one time, for each time in the array, just like forEach
        // The argument 'city', is where we gonna have access to the items from the array.
        // The map function does not allow us to do something (like print to the screen) with each item, like
        // the forEach does.
        // Instead, with 'map' function, i can transform each item, and get new array back.
        return this.cities.map((city) => {
            // In this case, i am returning the new array, with the message beign created here.
            // The original array is not affected.
            return this.name + ' has lived in ' + city;  
        });

        // Witht he arrow function it works; the function above, has to use the function keyword, 
        // otherwise the keyword 'this' will not be avaible/defined, to be used in its child method. 
        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city);
        // });
    }
}

console.log(user.printPlacesLived())
user.printPlacesLived();




// Arrow functions challenge Part 2

const multiplier = {
    numbers: [1, 2, 3,],
    multBy: 5,
    multiply(){
        return this.numbers.map((n) => {
            console.log(this.n * this.multBy + '/');
            return n * this.multBy;
        });
    } 
}

console.log(multiplier.multiply());