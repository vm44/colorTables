import React, { Component } from 'react';
import Button from 'react-widgets/lib/Button'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import logo from './logo.svg';
import './App.css';

// import MainFrame6 from './components/MainFrame'
import MainFrame6 from './containers/VisMainFrame'

var rHeight=100,rWidth=200;




class Cl1 extends Component {
  render(){
    return(
      <p>Cl1, {this.props.parm}</p>
    )
  }
}

class Cl2 extends Component {
  render(){
    return(
      <p>Cl2, {this.props.parm}, <Cl1 parm={this.props.parm} /></p>
    )
  }
}


class Rect extends Component{
  state={
    color:'blue',
    backgroundColor:"yellow"
  }
  render(){
    return(<div style={{color:this.state.color,backgroundColor:"yellow",width:this.props.width,float:'left'}}>rect</div>)
  }
  componentDidMount(){
    this.setState({color:"red"});
  }
}

// var DropdownListC=ReactWidgets.DropdownList

class App extends Component {
  render() {
    // var t=WindowDimensions.state.width;
    return (
      <div className="App">
      {/*}  <DropdownList data={['1','2','3']} />*/}
        {/*}<MainFrame />*/}
        <Cl2 parm='24' />
        <MainFrame6 />
        // {}
        <p>z</p>
        <p>
          <div style={{width:400,margin:"auto"}}>
          <Slider max={20} />
          </div>
          <Button label={'dddssedwewdwd'} />
        </p>
      </div>
    );
  }
}

export default App;
