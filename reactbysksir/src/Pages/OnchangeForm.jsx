// e in event
// controlled component: orms user inputs:: onchange: user input value can be manages
// uncontrolled input: used with useref: direct final value
// radio button gives checked value
import React from 'react'
import { useState } from 'react';

const OnchangeForm = () => {
    const [email, setemail] = useState("");
    const [address, setaddress] = useState("");
    const [password, setpassword] = useState("");
    const [male, setmale] = useState(false);
    const [female, setfemale] = useState(false);
    // e=event
    const handleemail=(e)=>{
        console.log(e.target.value)
        setemail(e.target.value)

    }
    const handleAddress=(e)=>{
        setaddress(e.target.value)


    }

    const handlepassword=(e)=>{
        setpassword(e.target.value)

    }

    const handlemale=(e)=>{
        
        setmale(e.target.checked)

    }
    const handlefemale=(e)=>{
        setfemale(e.target.checked)
      

    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        let obj={
            email:email,
            address:address,
            password:password,
            gender:male===true?'male':'female'

        }
        console.log(obj);

        setaddress('')
        setemail('')
        setmale(false)
        setfemale(false)
        setpassword('')
    }

    
  return (
    <form>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input onChange={handleemail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
    
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input onChange={handlepassword} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
  </div>
  <div className="form-check">
    <label htmlFor="">Gender</label>
    <label htmlFor="">Male</label>
    <input checked={male} onChange={handlemale} type="radio" name="gender" id="male" />
    <label htmlFor="">Femele</label>
    <input checked={female} onChange={handlefemale} type="radio" name="gender" id="female" />
    
  </div>
  <label htmlFor="">Adress</label>
  <textarea onChange={handleAddress} name="" id="" cols="20" rows="5"></textarea>
  <button  onClick={handleSubmit} type="submit" className="btn btn-primary">Submit</button>
</form>

  )
}

export default OnchangeForm