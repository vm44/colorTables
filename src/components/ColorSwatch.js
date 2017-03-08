import React,{Component} from 'react'

class ColorSwatch extends Component{
  render(){
    return(
      <div style={{color:'red',
        backgroundColor:this.props.color,
        width:10,
        height:10,
        float:'left',
        border:'solid black 1px'}}>
        {this.props.v}
      </div>
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

export default ColorSwatch
