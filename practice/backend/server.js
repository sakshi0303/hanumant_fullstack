const express=require('express')
const app=express()
const port=8080
app.use(express.json())

const User_router=require('./routes/Userroutes')
app.use('/user',User_router)


app.get('/',(req,res)=>{
  res.send('welcome')
})



const dbcon=require('./db')
dbcon()


app.listen(port,()=>{
  console.log(`port is runing on ${port}`+`http://localhost:${port}`);
})
