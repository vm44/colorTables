import React, {Component} from 'react'
import {connect} from 'react-redux'

import BoxContainer from './BoxContainer'

const mapStateToProps=(state)=>{
  return{colors:state.immutableColors}
}

class ColorsMgr extends Component{
  render=()=>{
    // console.log('colors:',this.props.colors)
    console.log('colorSet:',this.props.colors.get('colorSets').keySeq().toJS())
    console.log('colorSet:',this.props.colors.get('colorSets').entrySeq().toJS())
    return(
      <div>
      CM
      {this.props.colors.get('colorSets').keySeq().toJS().map((x)=>{return(<div>{x}</div>)})}
      {this.props.colors.get('colorSets').entrySeq().toJS().map((x)=>{return(<div>{x[1]}</div>)})}
      {this.props.colors.get('colorSets').entrySeq().toJS().map((x)=>{return(<BoxContainer colorEntry={x} />)})}
      </div>
    )
  }
}


export default connect(mapStateToProps)(ColorsMgr)
