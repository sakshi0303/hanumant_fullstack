import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserById } from '../store/UserSlice';

const Home = () => {
  let dispatch=useDispatch();
  let userdetails=useSelector((state)=>state.user)
  console.log(userdetails)
  let token=userdetails.token

  console.log(token)
  console.log(userdetails)


  useEffect(()=>{
    dispatch(fetchUserById(token))

  },[token,dispatch])

 
  return (
    <div> THIS IS Home</div>
  )
}

export default Home