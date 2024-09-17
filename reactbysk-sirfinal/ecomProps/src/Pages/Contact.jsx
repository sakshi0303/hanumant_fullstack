import React from 'react'
import Demo from '../Components/Demo'

const Contact = (props) => {
    
    let x=5;
    console.log(props);
    props.data(x)

    
  return (
    <div>
        this is Contact page
        <Demo title="Contact"/>
      
    </div>
  )
}

export default Contact
