import React, {Component} from 'react'
import {connect} from 'react-redux'
import Select from 'react-select'
import 'react-select/dist/react-select.css'

// import {getCurrentTheme} from '../reducers'
import {getFromStore} from '../store'

const mapStateToProps=function(state,ownProps){
  // console.log('ownProps.name',ownProps.name)
  // let selected=state.vals[ownProps.name].value || state.vals[ownProps.name].options[0]
  return state.vals.hasOwnProperty(ownProps.name) ?
          { options: state.vals[ownProps.name].options,
            selectedValue: state.vals[ownProps.name].value || state.vals[ownProps.name].options[0]
          }
          :
          { options: [],
            selectedValue: []
          }
}

class WrapSelect extends Component{

  handleChange = (val) => {
    // console.log("WS",val);//this.setState({selectedValue:val});
    if(val)
      this.props.dispatch({type:"update",
        payload:{srcName:this.props.name,
                  val: this.props.multi ? val.map(v=>v.value) : val.value
                }})
  }

  render () {
    return(
      <div style={{
        // width:"90%",
        // textAlign:"left",
        // margin:"auto",
        // zIndex:"0"
      }}>

        {this.props.name}

        <Select multi={this.props.multi} name="form-name"
          options={this.props.options.map(k => ({value:k, label:k}))}
          value={this.props.selectedValue}
          onChange={this.handleChange}
        />

      </div>
  )}
}

const App=connect(mapStateToProps)(WrapSelect)
App.defaultProps={name:"Wrap Name"}
export default App
