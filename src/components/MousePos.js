import React from 'react'

const MousePos=()=>{
  document.onmousemove=(e)=>{console.log("mouse Move!", e)}
  document.onwheel=(e)=>{console.log("mouse wheel!", e.deltaY)}
  return(
    <div onWheel={(e)=>{console.log("wheel!",e.deltaY)}}>
      <div onMouseMove={(e)=>{console.log("move!",e.screenX)}}>
        MousePos
      </div>
    </div>
  )
}

export default MousePos
