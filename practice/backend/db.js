const mongoose = require('mongoose');

const userdb=()=>{
  mongoose.connect('mongodb://127.0.0.1:27017/Pratice')
  .then(() => console.log('Mongoose DB Connected!'))
  .catch(error=>{console.log(error)})
}

module.exports=userdb