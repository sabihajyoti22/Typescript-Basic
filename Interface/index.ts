interface IUser{
    id: Number,
    name: string,
    dept: string
}

let users : IUser[];
users = []

let user1 : IUser;
user1 = {
    id: 136,
    name: "Jyoti",
    dept: "CSE"
}
users.push(user1)

let user2 : IUser;
user2 = {
    id: 100,
    name: "Bushra",
    dept: "Managment"
}
users.push(user2)

users.forEach((user) => {
    console.log(`User Id: ${user.id}, User Name: ${user.name}, User Dept: ${user.dept}`)
})