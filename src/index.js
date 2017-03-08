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

import PageLayout from './layouts/PageLayout'
import MainMenu from './components/MainMenu'

// const store=createStore(reducer,{color:colorsInitState})
const store=createStore(reducer)



class App2 extends Component {
  render() {
    return (
      <PageLayout topMenu={<MainMenu/>}>
        Page 2
      </PageLayout>
    );
  }
}

class App3 extends Component {
  render() {
    return (
      <PageLayout topMenu={<MainMenu/>}>
        Page 3
      </PageLayout>
    );
  }
}


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
