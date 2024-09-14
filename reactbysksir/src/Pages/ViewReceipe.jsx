import React from 'react'
import {Link,useLocation} from 'react-router-dom'

const ViewReceipe = () => {
    let location=useLocation()
    console.log(location.state);
    let recipe=location.state.recipe
    let totalNutrientsarr = Object.entries(recipe.totalNutrients)
    //console.log(totalNutrientsarr)

    let totalDailyarr=Object.entries(recipe.totalDaily)
    console.log(totalDailyarr);
   
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
            {recipe.ingredientLines.map((ele,i)=>{
              return <li key={i}> {ele}</li>
            })}
            </ul>
          </div>
          <div className="col">
            <ul>
              <h1>Total Nutrients</h1>
            {
            
            totalNutrientsarr.map(([key,value])=>{
              return <ul><b>{key}</b> <li className='mx-4'>{value.label}</li> <li className='mx-4'>{value.quantity}</li> <li className='mx-4'>{value.unit}</li></ul>
            })}
            
            </ul>
          </div>
          <div className="col-md-6">
            <ul>
              <h3> Health Labels</h3>
            {recipe.healthLabels.map((ele,i)=>{
              return <li key={i}> {ele}</li>
            })}
            </ul>
          </div>
          <div className='col'>
            <h3>totalDaily</h3>
          {totalDailyarr.map(([key,value])=>{
            return <ul><b>{key}</b><li className='mx-3'>{value.label}</li><li className='mx-3'>{value.quantity}</li> <li className='mx-3'>{value.unit}</li></ul>
          })}


          </div>

        </div>
      </div>
      
           
      
 
  )
}

export default ViewReceipe