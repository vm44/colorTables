import React from 'react'
import {connect} from 'react-redux'
import Dimensions from 'react-dimensions'

class MyComponent extends React.Component {

  componentDidMount(){
    this.props.dispatch({type:"store",val:{key:this.props.dkey,data:[this.props.containerWidth,this.props.containerHeight]}})
  }

  render() {
    // this.props.dispatch({type:"store",val:{key:this.props.dkey,data:[this.props.containerWidth,this.props.containerHeight]}})
    // console.log('reRender',this.props.dkey,this.props.containerWidth,this.props.containerHeight)
    return(
    <div style={{height:'100%',
      backgroundColor:'#dfaf00'}}>
      childs:{this.props.children}
      containerWidth={this.props.containerWidth}
      <br/>
      containerHeight={this.props.containerHeight}

    </div>)
  }

  componentDidUpdate(prevProps, prevState){
    if((prevProps.containerWidth != this.props.containerWidth) ||
      (prevProps.containerHeight != this.props.containerHeight))
      {
        this.props.dispatch({type:"store",val:{key:this.props.dkey,data:[this.props.containerWidth,this.props.containerHeight]}})
        console.log('reRender:store',this.props.containerWidth,this.props.containerHeight)
      }
  }
}

export default connect()(Dimensions({elementResize: true, className: 'react-dimensions-wrapper'})(MyComponent)) // Enhanced component
// export default Dimensions({elementResize: true, className: 'react-dimensions-wrapper'})(MyComponent) // Enhanced component
