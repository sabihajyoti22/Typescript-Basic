// public, private, protected, readonly
class Users {
    readonly userName: string;
    public age: number;

    constructor(userName: string, age: number) {
      this.userName = userName;
      this.age = age;
    }

    display(): void {
      console.log(`username: ${this.userName}, age: ${this.age}`);
    }
  }

  class Students extends Users {
    private studentId: number;

    constructor(userName: string, age: number, studentId: number) {
      super(userName, age);
      this.studentId = studentId;
    }
    display(): void {
      console.log(
        `username: ${this.userName}, age: ${this.age}, id: ${this.studentId}`
      );
    }

    setStudentId(studentId: number): void {
      this.studentId = studentId;
    }

    getStudentId(): number {
      return this.studentId;
    }
  }

  let students1 = new Students("keya", 31, 1302020015);
  students1.setStudentId(1302020017);
  console.log(students1.getStudentId());
  // student1.display();

  let users1 = new Users("robi", 23);
  console.log(users1.userName);
  // user1.display();