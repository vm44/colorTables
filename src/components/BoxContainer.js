import React,{Component} from 'react'
import {connect} from 'react-redux'

import ColorDialog from './ColorDialog'
import ColorSwatch from './ColorSwatch'
import DialogLauncher from './DialogLauncher'
import EditableColorSwatch from './EditableColorSwatch'


const mapStateToProps=function(state,ownProps){
  // console.log('map:',state.color.bkg)
  // console.log("BoxContainer:",ownProps.sourceKey);
  return {color:state.color[ownProps.sourceKey]}

  if(ownProps.sourceKey == "bkg")
    return {color:state.color.bkg}
  if(ownProps.sourceKey == "font")
    return {color:state.color.font}
}

class BoxContainer extends Component{

  addColor=(color)=>{
    console.log("Accepted",color)
    this.props.dispatch({type:"addColor",val:{key:this.props.sourceKey,val:color}})
  }

  render(){
    console.log('mapRend:',this.props.color)
  return(
    // <a href='#' onClick={(e)=>{e.preventDefault();console.log('box clc!')}}>
    <div style={{color:'red',
      backgroundColor:'white',
      width:300,
      // height:200,
//      float:'left',
      border:'solid black 1px'}}>

      <div style={{border:'solid #ff0000 1px',
        margin:"4",
        display:"inline-block",
        // overflow:"auto"
      }}>
        {this.props.color.map(x => <EditableColorSwatch sourceKey={this.props.sourceKey} color={x} />)}
      </div>

      <div style={{border:'solid black 1px',
        margin:"4",}}>
        <DialogLauncher dName="Add Color">
          <ColorDialog onAccept={this.addColor}/>
        </DialogLauncher>
      </div>

    </div>
    // </a>
  )
}
}
// const BoxContainer=()=>{
//   return(
//     <div>
//       BoxContainer
//       {this.props.children}
//     </div>
//   )
// }

export default connect(mapStateToProps)(BoxContainer)
