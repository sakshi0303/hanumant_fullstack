//get return c ard value from bootstrap
//github
//project live??? 
// #one row can have 12 colms'
/// uuselocation give obj and path exist and path state has data or not
// for respinsive design md devuce 4, less than 
// breakpoints in bootstamp for responsive 
// col-md-4 for page responsive
//let navigate=useNavigate(x)
//react icons=https://react-icons.github.io/react-icons/ npm i react-icons
// location is use with state={}, Link, to
//The useLocation hook in React Router is used to access the current location (URL) in your app. It returns an object containing information about the URL, such as the pathname, search parameters, and state
//The useLocation hook can also be used to access the state passed via a route. This state is an object that contains data you might want to pass between routes without putting it in the URL
// TO GO LIVE : versel

import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';

const Recipe = () => {
  let searchRef = useRef()
  const [recipes, setrecipes] = useState([]);
  const [searchItem, setsearchItem] = useState("pizza");
  console.log(recipes)

  const getAllRecipe = async () => {
    let res = await fetch(`https://api.edamam.com/search?q=${searchItem}&app_id=7442af9a&app_key=3a95c099faea27e5c7bcc842f1bb689b`)
    let data = await res.json()
    console.log(data.hits)
    setrecipes(data.hits)

  }

  useEffect(() => {
    getAllRecipe()
  }, [searchItem])

  const handleSearch =(e)=>{
    e.preventDefault()
    let value = searchRef.current.value;
    console.log(value)
    setsearchItem(value)
  }

  return (

    <div>
      <form className="d-flex w-50 m-auto my-3 border border-danger" role="search">
        <input ref={searchRef} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button onClick={handleSearch} className="btn btn-outline-success" type="submit">Search</button>
      </form>

      <div className='row m-0 p-0 justify-content-center gap-3 container m-auto bg-warning mt-2'>


        {recipes.map((ele) => {
          return <div className="card" style={{ width: '18rem' }}>
            <img src={ele.recipe.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{ele.recipe.label}</h5>
              {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
              <Link to="/view" state={ele} className="btn btn-primary">view recipe</Link>

            </div>
          </div>

        })}
      </div>
    </div>


  )
}

export default Recipe