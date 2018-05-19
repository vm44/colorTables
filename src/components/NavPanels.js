import React, { Component } from "react";
// import {connect} from 'react-redux'
import glamorous from "glamorous";

//n/u
class ScreenLayer extends Component {
  render() {
    return (
      <div
        style={{
          height: "100%",
          width: "100%",
          // pointerEvents:"none",
          position: "fixed",
          backgroundColor: "rgba(0,100,0,0.7)"
        }}
        onWheel={e => {
          console.log(this.props.name, "wheel!", e.deltaY, e.deltaY);
        }}
        onMouseMove={e => {
          console.log(this.props.name, "move!", e.screenX, e.screenY);
        }}
      >
        {this.props.children}
      </div>
    );
  }
}

const DivClk = glamorous.div({});
const { A, Div } = glamorous;

const ClickableDiv = ({ cont, val, func }) => {
  return (
    <A
      href="#"
      onClick={
        func
          ? func
          : () => {
              console.log("Clickable div");
            }
      }
    >
      <Div>
        {cont}
        {val}
      </Div>
    </A>
  );
};

const ClickableDivAct = ({ cont, val, func, ptr }) => {
  return (
    <A
      href="#"
      onClick={
        func
          ? func
          : () => {
              console.log("Clickable div Act");
              ptr.setState({ cnt: ptr.state.cnt + 1 });
            }
      }
    >
      <Div>
        {cont}
        {val}
        {ptr.state.cnt}
      </Div>
    </A>
  );
};

const PanelContainer = ({ tptr }) => {
  if (tptr.state.open) return <Div>open</Div>;
  else return <Div>closed</Div>;
};

const PanelContainerS = ({ state, props }) => {
  console.log("stateS", state, props);
  if (state.open) return <Div>openS,{state.cnt}</Div>;
  else return <Div>closedS,{state.cnt}</Div>;
};

const DivLow = glamorous.div(props => {
  console.log("gprops", props);
  if (props.props.open)
    return {
      // display:"inline-block",
      height: "80vh",
      width: "400px",
      position: "fixed",
      zIndex: "12",
      top: "20vh",
      left: "0",
      backgroundColor: "#f1f1f1",
      overflowX: "visible",
      overflow: "auto",
      transition: "0.5s",
      paddingTop: "16px",
      opacity: 1
    };
  else
    return {
      // display:"inline-block",
      height: "10%",
      width: "40px",
      position: "fixed",
      zIndex: "12",

      top: "50vh",
      left: "0",
      backgroundColor: "#41f1f1",
      // overflowX: "visible",
      // overflowY: "scroll",
      transition: "0.5s",
      paddingTop: "16px",
      opacity: 0.51
    };
});

class LeftPanelT extends Component {
  state = {
    open: false
  };

  render() {
    return (
      <div
        style={{
          height: "80vh",
          width: "400px",
          position: "fixed",
          zIndex: "12",
          top: "20vh",
          left: "0",
          backgroundColor: "#f1f1f1",
          overflowX: "hidden",
          overflowY: "scroll",
          transition: "0.5s",
          paddingTop: "16px",
          opacity: 1
        }}
      >
        {/*<div style={{position:"relative"}}>
        <div style={{position:"absolute",
            border:"1px solid #ff0000",
          width:"50vw"}}>ddd</div>
    </div>*/}
        {this.props.children}
      </div>
    );
    //
    //       // {/*<ScreenLayer name={"left"}>*/}
    //         <DivLow props={this.state}
    //           onMouseEnter={()=>{this.setState({open:true})}}
    //           onMouseLeave={()=>{this.setState({open:false})}}>
    //
    //
    //           <div style={{border:"1px solid #ff0000",
    //             width:"50vw"}}>ddd</div>
    //           {this.state.open ? this.props.children : "<<<"}
    //           {/*{this.state.open ?
    //             <div style={{border:"1px solid #ff0000",height:"150vh"}}>
    //               {Array.apply(0, Array(40)).map(function (x, i) {
    //                   return <div key={i}>a</div>;
    //                 })}
    //             </div>
    //             : "<<<"}
    // */}
    //         </DivLow>
    //       // {/*</ScreenLayer>*/}
    //     )
  }
}

const DivLeftPanel = props => {
  //  return <Div>{props.open ? "a" : "b"}</Div>;
  return props.open ? (
    <Div>o</Div>
  ) : (
    <A
      href="#"
      onClick={() => {
        console.log("cls clk");
      }}
    >
      <DivLow props={props}>cccc</DivLow>
      {/*<Div fontSize={20}>cls</Div>*/}
    </A>
  );
};

