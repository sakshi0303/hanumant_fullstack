const express=require('express')
const app=express()
const port=8081
const userdb=require('./db')
userdb()

let userCollection=require('./models/UserSchema')

app.use(express.json())


app.get('/',(req,res)=>{
  res.send('welcome')
})
//always use try catch so the server does not stop when the unquire error came , server in the background should keep on working
// in mongoose we have create instead of insertOne
app.post('/register',async (req,res)=>{
  try{
    let {name,email,password}=req.body;
    let data=await userCollection.create({
    name:name,
    email:email,
    password:password
    })

    res.json({msg:"user registerd successfully",sucess:true,data})

  }catch(error){
    res.json({msg:"error in user registeration",sucess:false,error})
  }



})

app.listen(port,()=>{
  console.log(`setrver is running on ${port} ` + `http://localhost:${port}`);
})