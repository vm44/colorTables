import {connect} from 'react-redux'

import ColorBinder from '../components/ColorBinder'
import {getCurrentColorTheme} from "../reducers"

const mapStateToProps=function(state){
  // console.log("VColorBinder",state,Object.keys(getCurrentColorTheme(state)))
  return {colorSetKeys:Object.keys(getCurrentColorTheme(state))}
}

const VColorBinder = connect(mapStateToProps)(ColorBinder)

export default VColorBinder
