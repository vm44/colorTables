import React, {Component} from 'react'

import BookView from '../components/BookView'
import MainMenu from '../components/MainMenu'
import PageLayout from '../layouts/PageLayout'
import BooksCtrl from '../containers/BooksCtrlRamda'

class BookReader extends Component{
  render(){
    return(
      // <PageLayout leftPanel={<BooksCtrl/>}>
      <PageLayout topMenu={<MainMenu/>} leftPanel={<BooksCtrl/>}>
        <BookView />
      </PageLayout>
    )
  }
}

export default BookReader

// <BookView currentBook={this.props.currentBook}/>
