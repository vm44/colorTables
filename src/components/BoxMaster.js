import React, {Component} from 'react'
import {connect} from 'react-redux'
import glamorous from 'glamorous'

import FullScreen from './FullScreen'
import StackedMenu from './StackedMenu'

const mapStateToProps=(state)=>{
  return {boxM:state['boxMaster'],stackedMenu:state['stackedMenu']}
}

const BoxDiv=glamorous.div({border:"1px solid #000000",
  width:"90%",
  height:"90%",
})

class ContextMenu extends Component{
  render=()=>{
    return(
      <div style={{
        border:"1px solid #ff0000",
        position:"fixed",
        left:this.props.left,
        top:this.props.top
    }}>
      MENU
      </div>
    )
  }
}


class BoxMaster extends Component{

  state={}

  processNode=(node)=>{
    return(
      <div style={{border:"1px solid #000000",
        display:"flex",
        flexDirection:node.direction,
        width:node.width+"%",
        height:node.height+"%",
        backgroundColor: this.props.stackedMenu.selected == node.id ? "#ff0000" : "#ffff00",
        opacity: this.props.stackedMenu.selected == node.id ? 1 : 0.6,
        // zIndex: this.props.stackedMenu.selected == node.id ? 4 : 1,

    }} onClick={(e)=>{
      console.log("Clicked!",e.pageX);
      this.setState({left:e.pageX,top:e.pageY})
      this.props.dispatch({type:"addStackedLayer",
        payload:{posX:e.pageX,posY:e.pageY,obj:node,
            name:node.width.toString()+"x"+node.height.toString()}})
    }
    }
      >
    {/*node*/}
    {/*<ContextMenu left={this.state.left} top={this.state.top} />*/}
    {node.children ? node.children.map(x=>this.processNode(x)) : null}
    </div>
    )
  }

  render=()=>{
    console.log('boxMa',this.props)
    return(
      <FullScreen>
        <StackedMenu />
        {this.processNode(this.props.boxM)}
      </FullScreen>
      // <BoxDiv>
      //   <BoxDiv>
      //     zzz
      //   </BoxDiv>
      // </BoxDiv>
    )
  }
}

export default connect(mapStateToProps)(BoxMaster)
