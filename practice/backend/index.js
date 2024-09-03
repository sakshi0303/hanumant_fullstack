const express=require('express')
const app=express()
const port=8080


app.use('/',(req,res)=>{
  res.send("welcome")
})


app.listen(port,console.log(`app is running on port ${port}`+`http://localhost:${port}`))