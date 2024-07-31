const obj = {
    studentName: 'Haider',
    rollNo: '21',
    course: 'Computer Science',

    //method
    getDetails: function() {
        console.log(`Student Details: 
        Name: ${this.studentName} 
        Roll No: ${this.rollNo} 
        Course: ${this.course}`);
    },

    updateCourse: function(newCourse) {
        this.course = newCourse;
        console.log(`Course updated to: ${this.course}`);
    }
}

//Function to check whether a object with the key exists!
function getValue(obj, key){
    if(obj.hasOwnProperty(key)){
        return obj[key];
    } else{
        return undefined;
    }
}

//Test 
const key = "studentName";
const value = getValue(obj, key)
console.log(`the value against the key ( ${key} ) is: ${value}`);
obj.getDetails(); 
obj.updateCourse('Data Science');

module.exports = getValue;




