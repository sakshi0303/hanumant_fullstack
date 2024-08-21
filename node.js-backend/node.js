// Node.js--> run time environment (when we run the code it will exexute)
// node.js runs in terminal and  runs javascript outside the browser
// connect with
// it is not a programing language
//
// chrome has javasrict version v-8 enginer
// firefox-> spidermonkey
// // npm init -y ()
// --npm i express mongodb
// --package.json--> basic information
// --go to mongodb website and go to products and click on Try COMMUNITY Edition


download in brew
// npm i express 
// npm i -g nodemon (server keeps on running)

// mongo db compass :
//download mongodb compass:
// db--> collection --> data

// nodemon .\server.js

mongodb::
  - it is no sql database
  -here data is stored in a form of Object
  -the data stored in the collection
  -collection do not have row and columns

CRUD functionality in CRUD
> show dbs   // show all database in that terminals
> use trail            // switched to db trail dataabase
> db.createCollection('User')   // create collection  { ok: 1 }
> db.User.insertOne({name:'sakshi',age:30})  // insert the value  acknowledged: true,
> db.User.insertMany([{name:'sakshi',age:39},{name:'sakshi2',age:44}])

it will automitically create unique id

//'User': is collection
> db.User.find(); // to display all data inside User collection in terminal
> db.User.findOne({name:"sa"}) // returns one data with objectid get single data
> db.User.find({name:'sa'}) // returns all data with respective objectid
> db.user.deleteOne({_id:ObjectId('66c5b82eeb498e0d3332d83a')})// delete single data
> db.user.deleteMany({age:23}) //multiple delete
>db.user.updateOne({name:"s"},{$set:{name:"sa-n"}})




npm init -y // inistalise and create package.json
npm init i express mongodb

create server creation on port 8080 on server.js
nodemon server.js
//nodemon server.js to run
//https://www.npmjs.com/package/mongodb

destructure:
let Obj={
  name:'sakshi',
  age:34
}

const {name,age}=Obj;
console.log(name);



-------one.js FILE ------>>
let x=10
let name='xyz'

function xyx(){
  console.log("inside xyz");
}
module.exports={x,name,xyz}

----main.js FILE ----->
let {x,name,xyz}=require('./one.js')
console.log(x)
console.log(name)
xyz();