import React, {Component} from 'react'
import {Button, ButtonToolbar, Checkbox} from 'react-bootstrap'
import {ChromePicker} from 'react-color'


class ColorDialog extends Component{
  constructor(props){
    super(props)
    this.state={
      cColor:props.initColor,
      colorChanged:false,
      applyOnChange:false
    }
  }
  // componentDidMount(){
  //   // console.log('mount:',this.props.color)
  //   this.setState({cColor:this.props.color});
  // }

  handleChange=(color)=>{
    this.setState({cColor:color.hex,colorChanged:true})
    if(this.state.applyOnChange)
      this.props.onAccept(color.hex)
  }

  render(){
    return(
      <div style={{border:"1px solid #ff0000",
        backgroundColor:"#aaaaaa",
        margin:"4",
        overflow:"auto",
        display:"inline-block",
        position:"relative",
        zIndex:"1"
      }}>
        ColorDialog {this.state.cColor}
        {console.log("ccolr",this.state.cColor)}
        <ChromePicker color={this.state.cColor} onChange={this.handleChange}/>
        <Checkbox ref='check'
          onChange={()=>{console.log(this.refs.check);
            this.setState({applyOnChange:!this.state.applyOnChange})}}
            >Apply on change
        </Checkbox>
        <Button onClick={()=>{this.props.onOK();if(this.state.colorChanged)this.props.onAccept(this.state.cColor)}}>OK</Button>
        <Button onClick={()=>{this.props.onAccept(this.state.cColor);this.setState({colorChanged:false})}}>Apply</Button>
        <Button onClick={()=>{this.props.onOK()}}>Cancel</Button>
      </div>
    )
    // return(
    //   // <div style={{zIndex:'12'}}>
    //   <div>
    //     ColorDialog {this.state.cColor}
    //     <ChromePicker color={this.state.cColor} onChange={this.handleChange}/>
    //     <div style={{backgroundColor:'#eeeeee',
    //                 height:'30px'}}>
    //                 nnnn
    //       <ButtonToolbar>
    //         <Button onClick={()=>{this.props.onOK();this.props.onAccept(this.state.cColor)}}>OK</Button>
    //         <Button onClick={()=>{this.props.onAccept(this.state.cColor)}}>Apply</Button>
    //         <Button onClick={()=>{this.props.onOK()}}>Cancel</Button>
    //       </ButtonToolbar>
    //     </div>
    //   </div>
    // )
  }
}

export default ColorDialog
