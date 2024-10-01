
// #put, same Object
// #patch: new create Object
const registerUser=(req,res)=>{
    res.send(" register api working good ")

}

const loginUser=(req,res)=>{
    res.send("login api working good")

}

const updateUser=(req,res)=>{
    res.send("update api working good")

}

const deleteUser=(req,res)=>{
    res.send("delete api working good")

}

module.exports={
    registerUser,
    loginUser,
    updateUser,
    deleteUser
}