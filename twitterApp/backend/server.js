const express = require('express')
const app = express()
const port=8080
// nodemon server.js
// npm i cors
//cross origin resourse sharing
const cors=require('cors')

app.set('view engine','ejs')

const connecttodb=require('./db')
connecttodb()

app.use(express.json({limit:"50mb"}))
app.use(cors()) //not blocking the api request sending from one port to another
// isntall toash

let UserRouter=require('./routes/UserRoutes')
let PostRouter=require('./routes/PostRoutes')
app.use('/users',UserRouter)
app.use('/posts',PostRouter)

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(port,()=>{
    console.log(`server is running on port:${port}`)
})
