import React, {Component} from 'react'
import {connect} from 'react-redux'

import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'


import {VLeftPanel,VTopPanel} from '../components/NavPanels'
import '../App.css';

const mapStateToProps = function(state, ownProps) {
  if(ownProps.className=='hz')
    return{
      value: state.wTilesCnt,
    }
  return{
    value: state.hTilesCnt,
  }
}

const VSlider=connect(mapStateToProps)(Slider)

class PageLayout extends Component{
  render = () => {
    return(
      <div className = 'App'>

        <VTopPanel>
          {this.props.topMenu}
        </VTopPanel>

        <VLeftPanel>
          {this.props.leftPanel}
        </VLeftPanel>

        {this.props.children}

      </div>
    )
  }
}

// export default connect()(PageLayout)
export default PageLayout
