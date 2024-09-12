// #one row can have 12 colms'
/// uuselocation give obj and path exist and path state has data or not
// for respinsive design md devuce 4, less than 
// breakpoints css for responsive 
// col-md-4 for page responsive
//let navigate=useNavigate(x)
//react icons=https://react-icons.github.io/react-icons/ npm i react-icons
// co
import React from 'react'
import {Link,useLocation} from 'react-router-dom'

const ViewReceipe = () => {
    let location=useLocation()
    console.log(location);
   
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <img src="" alt=""  />

          </div>
          <div className="col">
            <h4></h4>
            <h5></h5>
            <h6></h6>
            <Link>View Recipe</Link>

          </div>

        </div>
      </div>
      
           
      
    </div>
  )
}

export default ViewReceipe