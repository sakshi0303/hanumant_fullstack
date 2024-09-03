const mongoose = require('mongoose');

const moongoosedb=(
  mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => console.log('Connected!'))
  .catch((e)=> console.log(e))


)

module.exports=moongoosedb