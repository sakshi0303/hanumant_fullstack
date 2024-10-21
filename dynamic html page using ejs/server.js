let express=require('express');
let port=1900
let path=require('path')
let app=express();

app.set('view engine','ejs')

let websitepath=path.join(__dirname,'pages/Home.html')
app.get('/',(req,res)=>{
    let obj={
        name:"sakshi",
        age:230
    }
    let arr=[23,32,4324,13]
    //res.render('index',{obj,arr})
    res.sendFile(websitepath)


})

app.listen(port,()=>{
    console.log(`server is running on port${port}`);
})