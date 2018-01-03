
class Person {
    // Default values are set on the constructor's parameters, in case this values are not determined when the 
    // object is created.
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGretting() {
        // Returning a string.
        // return 'Hi, i am ' + this.name + '!';
        // Using the following template string/interpolation is much easier.
        return `Hi, i am ${ this.name }`;
    }
    getDescription(){
        return `${this.name} is ${this.age} year(s) old.`;
    }
} 

class Student extends Person {
    constructor(name, age, major) {
    // Using the super() method, we let the constructor from the super class/parent class (Person) set its 
    // values first, before we set the values for the child class. 
    super(); 
    this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
}
    
const me = new Student('Pedro', 27, 'Computer Science');
console.log(me.hasMajor());

const other = new Student();
console.log(other.hasMajor());

