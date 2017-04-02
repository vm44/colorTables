import {connect} from 'react-redux'
import BookReader from '../pages/BookReader'

const mapStateToProps = (state) => {
  return{
    book: state.books.current
  }
}

export default connect(mapStateToProps)(BookReader)
