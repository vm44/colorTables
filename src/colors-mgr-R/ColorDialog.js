import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Button, ButtonToolbar, Checkbox} from 'react-bootstrap'
import {ChromePicker} from 'react-color'


class ColorDialog extends Component{
  constructor(props){
    super(props)
    this.state={
      colorChanged:false,
      applyOnChange:false
    }
  }

  componentDidMount=()=>{
    this.setState({savedColors:this.props.colorEntry[1],
                  cColor:this.props.initColor || "#449988",
                  edColor:this.props.initColor || "#449988",
                })
  }

  onOK=()=>{
    if(this.state.colorChanged)this.applyColor(this.state.cColor)
    this.props.closeDialog()
  }

  addColor=(color)=>{
    console.log("Accepted Imm",color)
    if(!this.props.colorEntry[1].includes(color)){
      this.props.dispatch({type:"addColorR",val:{key:this.props.colorEntry[0],val:color}})
      this.setState({edColor:color})
    }
  }

  applyColor=(color)=>{
    if(this.state.edColor){
      this.props.dispatch({type:'chColorR',val:{key:this.props.colorEntry[0],prevColor:this.state.edColor,color:color}})
      this.setState({ edColor: color })
    }else this.addColor(color)
  }

  // onAddColorClick=()=>{
  //   this.setState({dialogVisible:!this.state.dialogVisible,savedColors:this.props.colorEntry[1]})
  // }

  onCancel=()=>{
    this.props.dispatch({type:"restoreColorR",val:{key:this.props.colorEntry[0],val:this.state.savedColors}})
    this.props.closeDialog()
  }


  handleChange=(color)=>{
    console.log('handleChange! ',color)
    this.setState({cColor:color.hex,colorChanged:true})
    if(this.state.applyOnChange)
      this.applyColor(color.hex)
  }

  onClickAddNew=()=>{this.addColor(this.state.cColor);this.setState({colorChanged:false})}
  onClickApply=()=>{this.applyColor(this.state.cColor);this.setState({colorChanged:false})}

  onCheckBoxChange=()=>{
    //console.log(this.refs.check);
    this.setState({applyOnChange:!this.state.applyOnChange})
  }

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

        <Checkbox ref='check' onChange={this.onCheckBoxChange}>
          Apply on change
        </Checkbox>

        <Button onClick={this.onOK}>OK</Button>
        <Button onClick={this.onClickAddNew}>Add New</Button>
        <Button onClick={this.onClickApply}>Apply Current</Button>
        <Button onClick={this.onCancel}>Cancel</Button>
      </div>
    )
  }
}

export default connect()(ColorDialog)
