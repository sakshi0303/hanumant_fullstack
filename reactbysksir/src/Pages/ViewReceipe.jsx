import React from 'react'
import {useLocation} from 'react-router-dom'

const ViewReceipe = () => {
    let location=useLocation()
    console.log(location);
  return (
    <div>
      <div className="container">
        <div className="box1">
          <div className="section1">
          <img src={location.state.recipe.image} alt=""  />
          </div>
          <div className="section2"></div>
        

        </div>
        <div className="box2"></div>

      </div>
      
      
    </div>
  )
}

export default ViewReceipe