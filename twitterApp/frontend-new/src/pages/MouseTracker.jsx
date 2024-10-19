import React, { useEffect, useState } from 'react'

const MouseTracker = () => {

    const [position, setPosition] = useState({
        x:null,
        y:null
    });
    console.log(position)

  
        useEffect(()=>{

          window.addEventListener('mousemove',(e)=>{
            console.log(e.clientX)
            console.log(e.clientY)
            setPosition({x:e.clientX,y:e.clientY})
        })

        },[])

  return (
    <div>
      <h3>This is mouse tracker page</h3>
      <div style={{position:"absolute",left:position.x,top:position.y,width:'100px',height:'100px', borderRadius:"100%",  backgroundColor:'aqua',transition:'0.2s' }}></div>
      <div style={{position:"absolute",left:position.x,top:position.y,width:'100px',height:'100px', borderRadius:"100%",  backgroundColor:'red' ,transition:'0.5s all',  }}></div>
      <div style={{position:"absolute",left:position.x,top:position.y,width:'100px',height:'100px', borderRadius:"100%",  backgroundColor:'orange',transition:'1s all', }}></div>
      <div style={{position:"absolute",left:position.x,top:position.y,width:'100px',height:'100px', borderRadius:"100%",  backgroundColor:'yellow',transition:'1.5s all' }}></div>
      <div style={{position:"absolute",left:position.x,top:position.y,width:'100px',height:'100px', borderRadius:"100%",  backgroundColor:'crimson',transition:'2s all', }}></div>
    </div>
  )
}

export default MouseTracker