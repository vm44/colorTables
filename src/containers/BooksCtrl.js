import React, {Component} from 'react'
import {connect} from 'react-redux'
// import Select from 'react-select'
// import 'react-select/dist/react-select.css'
//
// import {Range} from 'rc-slider'
// import 'rc-slider/assets/index.css'


// import BoxContainer from '../components/BoxContainer'
// import {getCurrentTheme} from '../reducers'
// import VColorBinder from '../containers/VColorBinder'
// import VSlider,{VsRange} from './VSlider'
// import WrappedSelector from '../components/WrappedSelector'

// import FontsList from '../FontsList'

const mapStateToProps=function(state){
  console.log("Map!",state)
  // state.books.books.map(x => console.log(x))
  return {
    // colorThemes:getCurrentTheme(state).colorTheme,
          // ks:Object.keys(state.colorTheme.data),
          // selectValue:state.colorTheme.current,
          books:state.books.books,
          c:state.books.current
          // l:state.books.books.length
        }
}

// const createSliderWithTooltip = Slider.createSliderWithTooltip;
// const Range = createSliderWithTooltip(Slider.Range);
// const Range = Slider.Range

class BooksCtrl extends Component {
  // state={
  //   selectValue:""
  // }

  procChg=(e)=>{
    console.log(e,e.target,e.target.files)
    this.props.dispatch({type:"addBookFiles",val:e.target.files})
  }

  render(){
    console.log("rend")
    return(
    <div style={{width:"90%",
      // textAlign:"left",
      margin:"auto",
      zIndex:"10"}}>text {this.props.c}


      {this.props.books.map(x => <div><a href='#' onClick={(e)=>{console.log("click B");e.preventDefault();this.props.dispatch({type:"setCurrentBook",val:x})}}>{x.name}</a></div>)}

      <input type="file" multiple onChange={this.procChg} />

    </div>
  )}
}
// <input type="file" multiple onChange={(files)=>{console.log(files)}}/>

export default connect(mapStateToProps)(BooksCtrl)
// {this.props.books.map(x => <div><a href='#' onClick={(e)=>{e.preventDefault();this.props.dispatch({type:"setCurrentBook",val:x})}}>{x.name}</a></div>)}
// {this.props.books.map(x => console.log(x))}
