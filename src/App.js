import React, { Component } from 'react';
import {connect} from 'react-redux'
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

class SliderCont extends Component {
  disp(v){
    this.props.dispatchA(v)
    console.log(v)
  }

  render(){
    return(
      <Slider max={20} onChange={this.disp}/>
    )
  }
}
const mapStateToProps = (state, ownProps) => ({
  dta: state.v,
  height:state.height,
  width:state.width,
  hTilesCnt:state.hTilesCnt
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  dispatchA: (dta) => {
    console.log(dta*10)
    dispatch({type:'chSize',data:dta*10})
  }
})

const VisSlider = connect(
  mapStateToProps,
  mapDispatchToProps
)(SliderCont)


// var DropdownListC=ReactWidgets.DropdownList

function log(value) {
  console.log(value);
}
//<Slider max={20} onChange={()=>{console.log('change',this.props.value);this.props.dispatch({type:'chSize'})}}/>

class App extends Component {

  disp(value){
    // dispatch({type:'chSize'})
    console.log(value)
  }

  render() {
    // var t=WindowDimensions.state.width;
    return (
      <div className="App">
      {/*}  <DropdownList data={['1','2','3']} />*/}
      xx
      <MainFrame6 />
          <Slider max={12} onChange={(val)=>{console.log(val);this.props.dispatch({type:'chSize',val:val})}}/>
        </div>
        )
  }
}


const VApp=connect()(App);

export default VApp

// return (
//   <div className="App">
//   {/*}  <DropdownList data={['1','2','3']} />*/}
//     {/*}<MainFrame />*/}
//     <Cl2 parm='24' />
// <MainFrame6 />
// // {}
// <p>z</p>
// <p>
// <div style={{width:400,margin:"auto"}}>
// {/*<Slider max={20} onChange={this.disp}/>*/}
// {/*}
// <SliderCont/>
//   <VisSlider/>
//   */}
//   <Slider max={12} onChange={(val)=>{console.log(val);this.props.dispatch({type:'chSize',val:val})}}/>
// </div>
// <Button label={'dddssedwewdwd'} />
// </p>
// </div>
// );
