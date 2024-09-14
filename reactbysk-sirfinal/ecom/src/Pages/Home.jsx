// npm i axios
// https://dummyjson.com/products?limit=0&skip=0')
// import axios from 'axios'
// row will be by defaultspace so put have m-0 r-0
//  <div className='row m-0 p-0 bg-info justify-content-center gap-3'>
// in axios we dont have to convert into json
// limit=0&skip=0
import React,{useState , useEffect} from 'react'
import axios from 'axios'
import Demo from '../Components/Demo';

const Home = () => {
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
  
 
  return (
    <div>
      { error===false?
        <div className='row m-0 p-0 bg-info justify-content-center gap-3'>
        {
        product.map((ele,i)=>{
          return ele.thumbnail && <div key={i}className="card" style={{width: '18rem'}}>
    <img src={ele.thumbnail} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title"></h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" className="btn btn-primary">Go somewhere</a>
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