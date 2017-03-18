import React, {Component} from 'react'
import {connect} from 'react-redux'

import Slider,{Range} from 'rc-slider'
import 'rc-slider/assets/index.css'

import {getCurrentTheme} from '../reducers'


const mapStateToProps = function(state, ownProps) {
  // console.log('xxxxx');
  // console.log(ownProps.className)
  if(ownProps.className=='hz')
  // if(ownProps.className)
  return{
    value: getCurrentTheme(state).wTilesCnt,
  }
  return{
    value: getCurrentTheme(state).hTilesCnt,
  }
}

const mapStateToPropsRange=function(state){
  // console.log("VR",getCurrentTheme(state))
  return {value:getCurrentTheme(state).fontSizeRange}
}

const VSlider = connect(mapStateToProps)(Slider)
const VsRange = connect(mapStateToPropsRange)(Range)

export default VSlider
export {VsRange}
