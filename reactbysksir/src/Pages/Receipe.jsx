// go to bootstramp and get the card item and return via map
// in link tab ew can use state to send data new component
// useLocation has 
// container has taken bydault 80% of width conatiner will go to left
// row and container are bootram predined classes whose values can be changes
// go to bootstramp and get the card item and return via map
// tailwind and redux
import React, { useRef } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Receipe = () => {
  let seachref=useRef()
  const [receipes, setreceipes] = useState([]);
  const [searchItem, setsearchItem] = useState('biryani');

  let getdata=async()=>{
    let raw=await fetch(`https://api.edamam.com/search?q=${searchItem}&app_id=f0034b10&app_key=faea6a21bbca23a641627a59130fa310`)
    let data=await raw.json()
    console.log(data.hits)
    setreceipes(data.hits)
    //console.log(receipes.recipe.image);

  }

  let handlesearch=(e)=>{
    e.preventDefault()
    let value=seachref.current.value
    //console.log('seachvalue',value)
    setsearchItem(value)

  }

  useEffect(() => {
    getdata()
  }, [searchItem]);
  return (
    <div>
      <form className="d-flex bg-info m-auto my-3 border borader-danger" role="search">
  <input ref={seachref} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
  <button onClick={handlesearch} className="btn btn-outline-success" type="submit">Search</button>
</form>
    <div className='row m-0 p-0 justify-content-center bg-warning gap-3 container m-auto bg-info mt-2'>
      {receipes.map((ele,i)=>{
        return <div key={i}className="card" style={{width: '18rem'}}>
  <img src={ele.recipe.image} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{ele.recipe.label}</h5>
    
    <Link to="/view" state={ele} className="btn btn-primary">View Recipe</Link>
  </div>
</div>
//convert a to Link
// convert href to to
      })}
      </div>   
    </div>
  )
}

export default Receipe

