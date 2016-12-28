import {connect} from 'react-redux'
import MainFrame from '../components/MainFrame'

const mapStateToProps = function(state, ownProps) {

  console.log('xxxxx');
  return{
  dta: state.v,
  height:state.frameHeight,
  width:state.frameWidth,
  hTilesCnt:state.hTilesCnt,
  da:state.da,
  cellDims:state.cellDims
}
}
// const mapStateToProps = (state, ownProps) => ({
//   dta: state.v,
//   // height:state.height,
//   // width:state.width,
//   // hTilesCnt:state.hTilesCnt,
//   da:state.da,
//   cellDims:state.cellDims
// })

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
