import React, { Component } from 'react';
import Button from 'react-widgets/lib/Button'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import logo from './logo.svg';
import './App.css';

var WindowDimensions = React.createClass({
    render: function() {
        return <div>
          <span>{this.state.width} x {this.state.height}</span>;
            <Cl2 parm={this.state.width} />
          </div>
    },
    updateDimensions: function() {

    var w = window,
        d = document,
        documentElement = d.documentElement,
        body = d.getElementsByTagName('body')[0],
        width = w.innerWidth || documentElement.clientWidth || body.clientWidth,
        height = w.innerHeight|| documentElement.clientHeight|| body.clientHeight;

        this.setState({width: width, height: height});
        // if you are using ES2015 I'm pretty sure you can do this: this.setState({width, height});
    },
    componentWillMount: function() {
        this.updateDimensions();
    },
    componentDidMount: function() {
        window.addEventListener("resize", this.updateDimensions);
    },
    componentWillUnmount: function() {
        window.removeEventListener("resize", this.updateDimensions);
    }
});

var rHeight=100,rWidth=200;

class ARect extends Component{
  render(){
    return(
      <div style={{color:'red',
        backgroundColor:'gray',
        width:this.props.width,
        height:this.props.height,
        fontSize:this.props.height*0.9,
        float:'left',
        border:'solid black 1px'}}>
        {/*}{this.props.width}x{this.props.height}*/}Z</div>
    )
  }
}


var MainFrame = React.createClass({
    render: function() {
      var pw=1,cw=4,ch=4
{/*      var cw=Math.floor(this.state.width/rWidth);
      var ch=Math.floor(this.state.height/rHeight);
      var realWidth=this.state.width/cw-cw*pw;
      var realHeight=this.state.height/ch-ch*pw;*/}
      var realWidth=this.state.width/cw-cw*pw;
      var realHeight=this.state.height/ch-ch*pw;
      var rrs=[]
      for(var i=0;i<(cw)*(ch);i++)
        rrs.push(<ARect width={realWidth} height={realHeight}/>)
      console.log(realWidth,realHeight)
        return <div style={{margin:5,
            width:this.state.width,
            height:this.state.height,
            backgroundColor:'cyan'}}>
          {rrs}
              </div>
    },
    updateDimensions: function() {

    var w = window,
        d = document,
        documentElement = d.documentElement,
        body = d.getElementsByTagName('body')[0],
        width = w.innerWidth || documentElement.clientWidth || body.clientWidth,
        height = w.innerHeight|| documentElement.clientHeight|| body.clientHeight;

        this.setState({width: width, height: height});
        // if you are using ES2015 I'm pretty sure you can do this: this.setState({width, height});
    },
    componentWillMount: function() {
        this.updateDimensions();
    },
    componentDidMount: function() {
        window.addEventListener("resize", this.updateDimensions);
    },
    componentWillUnmount: function() {
        window.removeEventListener("resize", this.updateDimensions);
    }
});

class MainFrame6 extends Component{
    render() {
      var pw=1,cw=4,ch=4
{/*      var cw=Math.floor(this.state.width/rWidth);
      var ch=Math.floor(this.state.height/rHeight);
      var realWidth=this.state.width/cw-cw*pw;
      var realHeight=this.state.height/ch-ch*pw;*/}
      var realWidth=this.state.width/cw-cw*pw;
      var realHeight=this.state.height/ch-ch*pw;
      var rrs=[]
      for(var i=0;i<(cw)*(ch);i++)
        rrs.push(<ARect width={realWidth} height={realHeight}/>)
      console.log(realWidth,realHeight)
        return <div style={{margin:5,
            width:this.state.width,
            height:this.state.height,
            backgroundColor:'lime'}}>
          {rrs}
              </div>
    }

    updateDimensions() {

    var w = window,
        d = document,
        documentElement = d.documentElement,
        body = d.getElementsByTagName('body')[0],
        width = w.innerWidth || documentElement.clientWidth || body.clientWidth,
        height = w.innerHeight|| documentElement.clientHeight|| body.clientHeight;

        this.setState({width: width, height: height});
        // if you are using ES2015 I'm pretty sure you can do this: this.setState({width, height});
    }

    componentWillMount() {
        this.updateDimensions();
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }
}

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
