import React, {Component} from 'react'
import {connect} from 'react-redux'
import glamorous from 'glamorous'

const mapStateToProps=(state)=>{
  return {boxM:state['boxMaster']}
}

const BoxDiv=glamorous.div({border:"1px solid #000000",
  width:"90%",
  height:"90%",
})

class BoxMaster extends Component{

  processNode=(node)=>{
    return(
      <div style={{border:"1px solid #000000",
        width:node.width+"%",
        height:node.height+"%"
    }}>
    node
    {node.children ? node.children.map(x=>this.processNode(x)) : null}
    </div>
    )
  }

  render=()=>{
    console.log('boxMa',this.props)
    return(
      this.processNode(this.props.boxM)
      // <BoxDiv>
      //   <BoxDiv>
      //     zzz
      //   </BoxDiv>
      // </BoxDiv>
    )
  }
}

export default connect(mapStateToProps)(BoxMaster)
