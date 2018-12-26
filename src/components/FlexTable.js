import * as R from 'ramda'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import Dimensions from 'react-dimensions'
import {getCurrentColorTheme} from '../reducers'
import ARect from './SymbolRectFlex'
import Panel from './Panel'

const mapStateToProps=(state)=>{
  let combBranch=state['main'].toJS()
  return{
    rdxState:combBranch['data'][combBranch['current']],
    color:getCurrentColorTheme(state),
    heap:state['heapR']
  }
}

class FlexTable extends Component{

  render=()=>{

    console.log("timeNow",Date.now())
    // console.log('undCD', this.props.rdxState.cellDims)
    // console.log('STATE',this.props.rdxState)
    // console.log('STATE',this.props.rdxState.main.toJS())
   if(this.props.rdxState.cellDims === undefined)
      return <div style={{
                border:"1px solid #ff0000",
                height:"100vh"}}>
                undef CD
              </div>

    // console.log(this.props.rdxState)
    return(
      <div style={{
          margin:4,
          padding:4,
          border:"1px solid #ff0000",
          width:"100vw",
          height:"100vh",
          // backgroundColor:"#333333",
          display:"flex",
          flexDirection: "column",
          justifyContent:"center",
          alignItems:"center",
        }}>

        <div style={{
            border:"1px solid #0000ff",
            // width:"50vw",
            // height:"50vh",
            display:"flex",
            flexWrap:"wrap"
          }}>
          <Panel />
          {this.props.rdxState.da.map(x => <ARect bs={this.props.rdxState} color={this.props.color} v={x}/>)}
        </div>
        <div style={{
            position:"fixed",
            left:0,
            top:0,
            width:"100%",
            height:"100%",
            zIndex:1,
            border:"1px solid #fff000",
            display:"flex",
            flexDirection: "column",
            justifyContent:"center",
            alignItems:"center",

          }}>
          <div style={{width: "150px",
                  height: '150px',
                  borderRadius: '50%',
                  fontSize: '50px',
                  color: ' #ff0000',
                  lineHeight: ' 150px',
                  textAlign: ' center',
                  background: ' #000000',
                  opacity: 0.5,
                }}>{this.props.heap.run?"R":"*"}
                {/*<h1>*</h1>*/}
          </div>

        </div>
      </div>
    )
  }

  componentDidMount=()=>{
    this.props.dispatch({type:'ScreenResize',data:{width: this.props.containerWidth, height: this.props.containerHeight}})
    console.log('reRender',this.props.containerWidth,this.props.containerHeight)
  }

  componentDidUpdate(prevProps, prevState){
    if((prevProps.containerWidth != this.props.containerWidth) ||
      (prevProps.containerHeight != this.props.containerHeight))
      {
        // this.props.dispatch({type:"chDims",val:[this.props.containerWidth,this.props.containerHeight]})
        this.props.dispatch({type:'ScreenResize',data:{width: this.props.containerWidth, height: this.props.containerHeight}})
        console.log('reRender',this.props.containerWidth,this.props.containerHeight)
      }
  }

}

export default connect(mapStateToProps)(Dimensions({elementResize: true, className: 'react-dimensions-wrapper'})(FlexTable))
