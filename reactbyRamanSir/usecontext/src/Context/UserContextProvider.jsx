// it will do the actual transfer
// children are the other components where we want to send data
// in App always use small case user and setuser
import React, {  useState } from 'react'
import UserContext from './UserContext'

const UserContextProvider = ({children}) => {
    let [user,setuser]=useState({})
  return (
    <>
    <UserContext.Provider value={{user,setuser}}>
        {children}

    </UserContext.Provider>
      
    </>
  )
}

export default UserContextProvider
