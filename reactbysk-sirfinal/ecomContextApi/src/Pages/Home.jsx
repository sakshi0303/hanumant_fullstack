// npm i axios
// https://dummyjson.com/products?limit=0&skip=0')
// import axios from 'axios'
// row will be by defaultspace so put have m-0 r-0
//  <div className='row m-0 p-0 bg-info justify-content-center gap-3'>
// in axios we dont have to convert into json
// limit=0&skip=0
// child to child transfer through parent via function 
// skelton, // npm i react-loading-skeleton

// react-toastify to make alert box visually good
import React,{useState , useEffect} from 'react'
import axios from 'axios'
import Demo from '../Components/Demo';
import { Link } from 'react-router-dom';

// npm i react-loading-skeleton
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Home = () => {
  
  const [product, setproduct] = useState([]);
  const [error, seterror] = useState(false);
  const [loading, setloading] = useState(false);
  const getdata=async()=>{
    setloading(true)
    try{
    let res=await axios.get('https://dummyjson.com/products?limit=0&skip=0')
    console.log(res);
    setproduct(res.data.products)
    setloading(false)
    }catch(error){
      console.log(error);
      seterror(true)
    }
  }
  useEffect(() => {
    getdata()
    
  }, [])

  const handleAdd=(obj)=>{

  }
 
  
 
  return (
    <div>
      {loading ? (

      <div className='row m-0 p-0 justify-content-center gap-3'>
         <SkeletonTheme baseColor="#202020" highlightColor="#444">
        {Array(6).fill(0).map((ele,index)=>{
          return <div className='col-md-3 m-4'>
            <Skeleton height={200} />
            <div className='d-flex justify-content-between'>
            <Skeleton height={100} />
            <Skeleton height={100} />
            </div>
            </div>

        })
      }
        </SkeletonTheme>

      </div>)
      :
      (
      <div>

        { error===false?
        (<div className='row m-0 p-0 bg-info justify-content-center gap-3'>
        {
        product.map((ele,i)=>{
          return ele.thumbnail && <div key={i}className="card" style={{width: '18rem'}}>
    <img src={ele.thumbnail} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">{ele.title}</h5>
      <p className="card-text"><strong>Price</strong>{ele.price} $</p>
      <Link to="/view" state={ele} className="btn btn-primary">View Details</Link>
      <button className='btn btn-info mx-1' onClick={()=>handleAdd(ele)} >Add to cart</button>
    </div>
  </div>
  
  
        })}
  
  
          
      </div>) :
      <Demo/>
      }
      </div>
      )
      }
    </div>
  )
}

export default Home