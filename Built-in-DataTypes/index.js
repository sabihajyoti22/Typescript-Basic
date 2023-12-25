var firstName;
var lastName;
var fullName;
var occupation;
firstName = "Jone";
lastName = 'Doe';
occupation = "Teacher";
console.log(firstName.toUpperCase());
console.log(lastName);
console.log(occupation.split(","));
var printFullName = function (firstName, lastName) {
    if (lastName !== undefined) {
        console.log("Fullname is : ".concat(firstName.concat(lastName)));
    }
    else {
        console.log("Can't print fullname");
    }
};
printFullName("Filmy", " guy");
