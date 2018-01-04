
class Person {
    // Default values are set on the constructor's parameters, in case this values are not determined when the 
    // object is created.
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        // Returning a string.
        // return 'Hi, i am ' + this.name + '!';
        // Using the following template string/interpolation is much easier.
        return `Hi, i am ${ this.name }.`;
    }
    getDescription(){
        return `${this.name} is ${this.age} year(s) old.`;
    }
} 

class Student extends Person {
    constructor(name, age, major) {
    // Using the super() method, we let the constructor from the super class/parent class (Person) set its 
    // values first, before we set the values for the child class. 
    super(name, age); 
    this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription (){
        // It is also possible to accces the method from the super class by using the following technique
        let desc = super.getDescription();

        if (this.hasMajor()){
            desc +=  ` Their major is ${ this.major }.`
        }

        return desc;
    }
}
    
const me = new Student('Pedro', 27, 'Computer Science');
//console.log(me.getDescription());

const other = new Student();
//console.log(other.getDescription());

// Challenge

class Traveler extends Person {
    constructor(name, age, location){
    super(name, age);
    this.location = location;     
    }
    getGreeting(){
        let greeting = super.getGreeting();

        if(this.location){
            
            greeting += ` I am visiting from ${ this.location }.`
            
        }
        return greeting;
    }
}

const travelerOne = new Traveler('Pedro Santos', 27, 'Taboao da Serra');
console.log(travelerOne.getGreeting());

const travelerTwo = new Traveler();
console.log(travelerTwo.getGreeting());