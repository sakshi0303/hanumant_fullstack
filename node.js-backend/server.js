//nodemon server.js to run
//https://www.npmjs.com/package/mongodb
// time waiting fucntion use async and await or then .catch
// app.use(express.json()) //to read json file , postman request will be send in json format
//run the nodemon server before checking in ppostman

//expresses is the minimum and flexible web application framework through which we will do API  calling and create web serves

const express=require('express')
const app=express();
const port=8080

app.use(express.json()) //to read json file , postman request will be send in json format
const {usercollection,notescollection}=require('./db')
app.get('/',(req,res)=>{
  res.send('welcome page')
})
// time waiting fucntion use async and await or then .catch
app.post('/register',async(req,res)=>{
  let name=req.body.name;
  let email=req.body.email;
  let password=req.body.password;
  let userdb=usercollection();
  let data=(await userdb).insertOne({
    name:name,
    email:email,
    password:password
  })
  //res.send("data is saved successfully ")
  res.json({msg:"data is inserted",data})
})
// POSTman request: http://localhost:8080/register/update/66c706d27987bb7de4b09696/pink
// QUERY PARAMETER : _id,color
app.put('/register/update/:_id/:color',async(req,res)=>{
  let {newname,newemail,newpassword}=req.body;
  console.log(req.params._id,req.params.color);
  let userdb=usercollection()
  let data=(await userdb).updateOne({_id:req.params._id},{$set:{name:newname,email:newemail,password:newpassword}})
  res.json({msg:"data is updated successfully",body:data})
  
})

//to show in the console that server is running we use console.log
app.listen(port,()=>{
  console.log(`server is listening on ${port}`);
})

