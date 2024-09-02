//step1: create server
//step2: database create, make db.js, export and call nodemon server.js
//create collection in modole folder using new mongose.schema (for input validations) and export  usercollection=mongoose.model('user',userschema)
//in server.js make the API calling
// req: has req.body and url has req.params 
// usercollection.create() in API
// run the server and make arequest in postman with body and json format
// middle ware are fucntion in which we modify request and response and are used with routes via 'use' keyword
const express=require('express')
const app=express()
const port=8081
const mongoosedb=require('./db')
mongoosedb()

app.use(express.json())

let userrouter=require('./routes/UserRoutes')
let postroute=require('./routes/PostRoutes')


app.get('/',(req,res)=>{
  res.send('welcome')
})

app.use('/user',userrouter)
app.use('/post',postroute)


app.listen(port,()=>{
  console.log(`server is running on ${port} ` + `http://localhost:${port}`);
})

//always use try catch so the server does not stop when the unquire error came , server in the background should keep on working
// in mongoose we have create instead of insertOne

// let userCollection=require('./models/UserSchema')
// app.post('/register',async (req,res)=>{
//   try{
//     let {name,email,password}=req.body;
//     let data=await userCollection.create({
//     name:name,
//     email:email,
//     password:password
//     })

//     res.json({msg:"user registerd successfully",sucess:true,data})

//   }catch(error){
//     res.json({msg:"error in user registeration",sucess:false,error})
//   }

// })

