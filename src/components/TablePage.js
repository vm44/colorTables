import React, { Component } from 'react';
import {connect} from 'react-redux'

// import VisMainFrame from './components/MainFrame'
import VisMainFrame from '../containers/VisMainFrame'
import PageLayout from '../layouts/PageLayout'
import MainMenu from './MainMenu'
import TableSetup from '../containers/TableSetup'

class App extends Component {
  render() {
    return (
      <PageLayout topMenu={<MainMenu />} leftPanel={<TableSetup />}>
          <VisMainFrame />
      </PageLayout>
    )
  }
}


// const VApp=connect()(App);

export default App
