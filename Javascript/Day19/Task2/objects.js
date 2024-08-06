// Write a script that defines an object with various properties and methods.

const obj = {
    name: 'Haider',
    age: 23,
    occupation: 'Web Developer',

    getDetails: function() {
        console.log(`Student Details: 
        Name: ${this.name} 
        Age: ${this.age} 
        Occupation: ${this.occupation}`);
    },
}

console.log(obj.age); // to get a specific obj data
console.log(obj.getDetails());
