//props are used to transfer data from parent component to child component
import React from 'react'

const Demo = (props) => {
  return (
    <div>
    <h1>
        this is demo page and text is coming from {props.title}
    </h1>
    </div>

  )
}

export default Demo