class LeftPanelD extends Component {
  state = {
    open: false
  };
  render() {
    return <DivLeftPanel props={this.state} />;
  }
}

class LeftPanel extends Component {
  state = {
    top: "50vh",
    width: "40px",
    height: "10vh",
    opacity: 0.5,
    cnt: 0
  };

  render() {
    return (
      // {/*<ScreenLayer name={"left"}>*/}
      <div
        style={{
          display: "inline-block",
          height: this.state.height,
          width: this.state.width,
          position: "fixed",
          zIndex: "12",
          top: this.state.top,
          left: "0",
          backgroundColor: "#f1f1f1",
          // overflowX: "visible",
          overflowY: "scroll",
          transition: "0.5s",
          paddingTop: "16px",
          opacity: this.state.opacity
        }}
        //onMouseClick={()=>{this.setState({top:"0vh",width:"350px",height:"100%",opacity:1})}}
        onMouseLeave={() => {
          this.setState({
            top: "50vh",
            width: "40px",
            height: "10vh",
            opacity: 0.5
          });
        }}
      >
        {this.state.width != "40px" ? (
          <div>
            <DivClk
              onClick={() => {
                console.log("DIVCll");
              }}
            >
              ddd
            </DivClk>
            <ClickableDiv
              cont="content"
              val={this.state.cnt}
              func={() => {
                console.log("func parm");
                this.setState({ cnt: this.state.cnt + 1 });
              }}
            />
            <ClickableDivAct cont="content" val={this.state.cnt} ptr={this} />
            <PanelContainer tptr={this} />
            <PanelContainerS state={this.state} props={this.props} />
            {this.props.children}
            <a
              href="#"
              onClick={e => {
                e.preventDefault();
                this.setState({
                  top: "50vh",
                  width: "40px",
                  height: "10vh",
                  opacity: 0.5
                });
              }}
            >
              <div
                style={{
                  // display: "inline-block",
                  height: "40",
                  width: "40",
                  position: "fixed",
                  zIndex: "13",
                  top: "0",
                  left: "0",
                  color: "#ffffff",
                  backgroundColor: "#333333",
                  // overflowX: "visible",
                  overflowY: "scroll",
                  transition: "0.5s",
                  paddingTop: "16px",
                  opacity: "0.5"
                }}
              >
                X
              </div>
            </a>
          </div>
        ) : (
          <a
            href="#"
            onClick={e => {
              e.preventDefault();
              this.setState({
                top: "0vh",
                width: "350px",
                height: "100%",
                opacity: 1
              }); //console.log('href clk!')
            }}
          >
            {/*<div onMouseClick={()=>{this.setState({top:"0vh",width:"350px",height:"100%",opacity:1})}}>*/}
            cfg
            {/*</div>*/}
          </a>
        )}
      </div>
      // {/*</ScreenLayer>*/}
    );
  }
}

class LeftPanelPrev extends Component {
  state = {
    width: "10px"
  };

  render() {
    return (
      // {/*<ScreenLayer name={"left"}>*/}
      <div
        style={{
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
        }}
        onMouseEnter={() => {
          this.setState({ width: "150px" });
        }}
        onMouseLeave={() => {
          this.setState({ width: "10px" });
        }}
      >
        {this.state.width != "4500px" ? this.props.children : "LEFT"}
      </div>
      // {/*</ScreenLayer>*/}
    );
  }
}

class TopPanel extends Component {
  state = {
    height: "70px"
  };

  render() {
    return (
      // {/*<ScreenLayer name="top">*/}
      <div
        style={{
          height: this.state.height,
          width: "100%",
          position: "fixed",
          zIndex: "10",
          top: "0",
          left: "0",
          backgroundColor: "rgba(66,111,11,0.7)",
          overflowX: "hidden",
          transition: "0.5s",
          paddingTop: "6px"
        }}
        onMouseEnter={() => {
          this.setState({ height: "70px" });
        }}
        onMouseLeave={() => {
          this.setState({ height: "70px" });
        }}
      >
        {this.props.children}
      </div>
      // {/*</ScreenLayer>*/}
    );
  }
}

// const VLeftPanel=connect()(LeftPanel)
// const VTopPanel=connect()(TopPanel)

export { LeftPanel, TopPanel };
// export {VLeftPanel,VTopPanel}
