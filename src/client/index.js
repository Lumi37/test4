

let fieldUsername = document.querySelector("input[type='text']")
let fieldPassword = document.querySelector("input[type='password']")
let saveButton = document.querySelector("#save")
let loadButton = document.querySelector("#load")

saveButton.addEventListener("click", e => {
    let username = fieldUsername.value;
    let password = fieldPassword.value;
    const logInfo = { username, password }
    const requestInfo = {
        method: 'POST',
        headers: { 'Content-type': 'plain/text' },
        body: JSON.stringify(logInfo)
    }
    fetch('/pr', logInfo);
})
loadButton.addEventListener("click", async e => {
    const response = await fetch('/gr')
    const json = await response.json()
    //  console.log("")
    fieldUsername = json.username;
    fieldPassword = json.passwordl

})