var users;
users = [];
var user1;
user1 = {
    id: 136,
    name: "Jyoti",
    dept: "CSE"
};
users.push(user1);
var user2;
user2 = {
    id: 100,
    name: "Bushra",
    dept: "Managment"
};
users.push(user2);
users.forEach(function (user) {
    console.log("User Id: ".concat(user.id, ", User Name: ").concat(user.name, ", User Dept: ").concat(user.dept));
});
