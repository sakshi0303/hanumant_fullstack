import React,{useEffect,useState} from 'react'

const TrailApi = () => {
    const [items, setitems] = useState([]);


    const getdata=async()=>{
        let res=await fetch('https://dummyjson.com/products')
        let data=await res.json()
        console.log(data.products);
        setitems(data.products)


    }
    // it call infinte loop so we use effects
    //getdata()
    useEffect(() => {
        getdata()
      
    
      
    }, []) 
    



  return (
    <div>
      
    </div>
  )
}

export default TrailApi
