import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
//import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { add2cart } from '../store/CartSlice';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
    const [products, setproducts] = useState([]);
    let dispatch=useDispatch()
    // useSelector will get all store slices one by one
    let CartStore=useSelector((state)=>state.cart)
    console.log(CartStore);

    const getalldata=async()=>{
        let raw=await fetch('https://dummyjson.com/products')
        let data=await raw.json()
        console.log(data.products);
        setproducts(data.products)
       
        

    }

    useEffect(()=>{
        getalldata()

    },[])
  return (
    <div className='grid grid-cols-12 gap-3 p-2 bg-black'>
        {/* <h1 className='bg-yellow-200 text-center text-3xl font-bold underline'>hello</h1> */}
        
        {products.map((ele,i)=>{
            return (
                <Card key={i} className="bg-yellow-50 lg:col-span-3 md:col-span-4 sm:col-span-1 col-span-12 m-auto" sx={{ width: 345,height:"100%" }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={ele.thumbnail}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {ele.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {ele.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small" onClick={()=>dispatch(add2cart(ele))}>Add to Cart</Button>
      </CardActions>
    </Card>
            )
        })
    }

    </div>
  )
}

export default Home