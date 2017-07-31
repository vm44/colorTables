import React, {Component} from 'react'
import {connect} from 'react-redux'

import BoxContainer from './BoxContainer'

const mapStateToProps=(state)=>{
  return{colors:state.colorsR}
}

const ColorsMgr=(parms)=>{
    console.log('colorSet:',Object.keys(parms.colors['colorSets']))
    console.log('colorSet:',Object.values(parms.colors['colorSets']))
    return(
      <div style={{width:"90%",
        // textAlign:"left",
        margin:"auto",
        }}>
      {/*CM*/}
      {Object.keys(parms.colors['colorSets']).map((x)=>{return(<div>{x}</div>)})}
      {Object.entries(parms.colors['colorSets']).map((x)=>{return(<div>{x[1]}</div>)})}
      {Object.entries(parms.colors['colorSets']).map((x)=>{return(<BoxContainer colorEntry={x} />)})}
      </div>
    )
}


export default connect(mapStateToProps)(ColorsMgr)
