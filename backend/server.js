const express = require('express')
const app = express()
const port=8080


const connecttodb=require('./db')
connecttodb()

let UserRouter=require('./routes/UserRoutes')
app.use('/users',UserRouter)

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(port,()=>{
    console.log(`server is running on port:${port}`)
})
