import {connect} from 'react-redux'
import MainFrame from '../components/MainFrame'

const mapStateToProps = function(state, ownProps) {
  // console.log('xxxxx');
  // console.log(state)
  return{
    dta: state.main.v,
    height:state.main.frameHeight,
    width:state.main.frameWidth,
    // hTilesCnt:state.main.hTilesCnt,
    da:state.main.da,
    cellDims:state.main.cellDims,
    color:state.color
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
