//nodemon server.js to run
//https://www.npmjs.com/package/mongodb

const express=require('express')
const app=express();
const port=8080


app.get('/',(req,res)=>{
  res.send('welcome page')

})


app.listen(port,()=>{
  console.log(`server is listening on ${port}`);

})

