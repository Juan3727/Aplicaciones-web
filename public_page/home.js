import { userCard } from "../components/usercard.js";

const getUserData = (key)=>{
    return JSON.parse(sessionStorage.getItem(key))
}
const logOut = (key)=>{
    sessionStorage.removeItem(key)
}

window.addEventListener('load', ()=>{
    
    const userInfo = getUserData('userData')
    console.log(userInfo)
    const userContainer = document.getElementById('userContainer')
    const card = userCard(userInfo)
    
    userContainer.innerHTML = card

    document.getElementById('btnLogOut').addEventListener('click',()=>{
        logOut('userData')
        window.location.href = './login.html';
    })
})