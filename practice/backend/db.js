const mongoose = require('mongoose');

const dbcon=(()=>{
  mongoose.connect('mongodb://127.0.0.1:27017/practice')
  .then(() => console.log('DB Connected!'))
  .catch((error)=>console.log('db error'+error))

})

module.exports=dbcon