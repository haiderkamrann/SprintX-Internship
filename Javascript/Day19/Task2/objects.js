const obj = {
    name: 'Haider',
    age: 23,
    occupation: 'Web Developer',

    getDetails: function() {
        console.log(`Student Details: 
        Name: ${this.studentName} 
        Age: ${this.age} 
        Occupation: ${this.occupation}`);
    },
}

console.log(obj.age); // to get a specific obj data
console.log(obj.getDetails());
