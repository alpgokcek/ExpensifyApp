console.log("destructure");
const person = {
    name:"Alp",
    age: 20,
    location:{
        city: 'Istanbul',
        temp:30
    }
};

const {name, age} = person;

console.log(`${name} is ${age}-years old.`);