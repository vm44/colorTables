import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import App from './App';
import './index.css';
import reducer from './reducers'
import {Provider} from 'react-redux'

const store=createStore(reducer)

class ZC extends Component{
  render(){
    return(
    <div>
      ZC
    </div>)
  }
}

// console.log('entr')
ReactDOM.render(
<Provider store={store}>
  <App/>
</Provider>
,
  document.getElementById('root')
);
// <Provider store={store}>
// <App />
// </Provider>,
