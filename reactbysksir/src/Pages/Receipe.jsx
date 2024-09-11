// go to bootstramp and get the card item and return via map
// in link tab ew can use state to send data new component
// useLocation has state is correctly in which path and
//     <link href="/view" state={ele} className="btn btn-primary">View Receipe</link>
import React from 'react'
import { useEffect,useState } from 'react'
import {Link} from 'react-router-dom'

const Receipe = () => {
    const [data,setdata]=useState([])
    const getdata=async()=>{
        let res=await fetch('https://api.edamam.com/search?q=biryani&app_id=f0034b10&app_key=faea6a21bbca23a641627a59130fa310')
        let data=await res.json()
        console.log(data.hits);
        setdata(data.hits)

    }

    useEffect(()=>{
        getdata()

    },[])
  return (
    // container has taken bydault 80% of width conatiner will go to left
    // row and container are bootram predined classes whose values can be changes
    <div className='row m-0 p-0 justify-content-center bg-warning gap-3 container m-auto'>
      {data.map((ele,i)=>{
        // go to bootstramp and get the card item and return via map
        return <div key={i} className="card" style={{width: '18rem'}}>
  <img src={ele.recipe.image} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{ele.recipe.label}</h5>
    

    <button onClick={()=>console.log(ele)}>click Me</button>
    {/* <p className="card-text"></p> */}
    <Link to="/view" state={ele} className="btn btn-primary">View Receipe</Link>
  </div>
</div>

      })}
    </div>
  )
}

export default Receipe
