import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './components/TablePage';
// // import App from './TblFrame';
// // import App from './App2';
// import './index.css';
import {Provider} from 'react-redux'
import {Router, Route, hashHistory} from 'react-router'
//
import WebFont from 'webfontloader'
//
import AdjustableLayout from './components/AdjustableLayout'
import AppDropzone from './pages/AppDropzone'
import ColorsMgr from './colors-mgr/ColorsMgr'
import FontSample from './components/FontSample'
import PageLayout from './layouts/PageLayout'
import MainMenu from './components/MainMenu'
import VBookReader from './containers/VBookReader'
import TstDim from './components/TstDim'
import TstDimOffEx from './components/TstDimOffExmpl'
// import BooksCtrl from './containers/BooksCtrl'

import {store} from './store'
 // AIzaSyBZK0tIpg0sOznBoGZmjZaylWqQL9ughRw

class App2 extends Component {
  render() {
    return (
      <PageLayout topMenu={<MainMenu/>}>
        Page 2
        <div style={{//height:"auto",//"40px",
          overflow:"visible",
          border:"1px solid red",
          display:"block"
        }}>
        <TstDim>
          <TstDim />
        </TstDim>
        <TstDim />
        <TstDim />
        </div>
        <FontSample text={"Font Sample русс"} fontFamily={"Tangerine, sans"} />
        <div style={{height:"100px",
          // padding:30,
          border:"1px solid red"
          // display:"inlineBlock"
        }}>
          dgfdg
          gdfgfd
        <TstDim />
        <TstDimOffEx />
        </div>
        <FontSample text={"Font Sample"} fontFamily={"Rokkitt, Extra-Bold"} />
        <FontSample text={"Font Sample"} fontFamily={"Orbitron, Extra-Bold"} />
        <FontSample text={"Font Sample"} fontFamily={"Play, sans"} />
        <TstDim />
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

class App4 extends Component {
  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
    // ReactDOM.findDOMNode(this.refs.el).addEventListener('scroll', this.handleScroll);
    console.log("DidMount")
    ReactDOM.findDOMNode(this.refs.el).scrollTop=this.props.st;
    console.log("Mnt",this.refs.el.scrollTop,this.props.st)
    this.setState({st:50})
  }
  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll);
    // ReactDOM.findDOMNode(this.refs.el).removeEventListener('scroll', this.handleScroll);
  }
  handleScroll=(e)=>{
    console.log("scrolled",e,this.refs.el.scrollHeight)
  }
  componentDidUpdate=()=>{
    console.log("Upd",this.refs.el.scrollTop,this.refs.el.scrollHeight)
    ReactDOM.findDOMNode(this.refs.el).scrollTop=this.state.st;
    console.log("Upd2",this.refs.el.scrollTop,ReactDOM.findDOMNode(this.refs.el).scrollTop)
  }
  render() {
    return (
      <div style={{
          // fontFamily:"Tangerine, sans",
           fontSize:"300px",
          // color:"#05055f",
          // textShadow:"4px 4px 4px #222222"
          // height:"140px",
          height:"1000px",
          overflow:"scroll"
        }}
          ref="el"
          onClick={()=>{console.log("click")}}
          onScroll={()=>{console.log("scroll")}}
        >
        <div style={{height:"200%",
        overflow:"scroll"}}>
        Page 4<br/>
        Page 4<br/>
        Page 4<br/>
        Page 4<br/>
        Page 4<br/>
        Page 4<br/>
    </div>
    </div>
    );
  }
}

WebFont.load({
    google: {
      families: ['Tangerine','Droid Sans', 'Droid Serif','Play','Rokkitt','Orbitron']
    }
  })

class AppT3 extends Component {
  render() {
    return (
      <div style={{
          // fontFamily:"Tangerine, sans",
          // fontSize:"300px",
          // color:"#05055f",
          // textShadow:"4px 4px 4px #222222"
        }}>
        Page T3
    </div>
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
      <Route path='/4' component={()=>(<App4 st={300}/>)} />
      <Route path='/5' component={AdjustableLayout} />
      <Route path='/colorsMgr' component={ColorsMgr} />
      <Route path='/bookReader' component={VBookReader} />
      <Route path='/drz' component={AppDropzone} />
    </Router>
  </Provider>
,
  document.getElementById('root')
);
