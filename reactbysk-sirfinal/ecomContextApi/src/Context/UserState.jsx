import React, {  useState } from 'react'
import Usercontext from './UserContext'

const UserState = (props) => {
    let usrdetails=JSON.parse(localStorage.getItem('userdetails'))
    const [userData, setuserData] = useState({
        login: usrdetails?usrdetails.login:false,
        email:usrdetails?usrdetails.email:''
    });
  return (
    <Usercontext.Provider value={{userData,setuserData}}>
        {props.children}
        </Usercontext.Provider>
  )
}

export default UserState