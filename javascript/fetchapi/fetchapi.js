fetch('https://dummyjson.com/products')
.then((res)=>res.json())
.then((data)=>console.log(data))
.catch((error)=> {console.log(error)})

let box1=document.querySelector('.box1')

async function getapi(){
  let raw= await fetch('https://randomuser.me/api/')
  let data = await raw.json()
  console.log(data);

  box1.innerHTML=`
  <h1> First Name:= ${data.results[0].name.first}</h1>
  <h1> Last Name:=${data.results[0].name.last}</h1>
  <h1> Country Name: ${data.results[0].location.country}</h1>
  <h1> State Name:= ${data.results[0].location.state}</h1>
  <h1> Post Code:=${data.results[0].location.postcode}</h1>
  <img src="${data.results[0].picture.medium}"> 
  `
}

getapi()


async function getapidata(){
  let rawdata=await fetch('https://randomuser.me/api/')
  let data=await rawdata.json()
  console.log(data);
  box1.innerHTML=`
  <h1> first name: ${data.results[0].name.first}<h1>
  <h1> last name:${data.result[0].name.last}<h1>
  <img src="${data.result[0].picture.medium}">
  `

}
getapidata()