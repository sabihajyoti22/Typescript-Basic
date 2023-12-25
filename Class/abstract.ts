abstract class AllStudent{
    username: string;
    age: number;

    constructor(username: string,age: number){
        this.username = username;
        this.age = age;
    }
    abstract display() : void;
}

class Students extends AllStudent{
    studentId: number;

    constructor(studentId: number, username: string,age: number){
        super(username, age);
        this.studentId = studentId;
    }
    display(): void {
        console.log(`Student ID: ${this.studentId}, Student Name is : ${this.username}, Student age is : ${this.age}`)
    }
}

const students1 = new Students(101, "xyz", 15)
students1.display()
// const users1 = new AllStudent("xyz", 15)
// users1.display()