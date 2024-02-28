const express = require('express')
require('dotenv').config()
require('./Database/connection')

const TestRoute = require('./routes/testroute')
const ProgramRoute = require('./routes/ProgramRoutes')

const app = express()
const port = process.env.PORT

app.use(express.json())
// app.get('/hello', (request, response)=>{
//     response.send("HELLO WORLD")
// })

app.use(TestRoute)
app.use(ProgramRoute)

app.listen(port, ()=>{
    console.log(`server started successful at code ${port}`)
})