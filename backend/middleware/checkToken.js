// MIDDLEWARE's are functions that modify the request and response that can be used between the routes
// app.use(expres.json)
// after login we will get the token then that token is sent in delete request as res.header.authorisation

var jwt = require('jsonwebtoken');
var JWT_SECRET="idjwttoaknsakshi"
let checkToken=async(req,res,next)=>{
    // req.headers will come in small case by default
    try{
        let token=req.headers.authorization
    // decoded token of "_id" of the peron who has logged in
    var decoded = jwt.verify(token, JWT_SECRET);
    console.log("DECODED ",decoded) // DECODED  { _id: '66ffc0628557e0b658654a08', iat: 1728037936 }
    req.user=decoded._id
    next()
    }catch(e){
        return res.json({msg:"check correct token",success:false})
    }
}
module.exports=checkToken

