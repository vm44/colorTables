import React, {Component} from 'react'
import {connect} from 'react-redux'

import Slider,{Range} from 'rc-slider'
import 'rc-slider/assets/index.css'

import {getCurrentTheme} from '../reducers'
import {getFromStore} from '../store'

const mapStateToProps = function(state, ownProps) {
  let key = (ownProps.className=='hz') ? 'w' : 'h'
  return {value: getFromStore(state,'main',key+'TilesCnt')}
}

const mapStateToPropsRange=function(state){
  // console.log("VR",getCurrentTheme(state))
  return {value:getFromStore(state,'main','fontSizeRange')}
}

const VSlider = connect(mapStateToProps)(Slider)
const VsRange = connect(mapStateToPropsRange)(Range)

export default VSlider
export {VsRange}
