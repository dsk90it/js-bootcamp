class Person{
    constructor(fName, lName, age, likes=[]){
        this.firstName = fName,
        this.lastName = lName,
        this.age = age,
        this.likes = likes
    }

    getBio(){
        let bio = `${this.firstName} is ${this.age} years old.`

        let getLikes = this.likes.map((like) => {
            return like
        }).join(', ')

        return this.likes.length > 0 ? bio += ` ${this.firstName}'s likes are ${getLikes}` : bio
    }

    set fullName(fullName){
        const names = fullName.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

class Employee extends Person{
    constructor(fName, lName, age, position, likes){
        super(fName, lName, age, likes)
        this.position = position
    }

    getBio(){
        return `${this.fullName} is a ${this.position}.`
    }

    getYearsLeft(){
        return `${65-this.age} Years left for Retirement`
    }
}

class Student extends Person{
    constructor(fName, lName, age, grade, likes){
        super(fName, lName, age, likes)
        this.grade = grade
    }

    updateGrade(mark){
        this.grade += mark
        return this.getBio()
    }

    getBio(){
        const status = this.grade >= 70 ? 'passing' : 'failing'
        return `${this.firstName} is ${status} the class`
    }
}

const me = new Employee('Senthilkumar', 'Devaraj', 29, 'Software Developer', ['Travelling'])
me.fullName = 'Andrew Mead'
console.log(me.getBio());
