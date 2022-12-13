import express from 'express'
import fs from 'fs/promises'

const serverApp = express();

serverApp.use(express.static('../client'));
serverApp.use(express.json());

serverApp.post('/pr', async (req, res) => {
    console.log (await req.body.username, '----', await req.body.password )
    async function writeUsername(){
        try{
            await fs.writeFile('/home/kostas/test4/src/server/username.txt', req.body.username)
        }catch (err){
            console.log(err)
        }
    }
    async function writePassword(){
        try{
            await fs.writeFile('/home/kostas/test4/src/server/password.txt', req.body.password)
        }catch (err){
            console.log(err)
        }
    }
    writeUsername()
    writePassword()

    res.end();

})

serverApp.get('/gr', async (req, res) => {
    let logInformation = {}
    async function readUsername(){
        try{
            logInformation.username = await fs.readFile('/home/kostas/test4/src/server/username.txt', { encoding: 'utf8' })
            console.log('U',logInformation.username)
        }catch (err){
            console.log(err)
        }
    }
    async function readPassword(){
        try{
            logInformation.password = await fs.readFile('/home/kostas/test4/src/server/password.txt', { encoding: 'utf8' })
            console.log('P',logInformation.password)
        }catch (err){
            console.log(err)
        }
    }
    await readUsername()
    await readPassword()
    res.json({logInformation})
    res.end()

})

serverApp.get('/loadwindow', async (req,res)=>{
    let logInformation = {}
    async function readUsername(){
        try{
            logInformation.username = await fs.readFile('/home/kostas/test4/src/server/username.txt', { encoding: 'utf8' })
            console.log('U',logInformation.username)
        }catch (err){
            console.log(err)
        }
    }
    async function readPassword(){
        try{
            logInformation.password = await fs.readFile('/home/kostas/test4/src/server/password.txt', { encoding: 'utf8' })
            console.log('P',logInformation.password)
        }catch (err){
            console.log(err)
        }
    }
    await readUsername()
    await readPassword()
    res.json({logInformation})
    res.end()

})

serverApp.listen(3000, console.log("listens to 3000"));