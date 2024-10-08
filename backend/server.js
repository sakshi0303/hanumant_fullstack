const express = require('express')
const app = express()
const port=8080


const connecttodb=require('./db')
connecttodb()

app.use(express.json())

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
