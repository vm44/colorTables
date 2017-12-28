import React, {Component} from 'react'
import {connect} from 'react-redux'

const mapStateToProps=(state)=>{
  return{stackedMenu:state['stackedMenu']}
}

class StackedMenu extends Component{

  render = () => {
    console.log('stackedMenuItems:',this.props.stackedMenu.items)
    return(
      this.props.stackedMenu.items.length ?
      <div style={{
        border:"1px solid #ff0000",
        position:"fixed",
        display:"inline-block",
        left:this.props.stackedMenu.items[0].posX,
        top:this.props.stackedMenu.items[0].posY,
        zIndex:20,
    }}>
      {this.props.stackedMenu.items.map(x=>{
        return (<div style={{
          backgroundColor: this.props.stackedMenu.selected == x.obj.id ? "#5500ff" : "#dddddd"
        }} onMouseEnter={()=>{
          this.props.dispatch({type:"selectItem",payload:x.obj.id})}}
          >{x.name}</div>)
      })}
      </div>
      :
      null
    )
  }
}

export default connect(mapStateToProps)(StackedMenu)
