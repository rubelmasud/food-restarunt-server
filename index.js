const express = require('express')

const app = express();

const allChefData = require('./chefdata.json')
const cors = require('cors')

app.use(cors())

app.get('/', (req, res) => {
    res.json({ message: 'server is running' })
})

app.get("/allChefData", (req, res) => {
    res.send(allChefData)
})

app.listen(5000, () => {
    console.log('server is running port 5000');
})