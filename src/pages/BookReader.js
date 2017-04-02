import React, {Component} from 'react'

import BookView from '../components/BookView'
import MainMenu from '../components/MainMenu'
import PageLayout from '../layouts/PageLayout'
import BooksCtrl from '../containers/BooksCtrl'

class BookReader extends Component{
  render(){
    return(
      // <PageLayout topMenu={<MainMenu/>} leftPanel={<BooksCtrl/>}>
      <PageLayout leftPanel={<BooksCtrl/>}>
      </PageLayout>
    )
  }
}
// <BookView cont={this.props.book} />

export default BookReader
