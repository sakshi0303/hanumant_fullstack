import React from 'react'
import  { useState } from 'react';
import {  Modal } from 'antd';
import axios from 'axios';
import { useSelector } from 'react-redux';


const Sidebar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    let token=useSelector((state)=>state.user.token)

    const [details, setdetails] = useState({
        title:'',
        description:'',
        image:'',
        video:''
    });
    
    

    const showModal = () => {
        setIsModalOpen(true);
      };
    const handleOk = () => {
        setIsModalOpen(false);
      };
      const handleCancel = () => {
        setIsModalOpen(false);
      };

    //e=event
    const handleInputChanger=(e)=>{
        setdetails({...details}, [e.target.name]=e.target.value )

    }

    const handleFileChanger=(e)=>{
        let file=e.target.files[0];
        let reader=new FileReader();
        reader.readAsDataURL(file);
        reader.onload=()=>{
            setdetails({...details,[e.target.name]:reader.result})
        }
        reader.onerror=()=>{
            console.log("error in reading file");
        }
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();
        console.log(details);

        let res=await axios.post("https://localhost:8080/posts/create",details,{
           headers:{
            'Authorization':token
           } 

        })

        let data=res.data
        console.log(data);



    }

  return (
    <div className='pt-4'>
        <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} cancelButtonProps={{ style: { display: 'none' } }} onCancel={handleCancel}>
                <form action="" className='flex flex-col'>
                    <label className='my-2' htmlFor="">Title</label>
                    <input onChange={handleInputChanger} name="title" className='py-2 px-4 border border-amber-200' type="text" />
                    <label  className='my-2' htmlFor="">Description</label>
                    <textarea name = "description" onChange={handleInputChanger} className='py-2 px-4 border border-amber-200'  id=""></textarea>
                  <div className='flex gap-2 items-center'>
                  <label  htmlFor="image" className='bg-green-950 my-2 py-2 px-4 rounded-md'>upload Image</label>
                    <input name="image" onChange={handleFileChanger} className='py-2 px-4 border border-amber-200 my-1' type="file" id='image'  hidden/>
                    <label  htmlFor="video" className='bg-green-950 py-2 px-4 rounded-md'>upload Video</label>
                    <input name="video" onChange={handleFileChanger} className='py-2 px-4 border border-amber-200' type="file" id='video'  hidden/>
                  </div>
                  <div className='flex gap-1'>
                       { <img src="" className='w-40 h-40 m-auto' alt="" />}
                        <video src=""  className='w-40 h-40 m-auto border border-red-400'></video>
                  </div>
                    <button onClick={handleSubmit} className='bg-green-950 py-2 px-4 rounded-md my-2'>Submit</button>
                </form>
            </Modal>

      <button type='primary' className='bg-indigo-50' onClick={showModal}> Create Post</button>

    </div>
  )
}

export default Sidebar