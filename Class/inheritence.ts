class AllStudents{
    username: string;
    age: number;

    constructor(username: string,age: number){
        this.username = username;
        this.age = age;
    }
    display() : void{
        console.log(`Username is : ${this.username}, User age is : ${this.age}`)
    }
}

class Student extends AllStudents{
    studentId: number;

    constructor(studentId: number, username: string, age: number){
        super(username, age);
        this.studentId = studentId;
    }
    display(): void {
        console.log(`Student ID: ${this.studentId}, Student Name is : ${this.username}, Student age is : ${this.age}`)
    }
}

const student1 = new Student(101, "xyz", 15)
student1.display()
const user1 = new AllStudents("xyz", 15)
user1.display()