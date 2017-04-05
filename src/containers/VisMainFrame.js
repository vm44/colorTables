import {connect} from 'react-redux'
import MainFrame from '../components/MainFrame'

import {getCurrentTheme,getCurrentColorTheme} from '../reducers'
import {getFromStore} from '../store'

const mapStateToProps = function(stateI, ownProps) {
  // console.log("VisMainFrame:",state)
   let state={}
  //  state.main=stateI.main.toJS()
  // // console.log('MF:',state.main.toJS())
  // console.log('cellDims',getFromStore(stateI,'main','cellDims'))
  return{
    height:getFromStore(stateI,'main','frameHeight'),
    width:getFromStore(stateI,'main','frameWidth'),
    // // hTilesCnt:getFromStore(state,'main',hTilesCnt,
    da:getFromStore(stateI,'main','da'),
    cellDims:getFromStore(stateI,'main','cellDims'),
    fontsSet:getFromStore(stateI,'main','fontsSet'),
    fontSizeRange:getFromStore(stateI,'main','fontSizeRange'),

    // dta: state.main.v,
    // height:state.main.frameHeight,
    // width:state.main.frameWidth,
    // hTilesCnt:state.main.hTilesCnt,
    // da:state.main.da,
    // cellDims:state.main.cellDims,
    // font:state.main.font,
    // fontsSet:state.main.fontsSet,
    // fontSizeRange:state.main.fontSizeRange,
    color:getCurrentColorTheme(stateI)//state.colorTheme.data["default"]

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
    dispatch({type:'ScreenResize',data:dta})
  }
})

const VisMainFrame = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainFrame)

export default VisMainFrame
