import {connect} from 'react-redux'
import MainFrame from '../components/MainFrame'

const mapStateToProps = (state, ownProps) => ({
  dta: state.v
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch({type:'INC'})
  }
})

const VisMainFrame = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainFrame)

export default VisMainFrame
