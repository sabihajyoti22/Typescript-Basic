var User = /** @class */ (function () {
    function User(ID, userName) {
        this.ID = ID;
        this.userName = userName;
    }
    User.prototype.display = function () {
        console.log("User Id is : ".concat(this.ID, ", Username is : ").concat(this.userName));
    };
    return User;
}());
var user1 = new User(123, "xyz");
user1.display();
