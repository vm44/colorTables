import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import App from './components/TablePage';
// import App from './TblFrame';
// import App from './App2';
import './index.css';
import reducer,{colorsInitState} from './reducers'
import {Provider} from 'react-redux'
import {Router, Route, hashHistory} from 'react-router'

import WebFont from 'webfontloader'

import FontSample from './components/FontSample'
import PageLayout from './layouts/PageLayout'
import MainMenu from './components/MainMenu'

// const store=createStore(reducer,{color:colorsInitState})
const store=createStore(reducer)

 // AIzaSyBZK0tIpg0sOznBoGZmjZaylWqQL9ughRw

class App2 extends Component {
  render() {
    return (
      <PageLayout topMenu={<MainMenu/>}>
        Page 2
        <FontSample text={"Font Sample"} fontFamily={"Tangerine, sans"} />
        <FontSample text={"Font Sample"} fontFamily={"Rokkitt, Extra-Bold"} />
        <FontSample text={"Font Sample"} fontFamily={"Orbitron, Extra-Bold"} />
        <FontSample text={"Font Sample"} fontFamily={"Play, sans"} />
      </PageLayout>
    );
  }
}

class App3 extends Component {
  render() {
    return (
      <div style={{
          // fontFamily:"Tangerine, sans",
          // fontSize:"300px",
          // color:"#05055f",
          // textShadow:"4px 4px 4px #222222"
        }}>
      <PageLayout topMenu={<MainMenu/>}>
        Page 3
      </PageLayout>
    </div>
    );
  }
}

WebFont.load({
    google: {
      families: ['Tangerine','Droid Sans', 'Droid Serif','Play','Rokkitt','Orbitron']
    }
  })

// console.log('entr')
ReactDOM.render(
<Provider store={store}>
  <Router history={hashHistory}>
    <Route path='/' component={App} />
    <Route path='/2' component={App2} />
    <Route path='/3' component={App3} />
  </Router>
</Provider>
,
  document.getElementById('root')
);
