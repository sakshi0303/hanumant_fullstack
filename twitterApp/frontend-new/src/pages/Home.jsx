// import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserById } from '../store/UserSlice';
/* eslint-disable jsx-a11y/anchor-is-valid */
//npm install @mui/joy @emotion/react @emotion/styled
import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Link from '@mui/joy/Link';
import IconButton from '@mui/joy/IconButton';
import Input from '@mui/joy/Input';
import Typography from '@mui/joy/Typography';
import MoreHoriz from '@mui/icons-material/MoreHoriz';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import ModeCommentOutlined from '@mui/icons-material/ModeCommentOutlined';
import SendOutlined from '@mui/icons-material/SendOutlined';
import Face from '@mui/icons-material/Face';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { Button, Modal } from 'antd';
import Sidebar from './Sidebar';
const Home = () => {
  let dispatch=useDispatch();
  let userdetails=useSelector((state)=>state.user)
  console.log(userdetails)
  let token=userdetails.token

  
  console.log(token)
  console.log(userdetails)

  const [allposts, setallposts] = useState([]);
  const getallpost=async(req,res)=>{
    let result=await axios.get('http://localhost:8080/posts/getallpost')
    let data=result.data;
    console.log(data.posts);
    setallposts(data.posts)

  }

  useEffect(()=>{
    getallpost()


  },[])
  // useEffect(()=>{
  //   dispatch(fetchUserById(token))

  // },[token,dispatch])

 
  return (

    <div className='w-screen bg-orange-50 flex gap-2'>
      <h1>this is home</h1>

      <div>
        <div className='left w-1/6 bg-red-50'>
        

         
        <Sidebar/>
      

        </div>
        <div className='right w-max'>
        <div className='grid grid-cols-12 gap-2'>
          <div className='grid'>

{
 allposts.map((ele,i)=>{


//     //return <div className='col-span-3 p-3 bg-slate-400 '>
//     //                   <div className='flex gap-3'>
//     //                   <img src={ele.userId.profilePic} className='w-10 h-10 rounded-full'  alt="" />
//     //                   <h3 className='text-xl text-red-950 capitalize'>{ele.userId.name}</h3>
//     //                   </div>
//     //                   <p className='text-xl text-red-950 my-2'>{ele.title}</p>
//     //                 <div className=' h-56 my-2'>
//     //                 {ele.image && <img src={ele.image} className='w-[100%] h-[100%]  object-contain ' alt="" />}
//     //                 {ele.video && <video src={ele.video} className='w-full '></video> }
//     //                 </div>
//     //                 <p className='text-xl text-red-950 my-2'>{ele.description}</p>
//     //  {/* <ReactTimeAgo date={ele.createdAt} locale="to-locale"/> */}
              
//     //             </div>
  
//    //) 

return <Card
variant="outlined"
sx={{'--Card-radius': (theme) => theme.vars.radius.xs }}
>
<CardContent orientation="horizontal" sx={{ alignItems: 'center', gap: 1 }}>
  <Box
    sx={{
      position: 'relative',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        m: '-2px',
        borderRadius: '50%',
        background:
          'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)',
      },
    }}
  >
    <Avatar
      size="sm"
      src="/static/logo.png"
      sx={{ p: 0.5, border: '2px solid', borderColor: 'background.body',backgroundColor:'grey' }}
    />
  </Box>
  <Typography sx={{ fontWeight: 'lg' }}>MUI</Typography>
  <IconButton variant="plain" color="neutral" size="sm" sx={{ ml: 'auto' }}>
    <MoreHoriz />
  </IconButton>
</CardContent>
<p>{ele.title}</p>

<CardOverflow>

{ele.image &&<AspectRatio>
    <img src={ele.image} alt="" loading="lazy" />
  </AspectRatio>}

  {ele.video &&<AspectRatio>
    <img src={ele.video} alt="" loading="lazy" />
  </AspectRatio>}
</CardOverflow>
<CardContent orientation="horizontal" sx={{ alignItems: 'center', mx: -1 }}>
  <Box sx={{ width: 0, display: 'flex', gap: 0.5 }}>
    <IconButton variant="plain" color="neutral" size="sm">
      <FavoriteBorder />
    </IconButton>
    <IconButton variant="plain" color="neutral" size="sm">
      <ModeCommentOutlined />
    </IconButton>
    <IconButton variant="plain" color="neutral" size="sm">
      <SendOutlined />
    </IconButton>
  </Box>
  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mx: 'auto' }}>
    {[...Array(5)].map((_, index) => (
      <Box
        key={index}
        sx={[
          {
            borderRadius: '50%',
            width: `max(${6 - index}px, 3px)`,
            height: `max(${6 - index}px, 3px)`,
          },
          index === 0
            ? { bgcolor: 'primary.solidBg' }
            : { bgcolor: 'background.level3' },
        ]}
      />
    ))}
  </Box>
  <Box sx={{ width: 0, display: 'flex', flexDirection: 'row-reverse' }}>
    <IconButton variant="plain" color="neutral" size="sm">
      <BookmarkBorderRoundedIcon />
    </IconButton>
  </Box>
</CardContent>
<CardContent>
  <Link
    component="button"
    underline="none"
    textColor="text.primary"
    sx={{ fontSize: 'sm', fontWeight: 'lg' }}
  >
    8.1M Likes
  </Link>
  <Typography sx={{ fontSize: 'sm' }}>
    <Link
      component="button"
      color="neutral"
      textColor="text.primary"
      sx={{ fontWeight: 'lg' }}
    >
      MUI
    </Link>{' '}
    The React component library you always wanted
    {ele.description}

  </Typography>
  <Link
    component="button"
    underline="none"
    startDecorator="…"
    sx={{ fontSize: 'sm', color: 'text.tertiary' }}
  >
    more
  </Link>
  <Link
    component="button"
    underline="none"
    sx={{ fontSize: '10px', color: 'text.tertiary', my: 0.5 }}
  >
    2 DAYS AGO
  </Link>
</CardContent>
<CardContent orientation="horizontal" sx={{ gap: 1 }}>
  <IconButton size="sm" variant="plain" color="neutral" sx={{ ml: -1 }}>
    <Face />
  </IconButton>
  <Input
    variant="plain"
    size="sm"
    placeholder="Add a comment…"
    sx={{ flex: 1, px: 0, '--Input-focusedThickness': '0px' }}
  />
  <Link disabled underline="none" role="button">
    Post
  </Link>
</CardContent>
</Card>

 })}

</div>

        </div>

        </div>
      </div>


    
    </div>
  )
}

export default Home