import { getRandomUsers } from "../scripts/dataManager.js"


export const userDetail = (userObj) => {
    console.log(userObj)
    return         `<div>
                    <div><img src="${userObj.picture.large}"></div>
                    <h1>${userObj.name.title} ${userObj.name.first}  ${userObj.name.last}</h1>
                    <h3>Contact Information</h3>
                    <h4>Email: ${userObj.email}</h4s>
                    <h4>Phone: ${userObj.phone}</h4>
                    <h4>Cell: ${userObj.cell}</h4>
                
                    <h3>Bio</h3>
                    <p>I live in ${userObj.location.city}, ${userObj.location.state} ${userObj.location.postcode} on ${userObj.location.street.name} ${userObj.location.street.number}</p>
                    <p>My name is ${userObj.name.title} ${userObj.name.first}  ${userObj.name.last},
                     I was born on ${formatDate(userObj.dob.date)} and I am ${userObj.dob.age} years old.
                      I identify as ${userObj.gender}, and I registered on ${formatDate(userObj.registered.date)},
                      when I was ${userObj.registered.age} </p>
                </div>`
}


const formatDate = (date) => {
const formattedDate = new Date(date)
return formattedDate.toLocaleDateString()
}