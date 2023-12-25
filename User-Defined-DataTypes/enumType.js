// No duplicate data, helps to store constants
// Numeric Enum
// enum UserRequest{
//     ReadData=123, 
//     SaveData,
//     UpdateData
// }
// console.log(UserRequest.ReadData)
// console.log(UserRequest.SaveData)
// console.log(UserRequest.UpdateData)
// String Enum
// enum UserRequest{
//     ReadData = "ReadData", 
//     SaveData = "SaveData",
//     UpdateData = "UpdateData",
// }
// console.log(UserRequest.ReadData)
// console.log(UserRequest.SaveData)
// console.log(UserRequest.UpdateData)
// Heterogenus Enum
var UserRequest;
(function (UserRequest) {
    UserRequest[UserRequest["ReadData"] = 1322] = "ReadData";
    UserRequest["SaveData"] = "SaveData";
    UserRequest["UpdateData"] = "UpdateData";
})(UserRequest || (UserRequest = {}));
console.log(UserRequest.ReadData);
console.log(UserRequest.SaveData);
console.log(UserRequest.UpdateData);
