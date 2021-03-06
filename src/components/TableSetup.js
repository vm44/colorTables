import React, {Component} from 'react'
import {connect} from 'react-redux'
import Select from 'react-select'
//import 'react-select/dist/react-select.css'

import {Range} from 'rc-slider'
import 'rc-slider/assets/index.css'


import BoxContainer from '../components/BoxContainer'
import {getCurrentTheme} from '../reducers'
import VColorBinder from '../containers/VColorBinder'
import VSlider,{VsRange} from '../containers/VSlider'
import WrappedSelector from './WrappedSelector'
import WrapSelect from './WrapSelect'

import FontsList from '../FontsList'

const mapStateToProps=function(state){
  // return {colorThemes:getCurrentTheme(state).colorTheme,
  return {//colorThemes:getCurrentTheme(state).colorTheme,
          ks:Object.keys(state.colorTheme.data),
          selectValue:state.colorTheme.current}
}

// const createSliderWithTooltip = Slider.createSliderWithTooltip;
// const Range = createSliderWithTooltip(Slider.Range);
// const Range = Slider.Range

class TableSetup extends Component{
  // state={
  //   selectValue:""
  // }
  render(){
    return(
    <div style={{width:"90%",
      // textAlign:"left",
      margin:"auto",
      zIndex:"0"}}>

      <WrapSelect multi={true} name={'themes'} />
      <WrapSelect name={'themes2'} />
      <WrapSelect name={'colorThemes'} />

      <WrappedSelector name={'Choose a Fonts'} options={FontsList}/>


      Font Size Range
      <VsRange onChange={(val)=>{console.log(val);this.props.dispatch({type:"chFontSizeRange",val:val})}}/>
      Horizontal
      <VSlider className={'hz'} value={6} max={32} onChange={(val)=>{console.log(val);this.props.dispatch({type:'chgTilesNumber',val:{src:'horz',val:val}})}}/>
      Vertical
      <VSlider max={32} onChange={(val)=>{console.log(val);this.props.dispatch({type:'chgTilesNumber',val:{src:'vert',val:val}})}}/>

      <VColorBinder />
{/*}
    <label>
        <input
          type="checkbox"
        />Lock
      </label>
*/}
    </div>
  )}
}

export default connect()(TableSetup)

// <Range defaultValue={[4,320]} />

//
// <ul>
//   {this.props.ks.map(k=> <li onClick={(v)=>{console.log("Clicked!",v);this.props.dispatch({type:"chTheme",val:"default"})}}>{k}</li>)}
// </ul>

// export default connect()(TableSetup)

// {this.props.ks.map(k => <BoxContainer sourceKey={k} />)}
// {this.props.ks.map(k=> <li><a href='#' onClick={(v)=>{console.log("Clicked!",v)}}>{k}</a></li>)}


// <BoxContainer sourceKey={this.props.ks[0]} />

// <BoxContainer sourceKey="bkg" />
// <BoxContainer sourceKey="font" />
