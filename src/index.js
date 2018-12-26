import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './pages/TablePage';
// // import App from './TblFrame';
// // import App from './App2';
import {Provider} from 'react-redux'
import {IndexRedirect, IndexRoute, Redirect, Router, Route} from 'react-router'
import {BrowserRouter, HashRouter} from 'react-router-dom'
//
import WebFont from 'webfontloader'
//
import AdjustableLayout from './components/AdjustableLayout'
// import AdjustableLayoutHeap from './components/AdjustableLayoutHeap'
import AboutMe from './components/AboutMe'
import AppDropzone from './pages/AppDropzone'
//import BoxConstructCanvas from './components/BoxConstructCanvas'
import BoxMaster from './components/BoxMaster'
import ColorsMgr from './colors-mgr-R/ColorsMgr'
import FontSample from './components/FontSample'
import FlexTable from './components/FlexTable'
import FullScreen from './components/FullScreen'
import PageLayout from './layouts/PageLayout'
import MainMenu from './componentsP/MainMenu'
import MousePos from './components/MousePos'
import VBookReader from './containers/VBookReader'
import TableSetup from './containers/TableSetup'
import ThreeJS from './components/ThreeJS'
import ThreeSetup from './components/ThreeSetup'
import TstDim from './components/TstDim'
// import Card from './components/TstDnD'
// import TstDimOffEx from './components/TstDimOffExmpl'
import Page from './components/Page'
// // import BooksCtrl from './containers/BooksCtrl'
// import VideoYT from './components/VideoYT'
import Videos from './content/videos'
import MainView from './components2/components/MainView'
import {store} from './store'
 // AIzaSyBZK0tIpg0sOznBoGZmjZaylWqQL9ughRw


 import { createBrowserHistory } from 'history';

 const history = createBrowserHistory();
 
 // Get the current location.
 const location = history.location;
 console.log('location:',location)
 

// ReactDOM.render(<div>hey</div>,document.getElementById('root'))


WebFont.load({
    google: {
      families: ['Tangerine','Droid Sans', 'Droid Serif','Play','Rokkitt','Orbitron']
    }
  })

  //history={HashRouter}
    console.log('entr')
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter >
    <div>
      <Redirect from="/" exact to="/Models" />
      <Route path='/Main2' component={()=>(<FullScreen> <App /> </FullScreen>)} />
      <Route path='/Main' component={()=>(<Page content={<FullScreen> <FlexTable /> </FullScreen>} topMenu={<MainMenu />} leftPanel={<TableSetup />} />)} />
      {/* <Route path='/BoxMaster' component={()=>(<Page content={<FullScreen> <BoxMaster /> </FullScreen>} topMenu={<MainMenu />} leftPanel={<TableSetup />} />)} /> */}
      {/*<Route path='/BoxMaster' component={()=>(<Page content={<BoxMaster />} topMenu={<MainMenu />} leftPanel={<TableSetup />} />)} />*/}
      <Route path='/BoxConstruct' component={()=>(<Page content={<BoxConstructCanvas />} leftPanel={<ThreeSetup />} />)} />
      {/* <Route path='/2' component={App2} /> */}
      <Route path='/MousePos' component={MousePos} />
      <Route path='/Scene' component={()=>(<Page content={<MainView />} />)} />
      <Route path='/Models' component={()=>(<Page content={<ThreeJS />} leftPanel={<ThreeSetup />} />)} />
      {/*<Route path='/3' component={App3} />*/}
      {/*<Route path='/4' component={()=>(<App4 st={300} />)} />*/}
      {/*<Route path='/5' component={AdjustableLayout} />*/}
      <Route path='/p' component={()=>(<Page content={<AdjustableLayout />} topMenu={<MainMenu />} leftPanel={<TableSetup />} />)} />
    {/*}  <Route path='/adjLayoutHeap' component={AdjustableLayoutHeap} />*/}
      <Route path='/Video' component={()=>(<Page content={<Videos />} topMenu={<MainMenu />} />)} />
      <Route path='/AboutMe' component={()=>(<Page content={<AboutMe />} />)} />
    {/*<Route path='/v' component={()=>(<Page content={<div>'dddddddddddd'<testComp /><testFunc /></div>} />)} />*/}
      {/*<Route path='/v2' component={()=>(<PageV content={<testComp />} />)} />*/}
    {/*<Route path='/v' component={()=>(<Page content={<testFunc />} />)} />*/}
      {/*<Route path='/v1' component={Videos} />*/}
      {/*<Route path='/f' component={testFunc} />*/}
      <Route path='/colorsMgr' component={ColorsMgr} />
      <Route path='/bookReader' component={VBookReader} />
      {/*<Route path='/drz' component={AppDropzone} />*/}
      </div>
    </BrowserRouter>
  </Provider>
,
  document.getElementById('root')
);
