var nameVar = 'Andrew';
var nameVar = 'Pedro';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Joe';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

function getPetName(){
    var petName = 'Hal';
    return petName;
}

const petName =  getPetName();
console.log('My pet name: ', petName);


//Block scoping
const fullName = 'Pedro Santos';
let fName;

if (fullName){
    fName = fullName.split(' ')[0];
    console.log(fName);
}

console.log(fName);