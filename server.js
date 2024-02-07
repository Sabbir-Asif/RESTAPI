const express = require('express')

const app = express()

const PORT = process.env.PORT || 3000

app.get('/',(req, res) =>{
    res.send('<h1>Hello World!<h1>')
})

app.get('/posts',(req,res) =>{
    res.send('<h1> I am post page.<h1>')
})

app.get('/api/contents',(req,res) =>{
    res.json(contacts)
})

app.post('/api/contents',(req,res) => {
    res.json('I am post method')
})

app.listen(PORT, () => {
    console.log(`server is running on PORT ${PORT}`)
})

const contacts = [
    {name: 'Sabbir', email: 'example1@gmail.com'},
    {name: 'Hosen', email: 'example2@gmail.com'},
    {name: 'Asif', email: 'example3@gmail.com'}
]