const loadedWindowResponse = await fetch('/loadwindow')
const responseJSON = await loadedWindowResponse.json()

let fieldUsername = document.querySelector("input[type='text']")
let fieldPassword = document.querySelector("input[type='password']")
let saveButton = document.querySelector("#save")
let loadButton = document.querySelector("#load")
fieldUsername.value = responseJSON.logInformation.username;
fieldPassword.value = responseJSON.logInformation.password;

saveButton.addEventListener("click", e => {
    let username = fieldUsername.value;
    let password = fieldPassword.value;
    console.log(username , password)
    const logInfo = { username, password }
    const requestInfo = {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(logInfo)
    }
    fetch('/pr', requestInfo);
})
loadButton.addEventListener("click", async e => {
    const response = await fetch('/gr')
    const json = await response.json()
    console.log("GET --- ",json.logInformation.username,'--------------',json.logInformation.password)
    fieldUsername.value = json.logInformation.username;
    fieldPassword.value = json.logInformation.password;


})