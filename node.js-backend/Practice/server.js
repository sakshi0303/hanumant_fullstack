const express=require('express')
const app=express()
const port=8080

app.use(express.json())

const {usercollection,videocollection}= require('./mongodb')
app.get('/',(req,res)=>{
  res.send('welcome to netflix mongodb project 1 through node.js')
})

app.post('/register',async(req,res)=>{
  let name=req.body.name
  let email=req.body.email
  let password =req.body.password
  let userdb=usercollection()
  let data=(await userdb).insertOne({
    name:name,
    email:email,
    password:password

  })

  //res.send("data is inserted ")

  res.json({msg:"data is inserted",data})

})
app.listen(port,()=>{
  console.log(`server is running on ${port}`);
})