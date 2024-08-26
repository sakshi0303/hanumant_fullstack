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

app.post('/register',async(req,res)=>{
  try{
    let {name,email,password}=req.body;
    let data=await usercollection.create({
    name:name,email:email,password:password

    
  })
  res.json({msg:"user successfully registered",sucess:true,data})

  }catch(error){
    res.json({msg:"user  register failed",sucess:false,error})

  }

})



app.listen(port,()=>
  console.log(`server is running on ${port}`+`http://localhost:${port}`)
)
