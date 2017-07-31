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

  componentDidMount=()=>{
    //this.setState(initColors:)
  }

  handleChange=(color)=>{
    console.log('handleChange! ',color)
    this.setState({cColor:color.hex,colorChanged:true})
    if(this.state.applyOnChange)
      this.props.onAccept(color.hex)
  }

  onClickAddNew=()=>{this.props.onAdd(this.state.cColor);this.setState({colorChanged:false})}
  onClickApply=()=>{this.props.onApply(this.state.cColor);this.setState({colorChanged:false})}

  render(){
    return(
      <div style={{border:"1px solid #ff0000",
        backgroundColor:"#aaaaaa",
        textAlign:"center",
        margin:"auto",
        overflow:"auto",
        //display:"inline-block",
        position:"relative",
        zIndex:"1"
      }}>
        <div style={{backgroundColor:this.state.cColor}}>
          ColorDialog {this.state.cColor}
        </div>
        {/*//{console.log("ccolr",this.state.cColor)}*/}
        <div>
          <ChromePicker color={this.state.cColor} onChange={this.handleChange}/>
        </div>

        <Checkbox ref='check'
          onChange={()=>{console.log(this.refs.check);
            this.setState({applyOnChange:!this.state.applyOnChange})}}
            >Apply on change
        </Checkbox>

        <Button onClick={()=>{this.props.onOK();if(this.state.colorChanged)this.props.onAccept(this.state.cColor)}}>OK</Button>
        <Button onClick={this.onClickAddNew}>Add New</Button>
        <Button onClick={this.onClickApply}>Apply Current</Button>
        <Button onClick={()=>{this.props.onCancel()}}>Cancel</Button>
      </div>
    )
  }
}

export default ColorDialog
