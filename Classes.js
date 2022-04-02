
    class Student {
    constructor(name, age) {
    this.name = name
    this.age = age
    }
    
    getName() {
    return this.name
    }
    
    setName = name => this.name = name
    
    getAge = _ => this.age
    
    setAge = age => this.age = age
    }
    
    let result = new Student("rutu", 22)
    
    let nameOfStudent = result.getName()
    let ageOfStudent = result.getAge()
    
    console.log("Name and Age", nameOfStudent, ageOfStudent)