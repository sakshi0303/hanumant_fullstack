
// #put, same Object
// #patch: new create Object
// amdocs 
//7275536613: Shaurya Hanumant 

var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);

var jwt = require('jsonwebtoken');
var JWT_SECRET="idjwttoaknsakshi"

require('dotenv').config()

let User=require('../models/UserSchema')
var crypto=require('crypto')
const nodemailer = require("nodemailer")

const registerUser=async(req,res)=>{
    let {name, email,password,address}=req.body
    if (!password){
        return res.json({msg:"password is mandartory field",success:false})
    }
    try{
        let Userexist=await User.findOne({email})
        if (Userexist){
            return res.json({msg:"user already exist",success:false})
        }
        else{
            let hashpassword= await bcrypt.hashSync(password, salt);
            let user= await User.create({
                name,email,
                password:hashpassword,
                address
            })
            res.json({msg:" user is registered successfully",success:true,user})
        }
}catch(error){
    res.json({msg:"error in creating user",error:error.message,success:false})
}
}

const loginUser=async(req,res)=>{

    let {email,password}=req.body
    try{
        let checkuser= await User.findOne({email})
        console.log(checkuser)
        if (checkuser){

            let checkpassword=await bcrypt.compareSync(password,checkuser.password)
            if (checkpassword){
                var token = jwt.sign({ _id:checkuser.id }, JWT_SECRET);
                return res.json({msg:"user login successfully",success:true,token:token})
            }else{
                return res.json({msg:"invalid password",success:false})
            }

        }else{
            res.json({msg:"user not fond",success:false})
        }

    }catch(error){
        res.json({msg:"error in login in user",success:false,error:error.message})

    }

}

const updateUser=async(req,res)=>{
    // res.send("update api working good")
    let userid=req.user
    let _id=req.params._id;
    if(userid!==_id){
       return res.json({msg:"unauthorised",success:false})
    }
    let {name,password,address,ProfilePic,CoverPic}=req.body
    let hashpassword;
    if (password){
        hashpassword = bcrypt.hashSync(password, salt);
    }
    
    try{
        let data=await User.findByIdAndUpdate(userid,{$set:{name,password:hashpassword,address,ProfilePic,CoverPic}},{new:true})
        return res.json({msg:"data updated successdully",success:true,data})


    }catch(e){
        return res.json({msg:"error in updating data",success:false,error:e.message})

    }

}

const deleteUser=async(req,res)=>{
    let id=req.params._id
    let _id=req.user
    try{
        if (id===_id){
            await User.findByIdAndDelete(_id)
            return res.json({msg:"user deleted successfully",success:true,})
    
        }else{
            return res.json({msg:"You can delete your own account",success:false})
        }

    }catch(e){
        return res.json({msg:"Error while delteing user",success:false,error:e.message})

    }

    // let data=await User.findByIdAndDelete(id)
    // res.json({msg:"user deleted",usr:data})

}

const getuserinfo=async(req,res)=>{
    try {
        let userid=req.user;
        // let user =await User.findById(userid).select(_id)
        let user =await User.findById(userid)
        return res.json({msg:"taken is successfully fetched",success:true,user})
    } catch (error) {
        return res.json({msg:"error in getting userinfo",success:false,error:error.message})
        
    }

}

const forgotpassword=async(req,res)=>{
    
    let {email}=req.body;
    let user=await User.findOne({email})
    if (user){
        var resetToken = crypto.randomBytes(64).toString('hex'); // we can use npm randomstring as wee search stack overflow generate token with crypto
        //var resetToken =await randomstring.generate(18);
        user.resetToken=resetToken
        await user.save();
        //method2
        // await User.findByIdAndUpdate(user._id,{$set:{resetToken}})

        let datasend=sendMail(email,resetToken)
        res.json({msg:"token saved successfully",resetToken,success:true})

    }else{
        res.json({msg:" user not found ",success:false})

    }

}

async function sendMail(email,resetToken){

    const transporter = nodemailer.createTransport({
        // host: "smtp.ethereal.email",
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for port 465, false for other ports
        auth: {
          user: process.env.NodeMailerEmail,
          pass: process.env.NodeMailerPasswod,
        },
      });

      const info = await transporter.sendMail({
        from: '"Sakshi 👻" <srvsakshi03@gmail.com>', // sender address
        to: email, // list of receivers
        subject: "Request token for password resent✔", // Subject line
       
        //html: `<b>hello this is your reset password link click the link below http://localhost:8080/users/resetToken/${resetToken}</b>`, // html body
        text: `<b>hello this is your reset password link click the link below http://localhost:8080/users/resetToken/${resetToken}</b>`, // html body
   
      });
    
      console.log("Message sent: %s", info.messageId);

}

module.exports={
    registerUser,
    loginUser,
    updateUser,
    deleteUser,
    getuserinfo,
    forgotpassword
}