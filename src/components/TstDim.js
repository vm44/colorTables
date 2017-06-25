import React from 'react'
import {connect} from 'react-redux'
import Dimensions from 'react-dimensions'

class MyComponent extends React.Component {

  componentDidMount(){
    this.props.dispatch({type:"chDims",val:[this.props.containerWidth,this.props.containerHeight]})
    console.log('didMount',this.props.containerWidth,this.props.containerHeight)
  }


  render() {
    return(
    <div style={{backgroundColor:'#00af00',
       height:'100%'
    }}>
      {this.props.children}

      containerWidth={this.props.containerWidth}
      <br/>
      containerHeight={this.props.containerHeight}

    </div>)
  }

  componentDidUpdate(prevProps, prevState){
    if((prevProps.containerWidth != this.props.containerWidth) ||
      (prevProps.containerHeight != this.props.containerHeight))
      {
        this.props.dispatch({type:"chDims",val:[this.props.containerWidth,this.props.containerHeight]})
        console.log('reRender',this.props.containerWidth,this.props.containerHeight)
      }
  }

}

export default connect()(Dimensions({elementResize: true, className: 'react-dimensions-wrapper'})(MyComponent)) // Enhanced component
