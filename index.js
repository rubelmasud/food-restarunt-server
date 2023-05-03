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

app.get('/allChefData/:id', (req, res) => {
    const Id = req.params.id;
    const Chef = allChefData.find(chef => chef.id == Id)
    res.send(Chef)
})

app.listen(5000, () => {
    console.log('server is running port 5000');
})


// app.get('/news/:id', (req, res) => {
//     const id = req.params.id;
//     const selectedNews = news.find(n => n._id === id)
//     res.send(selectedNews)
// });