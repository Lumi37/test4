import express from 'express'
import fs from 'fs/promises'

const serverApp = express();
serverApp.listen(3000, "listens to 3000");
serverApp.use(express.static('src/client'));

serverApp.post('/pr', (req, res) => {

})

serverApp.get('/pr', (req, res) => {

})