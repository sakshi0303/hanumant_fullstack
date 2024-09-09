
//(true? true value:false value )
// conditional rendering
        // ternary oprator 
        // && operator 
        
import React, { useState } from 'react'

const SwapImg = () => {
    const [clicked, setclicked] = useState(1)
    const [img1, setimg1] = useState("https://s3.amazonaws.com/ceblog/wp-content/uploads/2012/02/find-royalty-free-images-not-overused.jpg")
    const [img2, setimg2] = useState("https://th.bing.com/th/id/R.c20e11d26003d7f0d000823d84233ef0?rik=kGGNMR%2fWnIXq7Q&riu=http%3a%2f%2fwww.gettyimages.com.au%2fgi-resources%2fimages%2fHomepage%2f171795015.jpg&ehk=%2fr%2fGCoX5G%2fy5td0O6cn5NfNg1dYivxjlel%2bRBi%2bfh3g%3d&risl=&pid=ImgRaw&r=0");
    
    
    const swapimg = async() => {
        setclicked(clicked===1?2:1)
        if (clicked === 1) {
            await setimg1(img2)
            await setimg2(img1)
        } else {
            await setimg1(img2)
            await setimg2(img1)
        }
    }


    return (
        <div>
            <img src={img1} alt="" />
            <button onClick={swapimg}> swap</button>
            <img src={img2} alt="" />
        </div>
    )
}

export default SwapImg