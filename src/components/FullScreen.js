import React from 'react'

const FullScreen = (props) => {
  return(
    <div style={{height:"100vh"}}>
      {props.children}
    </div>
  )
}

export default FullScreen
