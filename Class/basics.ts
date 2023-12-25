class User {
    ID : number;
    userName : string;

    constructor(ID: number,userName: string){
        this.ID = ID;
        this.userName = userName
    }
    display(){
        console.log(`User Id is : ${this.ID}, Username is : ${this.userName}`)
    }
}

const user1 = new User(123, "xyz")
user1.display()