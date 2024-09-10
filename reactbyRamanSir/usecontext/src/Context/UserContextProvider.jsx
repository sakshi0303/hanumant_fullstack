// it will do the actual transfer
// children are the other components that are passed  
// in App
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
