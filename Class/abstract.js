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
var AllStudent = /** @class */ (function () {
    function AllStudent(username, age) {
        this.username = username;
        this.age = age;
    }
    return AllStudent;
}());
var Students = /** @class */ (function (_super) {
    __extends(Students, _super);
    function Students(studentId, username, age) {
        var _this = _super.call(this, username, age) || this;
        _this.studentId = studentId;
        return _this;
    }
    Students.prototype.display = function () {
        console.log("Student ID: ".concat(this.studentId, ", Student Name is : ").concat(this.username, ", Student age is : ").concat(this.age));
    };
    return Students;
}(AllStudent));
var students1 = new Students(101, "xyz", 15);
students1.display();
// const users1 = new AllStudent("xyz", 15)
// users1.display()
