import React, {Component} from 'react'
import {connect} from 'react-redux'

import BoxContainer from '../components/BoxContainer'
import VColorBinder from '../containers/VColorBinder'
import VSlider from './VSlider'

const mapStateToProps=function(state){
  return {ks:Object.keys(state.color)}
}

class TableSetup extends Component{
  render(){
    return(
    <div style={{width:"80%",margin:"auto",zIndex:"0"}}>
      Horizontal
      <VSlider className={'hz'} value={6} max={32} onChange={(val)=>{console.log(val);this.props.dispatch({type:'chSize',val:{src:'horz',val:val}})}}/>
      Vertical
      <VSlider max={32} onChange={(val)=>{console.log(val);this.props.dispatch({type:'chSize',val:{src:'vert',val:val}})}}/>

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

// export default connect(mapStateToProps)(TableSetup)
export default connect()(TableSetup)

// {this.props.ks.map(k => <BoxContainer sourceKey={k} />)}


// <BoxContainer sourceKey={this.props.ks[0]} />

// <BoxContainer sourceKey="bkg" />
// <BoxContainer sourceKey="font" />
