import {connect} from 'react-redux'
import MainFrame from '../components/MainFrame'

import {getCurrentTheme,getCurrentColorTheme} from '../reducers'

const mapStateToProps = function(state, ownProps) {
  // console.log("VisMainFrame:",state)
  return{
    dta: getCurrentTheme(state).v,
    height:getCurrentTheme(state).frameHeight,
    width:getCurrentTheme(state).frameWidth,
    // hTilesCnt:getCurrentTheme(state).hTilesCnt,
    da:getCurrentTheme(state).da,
    cellDims:getCurrentTheme(state).cellDims,
    font:getCurrentTheme(state).font,
    fontsSet:getCurrentTheme(state).fontsSet,
    fontSizeRange:getCurrentTheme(state).fontSizeRange,
    color:getCurrentColorTheme(state)//state.colorTheme.data["default"]
    // dta: getCurrentTheme(state).v,
    // height:getCurrentTheme(state).frameHeight,
    // width:getCurrentTheme(state).frameWidth,
    // // hTilesCnt:getCurrentTheme(state).hTilesCnt,
    // da:getCurrentTheme(state).da,
    // cellDims:getCurrentTheme(state).cellDims,
    // font:getCurrentTheme(state).font,
    // fontsSet:getCurrentTheme(state).fontsSet,
    // fontSizeRange:getCurrentTheme(state).fontSizeRange,
    // color:getCurrentColorTheme(state)//state.colorTheme.data["default"]
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch({type:'INC'})
  },
  dispatchA: (dta) => {
    dispatch({type:'Resize',data:dta})
  }
})

const VisMainFrame = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainFrame)

export default VisMainFrame
