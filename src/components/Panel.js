import React from 'react'
import {connect} from 'react-redux'
import glamorous from 'glamorous'

import TimeCounter from './TimeCounter'


const mapStateToProps=(state)=>{
  return {heap:state['heapR']}
}

const DivLow=glamorous.div({position:"fixed",
  border: "1px solid #ff0000",
  width:"100%",
  textAlign:"center",
  bottom:"0%",
  zIndex:10})



const Panel = (props) =>{
  console.log('propz',props)
  return(
    <DivLow>
    <TimeCounter />
    {props.heap.run ? <button onClick={()=>{console.log("clk!");props.dispatch({type:"store",val:{key:"run",data:false}})}}>Stop!</button> :
      <button onClick={()=>{console.log("clk!");props.dispatch({type:"store",val:{key:"run",data:true}})}}>Run!</button>
    }
    <br />
      cpl
      <br />
      cpl1
    </DivLow>
  )
}

export default connect(mapStateToProps)(Panel)
