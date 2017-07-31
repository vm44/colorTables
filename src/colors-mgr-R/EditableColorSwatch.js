'use strict'

import React from 'react'
import {connect} from 'react-redux'
import reactCSS from 'reactcss'
import { ChromePicker } from 'react-color'
import {Button,DropdownButton, MenuItem} from 'react-bootstrap'

import ColorDialog from './ColorDialog'

class EditableColorSwatch extends React.Component {
  state = {
    displayColorPicker: false,
    color: '#ffff00',
    prevColor:''
  };

  // componentDidMount(){
  //   // console.log('mount:',this.props.color)
  //   // this.setState({color:this.props.color});
  // }

  handleClick = () => {
    // this.setState({ displayColorPicker: !this.state.displayColorPicker })
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false })
  };

  handleChange = (color) => {
    this.setState({ color: color })
    this.props.dispatch({type:'chColorImm',val:{key:this.props.sourceKey,prevColor:this.state.prevColor,color:color}})
    this.setState({ prevColor: color })
  };

  render() {

    const styles = reactCSS({
      'default': {
        color: {
          width: '36px',
          height: '19px',
          borderRadius: '2px',
          // background: this.state.color//'#ffff00'
          // background: `rgba(${ this.state.color.r }, ${ this.state.color.g }, ${ this.state.color.b }, ${ this.state.color.a })`,
        },
        swatch: {
          float: 'left',
          padding: '1px',
          background: '#fff',
          borderRadius: '1px',
          boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
          // display: 'inline-block',
          cursor: 'pointer',
        },
        popover: {
          position: 'absolute',
          // top: '20px',
          // float: 'left',
           zIndex: '12000',
        },
        cover: {
          position: 'fixed',
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px',

        },
      },
    });
    // <Button bsStyle="default" style={{backgroundColor: this.props.color}} title={this.props.color} />

    return (
        <div style={ styles.swatch }>

        {/*</div> onClick={ this.handleClick }>*/}

          <DropdownButton bsStyle="default" style={{backgroundColor: this.props.color}}
            title={this.props.color} noCaret id="dropdown-no-caret">
            <MenuItem eventKey="1" onClick={()=>{this.state.prevColor=this.props.color;
                console.log('Ed',this.state.prevColor);this.setState({ displayColorPicker:true})}}>Edit</MenuItem>
            <MenuItem eventKey="2" onClick={()=>{
              this.props.dispatch({type:'rmColorR',val:{key:this.props.colorEntry[0],prevColor:this.state.prevColor,color:this.props.color}}) }
              }>Remove</MenuItem>
          </DropdownButton>

          { this.state.displayColorPicker ?
            <div style={ styles.popover }>
              <div style={ styles.cover } onClick={ this.handleClose }/>
              <ColorDialog colorEntry={this.props.colorEntry} initColor={this.props.color} closeDialog={this.handleClose} />
            </div>
            : null }

        </div>
    )
  }
}

export default connect()(EditableColorSwatch)
