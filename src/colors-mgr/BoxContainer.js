import React,{Component} from 'react'
import {connect} from 'react-redux'

import ColorDialog from './ColorDialog'
import DialogLauncher from './DialogLauncher'
import EditableColorSwatch from './EditableColorSwatch'
import {getCurrentColorTheme} from "../reducers"


const mapStateToProps=function(state,ownProps){
}

class BoxContainer extends Component{

  addColor=(color)=>{
    console.log("Accepted Imm",color)
    this.props.dispatch({type:"addColorImm",val:{key:this.props.colorEntry[0],val:color}})
  }

  render(){
    // console.log('mapRend:',this.props.color)
  return(
    // <a href='#' onClick={(e)=>{e.preventDefault();console.log('box clc!')}}>
    <div style={{color:'red',
      backgroundColor:'white',
      margin:"1",

      // width:"90%",
      // height:200,
//      float:'left',
      border:'solid black 1px'}}>

      <div style={{border:'solid #ff0000 1px',
        margin:"2",
        // width:"100%",
        // display:"inline-block",
        textAlign:"center",

        // overflow:"auto"
      }}>
        {this.props.colorEntry[0]}
      </div>

      <div style={{border:'solid #ff0000 1px',
        margin:"2",
        display:"inline-block",
        // overflow:"auto"
      }}>
        {this.props.colorEntry[1].map(x => <EditableColorSwatch sourceKey={this.props.colorEntry[0]} color={x} />)}
      </div>

      <div style={{border:'solid black 1px',
        margin:"2",}}>
        <DialogLauncher dName="Add Color">
          <ColorDialog onAccept={this.addColor}/>
        </DialogLauncher>
      </div>

    </div>
    // </a>
  )
}
}

// export default connect(mapStateToProps)(BoxContainer)
export default connect(mapStateToProps)(BoxContainer)
// export default BoxContainer
