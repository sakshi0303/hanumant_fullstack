import React from 'react'
import {Link,useLocation} from 'react-router-dom'

const ViewReceipe = () => {
    let location=useLocation()
    console.log(location.state);
    let recipe=location.state.recipe

   
  return (
      <div className="container">
        <div className="row">
          <div className="col-sm-4 bg-info d-flex justify-content-center ">
            <img src={recipe.image} alt=""  />

          </div>
          <div className="col-md-8">
            <h4 className='my-3'>Title:{recipe.label}</h4>
            <h5 className='my-3'>DishType:{recipe.dishType}</h5>
            <h6 className='my-3'>CousineType:{recipe.cousineType}</h6>
            <Link to={recipe.url}>View Recipe</Link>

          </div>

        </div>
        
        <div className="row mt-3">
          <div className="col-md-6">
            <h3>Ingrediant Lines</h3>
            <ul>
            {recipe.ingredientLines.map((ele)=>{
              return <li> {ele}</li>
            })}
            </ul>
          </div>
          {/* <div className="col">
            <ul>
            {
            recipe.totalNutrients.map((ele)=>{
              return <li> label:{ele.label} quantity: {ele.quantity} unit: {ele.unit}</li>
            })}
            
            </ul>
          </div> */}
          <div className="col-md-6">
            <ul>
              <h3> Health Labels</h3>
            {recipe.healthLabels.map((ele)=>{
              return <li> {ele}</li>
            })}
            </ul>
          </div>

        </div>
      </div>
      
           
      
 
  )
}

export default ViewReceipe