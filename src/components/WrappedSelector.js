import React, {Component} from 'react'
import {connect} from 'react-redux'
import Select from 'react-select'
import 'react-select/dist/react-select.css'

// import {getCurrentTheme} from '../reducers'
import {getFromStore} from '../store'

const mapStateToProps=function(state){
  return {//colorThemes:state.colorTheme,
          ks:Object.keys(state.colorTheme.data),
          selectValue:getFromStore(state,'main','fontsSet')
      }
}

// const createSliderWithTooltip = Slider.createSliderWithTooltip;
// const Range = createSliderWithTooltip(Slider.Range);
// const Range = Slider.Range

class WrappedSelector extends Component{
  state={
    selectValue:[]
  }
  render(){
    let options=this.props.options.map(k => ({value:k, label:k}))
    // console.log(Range)
    return(
    <div style={{
      // width:"90%",
      // textAlign:"left",
      margin:"auto",
      zIndex:"0"}}>

      {this.props.name}

      <Select multi name="form-name"
        options={options}
        value={this.props.selectValue}
        onChange={(val)=>{console.log("WS",val);//this.setState({selectValue:val});
        this.props.dispatch({type:"chFonts",val:val.map(v=>v.value)})}} />

    </div>
  )}
}

const App=connect(mapStateToProps)(WrappedSelector)
App.defaultProps={name:"Wrap Name"}
export default App
