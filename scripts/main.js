import { getRandomUsers } from "../scripts/dataManager.js"
import {userDetail} from "../scripts/userData.js"




const startGetRandomUsers = () => {
    const postElement = document.querySelector(".userList");
    getRandomUsers().then(response => {
    postElement.innerHTML = userDetail(response)
    })

}
startGetRandomUsers();

const applicationElement = document.querySelector(".dateBtn")

applicationElement.addEventListener("click", (event) => {
    if (event.target.id === "dateBtn") {
        startGetRandomUsers();
    }
})

// document.getElementById("dateBtn").onclick= startGetRandomUsers


console.log("You look marvelous!")

