import React,{Component} from 'react'

import BoxContainer from './BoxContainer'

class ColorBinder extends Component{
  render(){
    return(
    <div>
      {this.props.colorSetKeys.map(cs => <BoxContainer sourceKey={cs} />)}
    </div>
  )}
}

export default ColorBinder

// {this.props.colorSetsKeys.map(cs => {console.log("ColorBinder",cs); <BoxContainer sourceKey={"bkg"} />})}
// {this.props.colorSetsKeys.map(cs => <BoxContainer sourceKey="bkg" />)}
//
