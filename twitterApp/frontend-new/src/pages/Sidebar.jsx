import React from 'react'
import  { useState } from 'react';
import {  Modal } from 'antd';
import axios from 'axios';
import { useSelector } from 'react-redux';


const Sidebar = (props) => {
  console.log(props);
    const [isModalOpen, setIsModalOpen] = useState(false);
    let token=useSelector((state)=>state.user.token)
    const [selectedfile, setselectedfile] = useState([]);
    const [loading, setloading] = useState(false);

    const [details, setdetails] = useState({
        title:'',
        description:'',
        image:'',
        video:''
    });
    
    //model part

    const showModal = () => {
        setIsModalOpen(true);
      };
    // const handleOk = () => {
    //     //setIsModalOpen(false);
    //   };
      const handleCancel = () => {
        setIsModalOpen(false);
      };

    //e=event
    const handleInputChanger=(e)=>{
        setdetails({...details, [e.target.name]:e.target.value })

    }

    const handleFileChanger=async(e)=>{

        let file=e.target.files[0];
        setdetails({...details,[e.target.name]:file})
        
        //method1 file reader  URL.readAsDataURL and URL.createObjectURL(details.image)
        // setselectedfile[[...selectedfile,file]]
        
        // let filename=e.target.name
        // let reader=new FileReader();
        
        // reader.readAsDataURL(file);
        // reader.onload=()=>{
        //     setdetails({...details,[e.target.name]:reader.result})
        // }
        // reader.onerror=()=>{
        //     console.log("error in reading file");
        // }

        //method2:
        // setselectedfile([])

        // let formdata=new FormData();
        // formdata.append('file',setselectedfile);
        // formdata.append('upload_preset',process.env.REACT_APP_Upload_Preset)
        // let res1=await axios.post(`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_Name}/upload`,formdata)
        // console.log((res1))
        // setdetails({...details,[e.target.name]:res1.data.secure_url})



        
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();
        setloading(true)
        console.log(details);
        let arr=[]
        if (details.image){
          arr.push(details.image)
        }
        if (details.video){
          arr.push(details.video)
        }

        let allFileUpdateOnCloudnary=arr && arr.map(async (ele)=>{

        let formdata=new FormData();
        formdata.append('file',ele);
        formdata.append('upload_preset',process.env.REACT_APP_Upload_Preset)
        let res=await axios.post(`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_Name}/upload`,formdata)
        console.log((res))
        console.log((res.data.secure_url))
        return res

        })

        let ans=allFileUpdateOnCloudnary? await Promise.all(allFileUpdateOnCloudnary) :[];

        console.log(ans);

        let finalobj={
          ...details
        }

        ans.forEach((ele)=>{
          finalobj[ele.data.resource_type]=ele.data.secure_url}
          // setdetails({...details,[ele.data.resource_type]:ele.data.secure_url})

        )

        console.log(finalobj);

        
        let res=await axios.post("http://localhost:8080/posts/create",finalobj,{
           headers:{
            'Authorization':token
           } 

        })

        let data=res.data
        console.log(data);
        if (data){
          setloading(false)
        }
        setIsModalOpen(false);
        props.getallpost();
        setdetails({
          title:'',
          description:'',
          image:'',
          video:''

        })



    }
  
     //onOk={handleOk}
  return (
    <div className='pt-4'>
     
        <Modal title="Basic Modal" open={isModalOpen} OkButtonProps={{ style: { display: 'none' } }} cancelButtonProps={{ style: { display: 'none' } }} onCancel={handleCancel}>
                {loading===false?<form action="" className='flex flex-col'>
                    <label className='my-2' htmlFor="">Title</label>
                    <input onChange={handleInputChanger} name="title" className='py-2 px-4 border border-amber-200' type="text" />
                    <label  className='my-2' htmlFor="">Description</label>
                    <textarea name = "description" onChange={handleInputChanger} className='py-2 px-4 border border-amber-200'  id=""></textarea>
                  <div className='flex gap-2 items-center'>
                  <label  htmlFor="image" className='bg-green-950 my-2 py-2 px-4 text-white rounded-md'>upload Image</label>
                    <input name="image" onChange={handleFileChanger} className='py-2 px-4 border text-white border-amber-200 my-1' type="file" id='image'  hidden/>
                    <label  htmlFor="video" className='bg-green-950 py-2 px-4  text-white rounded-md'>upload Video</label>
                    <input name="video" onChange={handleFileChanger} className='py-2 px-4 border text-white border-amber-200' type="file" id='video'  hidden/>
                  </div>
                  <div className='flex gap-1'>
                       {details.image && <img src={URL.createObjectURL(details.image)} className='w-40 h-40 m-auto' alt="" />}
                        { details.video && <video src={URL.createObjectURL(details.video)} controls  className='w-40 h-40 m-auto border border-red-400'></video>}
                  </div>
                    <button onClick={handleSubmit} className=' text-white bg-green-950 py-2 px-4 rounded-md my-2'>Submit</button>
                </form>
                :
                <h1>loading...</h1>
                }
                
            </Modal>





            

            <ul>
              <l1>
              <button type='primary' className='bg-indigo-50' onClick={showModal}> Create Post</button>
              </l1>
            </ul>
    </div>
  )
}

export default Sidebar