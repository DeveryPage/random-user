import { getRandomUsers } from "../scripts/dataManager.js"
import {userDetail} from "../scripts/userData.js"




const startGetRandomUsers = () => {
    const postElement = document.querySelector(".userList");
    getRandomUsers().then(response => {
    postElement.innerHTML = userDetail(response)
    })

}
startGetRandomUsers();

const applicationElement = document.querySelector(".date-btn")

applicationElement.addEventListener("click", event => {
    if (event.target.class === ".date-btn") {
        return startGetRandomUsers();
    }
})


console.log("You look marvelous!")








// const getRandomUsers = () => {

// return fetch ("https://randomuser.me/")
// .then(response => response.json())
// .then(parsedResponse => {
//     return parsedResponse;
// });
// }