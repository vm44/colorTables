import {connect} from 'react-redux'

import ColorBinder from '../components/ColorBinder'

const mapStateToProps=function(state){
  return {colorSetKeys:Object.keys(state.color)}
}

const VColorBinder = connect(mapStateToProps)(ColorBinder)

export default VColorBinder
