import React, {Component} from 'react'
import {connect} from 'react-redux'
import glamorous from 'glamorous'

const mapStateToProps=(state) =>{
  return {heap:state['heapR']}
}

const DivTimeCnt=glamorous.div({position:"fixed",
  border: "1px solid #ff0000",
  width:"100%",
  fontSize:"20vh",
  textAlign:"center",
  bottom:"40%",
  zIndex:10})


class TimeCounter extends Component{
  state={}

  updateTime=()=>{
    let tm=((Date.now()-this.state.startTime)/1000/60).toFixed(2)
    this.setState({elaps:tm})
  }

  componentWillUpdate=(nextProps,nextState)=>{
    // console.log('nextP',this.props,nextProps,nextState)
    if(nextProps.heap.run){
      if(!this.props.heap.run){
        this.setState({startTime:Date.now()})
        this.timer=setInterval(this.updateTime,100)
      }
    }else{
      clearInterval(this.timer)
    }
  }

  render=()=>{
    return(
      <DivTimeCnt>
        {this.state.elaps}
      </DivTimeCnt>
    )
  }
}

export default connect(mapStateToProps)(TimeCounter)
