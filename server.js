const express = require('express')

const contactRoute = require('./api/routs/contact');
const app = express()

const PORT = process.env.PORT || 3000

app.use('/api/contacts', contactRoute);

app.get('/',(req, res) =>{
    res.send('<h1>Hello World!<h1>')
})

app.listen(PORT, () => {
    console.log(`server is running on PORT ${PORT}`)
})

const contacts = [
    {name: 'Sabbir', email: 'example1@gmail.com'},
    {name: 'Hosen', email: 'example2@gmail.com'},
    {name: 'Asif', email: 'example3@gmail.com'}
]