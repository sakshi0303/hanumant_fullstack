// npm i axios
// https://dummyjson.com/products?limit=0&skip=0')
// import axios from 'axios'
// row will be by defaultspace so put have m-0 r-0
//  <div className='row m-0 p-0 bg-info justify-content-center gap-3'>
// in axios we dont have to convert into json
// limit=0&skip=0
// child to child transfer through parent via function 
import React,{useState , useEffect} from 'react'
import axios from 'axios'
import Demo from '../Components/Demo';
import { Link } from 'react-router-dom';

const Home = (props) => {
  
  const [product, setproduct] = useState([]);
  const [error, seterror] = useState(false);
  const getdata=async()=>{
    try{
    let res=await axios.get('https://dummyjson.com/products?limit=0&skip=0')
    console.log(res);
    setproduct(res.data.products)
    }catch(error){
      console.log(error);
      seterror(true)
    }
  }
  useEffect(() => {
    getdata()
    
  }, [])

  const handleAdd=(ele)=>{
    console.log("handle add is called ");
    // we will run the function here inside child class from parent App.jsx file
    props.xyz(ele)

  }
  
 
  return (
    <div>
      { error===false?
        <div className='row m-0 p-0 bg-info justify-content-center gap-3'>
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
  
  
          
      </div> :
      <Demo/>
      }
    </div>
  )
}

export default Home