//nodemon server.js to run
//https://www.npmjs.com/package/mongodb


const express=require('express')
const app=express();
const port=8080

app.use(express.json()) //to read json file , postman request will be send in json format
const {usercollection,notescollection}=require('./db')
app.get('/',(req,res)=>{
  res.send('welcome page')
})

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
  res.send("data is saved successfully ")

  //run the nodemon server before checking in ppostman

})
app.listen(port,()=>{
  console.log(`server is listening on ${port}`);
})

