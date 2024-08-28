const express=require('express')
const { getallUser, createuser, deleteUser, updateuser } = require('../controllers/UserController')

const router=express.Router()

router.get('/getall',getallUser)
router.post('/create',createuser)
router.delete('/delete',deleteUser)
router.put('/update',updateuser)

module.exports=router