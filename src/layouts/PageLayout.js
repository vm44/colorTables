import React, { Component } from "react";
// import {connect} from 'react-redux'
//
// import Slider from 'rc-slider'
// import 'rc-slider/assets/index.css'

import MainMenu from "../components/MainMenu";

import {
  LeftPanel as VLeftPanel,
  TopPanel as VTopPanel
} from "../components/NavPanels";
// import '../App.css';

////////rem
// const mapStateToProps = function(state, ownProps) {
//   if(ownProps.className=='hz')
//     return{
//       value: state.wTilesCnt,
//     }
//   return{
//     value: state.hTilesCnt,
//   }
// }

//const VSlider=connect(mapStateToProps)(Slider)

class PageLayout extends Component {
  render = () => {
    return (
      //</div> className = 'App'>
      <div style={{ textAlign: "center" }}>
        {this.props.leftPanel ? (
          <VLeftPanel>{this.props.leftPanel}</VLeftPanel>
        ) : null}
        <VTopPanel>{this.props.topMenu || <MainMenu />}</VTopPanel>
        {/*<div style={{height:"100vh"}}>*/}
        {this.props.children}
        {/*</div>*/}
      </div>
    );
  };
}

// export default connect()(PageLayout)
export default PageLayout;
