import React,{Component} from 'react'
import {sample} from 'lodash'

class SymbolRect extends Component{
  render(){
    // console.log('ARect:',this.props);
    return(
      <div style={{color:sample(this.props.color.font),//'red',
        backgroundColor:sample(this.props.color.bkg),
        width:this.props.cellDims.width,
        height:this.props.cellDims.height,
        fontSize:Math.min(this.props.cellDims.width/1.2,this.props.cellDims.height)*0.9,
        float:'left',
        border:'solid black 1px'}}>
        {this.props.v}
      </div>
    )
  }
}

export default SymbolRect
