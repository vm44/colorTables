import React, {Component} from 'react'
import {connect} from 'react-redux'


class LeftPanel extends Component{

  state={
    width:"10px"
  }

  render(){
    return(
      <div style={{
        height: "100%",
        width: this.state.width,
        position: "fixed",
        zIndex: "0",
        top: "0",
        left: "0",
        backgroundColor: "#f1f1f1",
        overflowX: "hidden",
        transition: "0.5s",
        paddingTop: "160px"

      }} onMouseEnter={()=>{this.setState({width:"450px"})}} onMouseLeave={()=>{this.setState({width:"10px"})}}>

        {this.props.children}

      </div>
    )
  }
}

class TopPanel extends Component{

  state={
    height:"10px"
  }

  render(){
    return(
      <div style={{
        height: this.state.height,
        width: '100%',
        position: "fixed",
        zIndex: "0",
        top: "0",
        left: "0",
        backgroundColor: "#41f1f1",
        overflowX: "hidden",
        transition: "0.5s",
        paddingTop: "6px"

      }} onMouseEnter={()=>{this.setState({height:"50px"})}} onMouseLeave={()=>{this.setState({height:"10px"})}}>

        {this.props.children}

      </div>
    )
  }
}

const VLeftPanel=connect()(LeftPanel)
const VTopPanel=connect()(TopPanel)

export {VLeftPanel,VTopPanel}
