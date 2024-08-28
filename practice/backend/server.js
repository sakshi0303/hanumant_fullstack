const express=require('express')
const app=express()
const port=8080

app.use(express.json())

//database created
const userdb=require('./db')
userdb()

let usercollection=require('./models/userSchema')

app.get('/',(req,res)=>{
  res.send("welcome")
})

const Userroutes=require('./routes/Userroutes')
app.use('/user', Userroutes);



app.listen(port,()=>
  console.log(`server is running on ${port}`+`http://localhost:${port}`)
)
