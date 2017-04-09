import {connect} from 'react-redux'
import BookReader from '../pages/BookReader'

const mapStateToProps = (state) => {
  console.log('map CB',state.books.get('settings').get(state.books.get('current')))
  return{
    book: state.books.current,
    currentBook: state.books.get('settings').get(state.books.get('current'))
  }
}

export default connect(mapStateToProps)(BookReader)
