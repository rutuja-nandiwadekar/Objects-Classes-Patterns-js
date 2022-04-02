const Person = {
    personName : "rutu",
    age : 23,
    address : "ratnagiri"
    }


    //simple way
    // console.log("Person Age is =",Person.age)
    // console.log("Person Name is =",Person.personName)
    // console.log("Address is =",Person.address)
    

    //es6 object destructuring
    let {personName, age, address} = Person;
    console.log("Person Age is =",age)
    console.log("Person Name is =",personName)
    console.log("Address is ",address)