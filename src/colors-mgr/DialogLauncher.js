import React,{Component} from 'react'
import {Button} from 'react-bootstrap'

class DialogLauncher extends Component{
  state={
    dialogVisible:false
  }

  onOK=()=>{this.setState({dialogVisible:false})}

  render(){
    return(
        <div style={{backgroundColor:'#222222',
        // zIndex:'16'
          }}>
          <Button onClick={()=>{this.setState({dialogVisible:!this.state.dialogVisible})}}>
            {this.state.dialogVisible ? "Close" : this.props.dName}
          </Button>
          <br/>
          <div style={{position:"absolute"}}>
            {this.state.dialogVisible && React.cloneElement(this.props.children, { ...this.props, onOK: this.onOK })}
          </div>
        </div>
    )
  }
}

export default DialogLauncher
