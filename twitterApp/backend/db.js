const mongoose = require('mongoose');

const connecttodb=()=>{
    mongoose.connect('mongodb://127.0.0.1:27017/TwitterApp')
  .then(() => console.log('mongoose db Connected!'))
  .catch(()=>console.log('Error in DB connection'))

}

module.exports= connecttodb