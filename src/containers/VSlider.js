import React, {Component} from 'react'
import {connect} from 'react-redux'

import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'


const mapStateToProps = function(state, ownProps) {
  // console.log('xxxxx');
  // console.log(ownProps.className)
  if(ownProps.className=='hz')
  // if(ownProps.className)
  return{
    value: state.main.wTilesCnt,
  }
  return{
    value: state.main.hTilesCnt,
  }
}

const VSlider = connect(mapStateToProps)(Slider)

export default VSlider
