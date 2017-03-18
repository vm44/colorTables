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

// <div style={{width:"100%",
//   height:"100%",
//   // position:"fixed",
//   position:"absolute",
//   left:"30px",
//   top:"30px",
//   opacity:"0.62",
//   color:"#ff0000",
//   fontSize:"152px"}}>
//   sdfsdfd
// </div>
