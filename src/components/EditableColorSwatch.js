'use strict'

import React from 'react'
import {connect} from 'react-redux'
import reactCSS from 'reactcss'
import { ChromePicker } from 'react-color'
import {Button, DropdownButton, MenuItem} from 'react-bootstrap'

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
    this.props.dispatch({type:'chColor',val:{key:this.props.sourceKey,prevColor:this.state.prevColor,color:color}})
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
          overflow:"visible",
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
        <div style={ styles.swatch } onClick={ this.handleClick }>

          <DropdownButton bsStyle="default" style={{backgroundColor: this.props.color}}
            title={this.props.color} noCaret id="dropdown-no-caret">
            <MenuItem eventKey="1" onClick={()=>{this.state.prevColor=this.props.color;
                console.log('Ed',this.state.prevColor);this.setState({ displayColorPicker:true})}}>Edit</MenuItem>
            <MenuItem eventKey="2" onClick={()=>{
              this.props.dispatch({type:'rmColor',val:{key:this.props.sourceKey,prevColor:this.state.prevColor,color:this.props.color}}) }
              }>Remove</MenuItem>
          </DropdownButton>

          { this.state.displayColorPicker ?
<div style={{border:"1px solid #ff0000",
            position:"absolute",
            width:"25vw",
            height:"5vw",}}>
            ddd</div>
            // <div style={ styles.popover }>
            //   <div style={ styles.cover } onClick={ this.handleClose }/>
            //   <ColorDialog initColor={this.props.color} onOK={this.handleClose} onAccept={this.handleChange}/>
            // </div>

            : null }

        </div>
//         {/*}
//
//         <ChromePicker color={ this.state.color } onChange={ this.handleChange } />
//
//         { this.state.displayColorPicker ? <div style={ styles.popover }>
//           <div style={ styles.cover } onClick={ this.handleClose }/>
//           <ChromePicker color={ this.props.color } onChange={ this.handleChange } />
//         </div> : null }
// */}
    )
  }
}

export default connect()(EditableColorSwatch)


// return (
//   <div style={{position:'relative'}}>
//     <div style={ styles.swatch } onClick={ this.handleClick }>
//       <div style={ styles.color } />
//     {/*}
//     { this.state.displayColorPicker && <ChromePicker color={"#ff0000"} />}
//     */}
//     { this.state.displayColorPicker ? <div style={ styles.popover }>
//       <div style={ styles.cover } onClick={ this.handleClose }/>
//       <ChromePicker color={ this.state.color } onChange={ this.handleChange } />
//     </div> : null }
//   </div>
//     {/*}
//     { this.state.displayColorPicker ? <div style={ styles.popover }>
//       <div style={ styles.cover } onClick={ this.handleClose }/>
//       <ChromePicker color={ this.props.color } onChange={ this.handleChange } />
//     </div> : null }
// */}
//   </div>
// )
