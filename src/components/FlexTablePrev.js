import R from 'ramda'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getCurrentColorTheme} from '../reducers'
import ARect from './SymbolRectFlex'

const mapStateToProps=(state)=>{
  let combBranch=state['main'].toJS()
  return{
    rdxState:combBranch['data'][combBranch['current']],
    color:getCurrentColorTheme(state)
  }
}

class FlexTable extends Component{

   render=()=>{
    // console.log('undCD', this.props.rdxState.cellDims)
    // console.log('STATE',this.props.rdxState)
    // console.log('STATE',this.props.rdxState.main.toJS())
    if(this.props.rdxState.cellDims === undefined)
      return <div>undef CD</div>

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
          {this.props.rdxState.da.map(x => <ARect bs={this.props.rdxState} color={this.props.color} v={x}/>)}
        </div>
      </div>
    )
  }

    updateDimensions=()=> {

    var w = window,
        d = document,
        documentElement = d.documentElement,
        body = d.getElementsByTagName('body')[0],
        width = w.innerWidth || documentElement.clientWidth || body.clientWidth,
        height = w.innerHeight|| documentElement.clientHeight|| body.clientHeight;

        //this.setState({width: width, height: height});
        this.props.dispatch({type:'ScreenResize',data:{width: width, height: height}})
        // if you are using ES2015 I'm pretty sure you can do this: this.setState({width, height});
    }

    componentWillMount=()=> {
        this.updateDimensions();
    }

    componentDidMount=()=> {
        window.addEventListener("resize", this.updateDimensions);
    }

    componentWillUnmount=()=> {
        window.removeEventListener("resize", this.updateDimensions);
    }

}

export default connect(mapStateToProps)(FlexTable)
