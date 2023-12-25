"use strict";
const userForm = document.querySelector(".userForm");
const userName = document.querySelector("#name");
const userEmail = document.querySelector("#email");
const userSelect = document.querySelector("#lang");
userForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const userInfo = {
        userName: userName.value,
        userEmail: userEmail.value,
        userLanguage: userSelect.value
    };
    console.log(userInfo);
});
