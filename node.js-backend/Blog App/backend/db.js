const mongoose = require('mongoose');


//BlogApp is the database name
const mongoosedb=()=>{
  mongoose.connect('mongodb://127.0.0.1:27017/BlogApp')
  .then(() => console.log('mongoose DB Connected!'))
  .catch((error)=>{console.log('db error'+error);})
}


module.exports=mongoosedb