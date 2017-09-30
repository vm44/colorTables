import React, {Component} from 'react'
// import {connect} from 'react-redux'
import glamorous from 'glamorous'


class ScreenLayer extends Component{
  render(){
    return(
      <div style={{height:"100%",
                  width:"100%",
                  // pointerEvents:"none",
                  position:"fixed",
                backgroundColor: "rgba(0,100,0,0.7)"}}
            onWheel={(e)=>{console.log(this.props.name,"wheel!",e.deltaY,e.deltaY)}}
            onMouseMove={(e)=>{console.log(this.props.name,"move!",e.screenX,e.screenY)}}>
        {this.props.children}
      </div>
    )
  }
}

const DivLow=glamorous.div(props => {
  console.log('gprops',props)
  if(props.props.open)
    return {
      // display:"inline-block",
      height: "100%",
      width: "400px",
      position: "fixed",
      zIndex: "12",
      top: "20vh",
      left: "0",
      backgroundColor: "#f1f1f1",
      overflowX: "visible",
      overflowY: "scroll",
      transition: "0.5s",
      paddingTop: "16px",
      opacity: 1

    }; else
    return {
      // display:"inline-block",
      height: "10%",
      width: "40px",
      position: "fixed",
      zIndex: "12",
      top: "50vh",
      left: "0",
      backgroundColor: "#f1f1f1",
      overflowX: "visible",
      overflowY: "scroll",
      transition: "0.5s",
      paddingTop: "16px",
      opacity: 0.51

    }
}
)


class LeftPanel extends Component{

  state={
    open:false
  }

  render(){
    return(
      // {/*<ScreenLayer name={"left"}>*/}
        <DivLow props={this.state}
          onMouseEnter={()=>{this.setState({open:true})}}
          onMouseLeave={()=>{this.setState({open:false})}}>

          {this.state.open ? this.props.children : "<<<"}

        </DivLow>
      // {/*</ScreenLayer>*/}
    )
  }
}

class LeftPanelP2 extends Component{

  state={
    top:"50vh",
    width:"40px",
    height:"10vh",
    opacity:0.5,
  }

  render(){
    return(
      // {/*<ScreenLayer name={"left"}>*/}
        <div style={{
          display:"inline-block",
          height: this.state.height,
          width: this.state.width,
          position: "fixed",
          zIndex: "12",
          top: this.state.top,
          left: "0",
          backgroundColor: "#f1f1f1",
          // overflowX: "visible",
          // overflowY: "scroll",
          transition: "0.5s",
          paddingTop: "16px",
          opacity: this.state.opacity

        }} onMouseEnter={()=>{this.setState({top:"20vh",width:"350px",height:"60%",opacity:1})}}
          onMouseLeave={()=>{this.setState({top:"50vh",width:"40px",height:"10vh",opacity:0.5})}}>

          {this.state.width != "40px" ? this.props.children : "<<<"}

        </div>
      // {/*</ScreenLayer>*/}
    )
  }
}

class LeftPanelPrev extends Component{

  state={
    width:"10px"
  }

  render(){
    return(
      // {/*<ScreenLayer name={"left"}>*/}
        <div style={{
          height: "100%",
          width: this.state.width,
          position: "fixed",
          zIndex: "12",
          top: "0",
          left: "0",
          backgroundColor: "#f1f1f1",
          overflowX: "hidden",
          transition: "0.5s",
          paddingTop: "16px"

        }} onMouseEnter={()=>{this.setState({width:"150px"})}} onMouseLeave={()=>{this.setState({width:"10px"})}}>

          {this.state.width != "4500px" ? this.props.children : "LEFT"}

        </div>
      // {/*</ScreenLayer>*/}
    )
  }
}

class TopPanel extends Component{

  state={
    height:"70px"
  }

  render(){
    return(
      // {/*<ScreenLayer name="top">*/}
        <div style={{
          height: this.state.height,
          width: '100%',
          position: "fixed",
          zIndex: "10",
          top: "0",
          left: "0",
          backgroundColor: "rgba(66,111,11,0.7)",
          overflowX: "hidden",
          transition: "0.5s",
          paddingTop: "6px"

        }} onMouseEnter={()=>{this.setState({height:"70px"})}} onMouseLeave={()=>{this.setState({height:"70px"})}}>

          {this.props.children}

        </div>
      // {/*</ScreenLayer>*/}
    )
  }
}

// const VLeftPanel=connect()(LeftPanel)
// const VTopPanel=connect()(TopPanel)

export {LeftPanel,TopPanel}
// export {VLeftPanel,VTopPanel}
