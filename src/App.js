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


class LPanel extends Component{

  state={
    width:"10px"
  }

  render(){
    return(
      <div style={{
        height: "300",
        width: this.state.width,
        position: "fixed",
        zIndex: "0",
        top: "0",
        left: "0",
        backgroundColor: "#f1f1f1",
        overflowX: "hidden",
        transition: "0.5s",
        paddingTop: "160px"

        }} onMouseEnter={()=>{this.setState({width:"250px"})}} onMouseLeave={()=>{this.setState({width:"10px"})}}>

        {this.props.children}

      </div>
    )
  }
}

class TPanel extends Component{

  state={
    height:"10px"
  }

  render(){
    return(
      <div style={{
        height: this.state.height,
        width: '100%',
        position: "fixed",
        zIndex: "0",
        top: "0",
        left: "0",
        backgroundColor: "#41f1f1",
        overflowX: "hidden",
        transition: "0.5s",
        paddingTop: "6px"

      }} onMouseEnter={()=>{this.setState({height:"50px"})}} onMouseLeave={()=>{this.setState({height:"10px"})}}>

        {this.props.children}

      </div>
    )
  }
}

const VLPanel=connect()(LPanel)
const VTPanel=connect()(TPanel)

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
        <VTPanel>
          Main Menu
        </VTPanel>
        <VLPanel>
          <div style={{width:"80%",margin:"auto",zIndex:"2"}}>
            Horizontal
            <Slider max={32} onChange={(val)=>{console.log(val);this.props.dispatch({type:'chSize',val:{src:'horz',val:val}})}}/>
            Vertical
            <Slider max={32} onChange={(val)=>{console.log(val);this.props.dispatch({type:'chSize',val:{src:'vert',val:val}})}}/>
            <label>
              <input
                type="checkbox"
              />Lock
            </label>

          </div>
        </VLPanel>

        <MainFrame6 />
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
