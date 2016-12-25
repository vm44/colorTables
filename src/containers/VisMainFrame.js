import {connect} from 'react-redux'
import MainFrame from '../components/MainFrame'

const mapStateToProps = (state, ownProps) => ({
  dta: state.v,
  height:state.height,
  width:state.width
})

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
