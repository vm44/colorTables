import React, {Component} from 'react'
// import {connect} from 'react-redux'


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


class LeftPanel extends Component{

  state={
    width:"70px"
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

        }} onMouseEnter={()=>{this.setState({width:"450px"})}} onMouseLeave={()=>{this.setState({width:"50px"})}}>

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
