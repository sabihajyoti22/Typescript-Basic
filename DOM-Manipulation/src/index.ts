const userForm = document.querySelector(".userForm") as HTMLFormElement

const userName = document.querySelector("#name") as HTMLInputElement
const userEmail= document.querySelector("#email") as HTMLInputElement
const userSelect = document.querySelector("#lang") as HTMLSelectElement

userForm.addEventListener("submit",(event: Event)=>{
    event.preventDefault()
    const userInfo = {
        userName: userName.value,
        userEmail: userEmail.value,
        userLanguage: userSelect.value
    }
    console.log(userInfo)
})
