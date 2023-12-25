let firstName: string;
let lastName: string;
let fullName: string;
let occupation: string;

firstName = "Jone"
lastName = 'Doe'
occupation = "Teacher"

console.log(firstName.toUpperCase())
console.log(lastName)
console.log(occupation.split(","))

const printFullName = (firstName: string, lastName?: string)=>{
    if(lastName !== undefined){
        console.log(`Fullname is : ${firstName.concat(lastName)}`)
    }
    else{
        console.log("Can't print fullname")
    }
}

printFullName("Filmy"," guy")