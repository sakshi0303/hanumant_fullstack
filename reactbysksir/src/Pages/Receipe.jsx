// go to bootstramp and get the card item and return via map
// in link tab ew can use state to send data new component
// useLocation has 
// container has taken bydault 80% of width conatiner will go to left
// row and container are bootram predined classes whose values can be changes
// go to bootstramp and get the card item and return via map
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const Receipe = () => {
  const [receipes, setreceipes] = useState([]);

  let getdata=async()=>{
    let raw=await fetch("https://api.edamam.com/search?q=biryani&app_id=f0034b10&app_key=faea6a21bbca23a641627a59130fa310")
    let data=await raw.json()
    console.log(data.hits)
    setreceipes(data.hits)
    //console.log(receipes.recipe.image);

  }

  useEffect(() => {
    getdata()
  }, []);
  return (
    <div>
      {receipes.map((ele)=>{
        return <div className="card" style={{width: '18rem'}}>
  <img src={ele.recipe.image} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>




      })}
      
    </div>
  )
}

export default Receipe

