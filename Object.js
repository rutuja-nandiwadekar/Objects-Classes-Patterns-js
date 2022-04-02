const Person = {
    personName : "rutu",
    age : 23,
    address : "ratna"
    }
    
    const student = {
    name : "abc",
    age : 30,
    marks : {
    maths : 80,
    science : 90
    },
    displayMarks : function() {
    console.log("display science marks", this.marks.science )
    }
    }
    console.log("Person Age",Person.age)
console.log("Person Name",Person.personName)

console.log("Person Age using []",Person["age"])

var a = 10
var b = 20
var c = 30

const abc = {a : a, b : b, c : c} //es5
const abc1 = {a, b, c} //es6

student.displayMarks()