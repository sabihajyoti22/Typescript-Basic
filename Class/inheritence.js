var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AllStudents = /** @class */ (function () {
    function AllStudents(username, age) {
        this.username = username;
        this.age = age;
    }
    AllStudents.prototype.display = function () {
        console.log("Username is : ".concat(this.username, ", User age is : ").concat(this.age));
    };
    return AllStudents;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(studentId, username, age) {
        var _this = _super.call(this, username, age) || this;
        _this.studentId = studentId;
        return _this;
    }
    Student.prototype.display = function () {
        console.log("Student ID: ".concat(this.studentId, ", Student Name is : ").concat(this.username, ", Student age is : ").concat(this.age));
    };
    return Student;
}(AllStudents));
var student1 = new Student(101, "xyz", 15);
student1.display();
var user1 = new AllStudents("xyz", 15);
user1.display();
