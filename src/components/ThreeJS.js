import R from 'ramda'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Button,Checkbox} from 'react-bootstrap'

import Tree, { TreeNode } from 'rc-tree';
import 'rc-tree/assets/index.css';
//import './basic.less';

import {renderer,loadDAE,loadJSON,scene} from '../ThreeCanvas'
import * as acts from '../actions.js'

const mapStateToProps=(state)=>{
  // console.log('mapS',R.pickAll(['model'],state['threeD']))
  let r = R.pickAll(['models','model','loadedModel'],state['threeD'])
  if(r.model && r.models){
    console.log('cMR1',r)
    r=R.assoc('currModel',r.models[r.model],r)
    console.log('cMR2',r)
  }
  return r
}


class ThreeJS extends Component{

  componentWillMount=()=>{
    let v=document.getElementById("b3d")
		v.appendChild( renderer.domElement )
  }

  componentWillUnmount=()=>{
    let v=document.getElementById("b3d")
		v.removeChild( renderer.domElement )
  }



  componentWillUpdate = (nextProps,nextState) =>{
  //   console.log('WillUpd!',this.props,nextProps)
  //   if(!this.props.model ||
  //     (this.props.model && (this.props.model.name != nextProps.model.name))){
  //     if(this.props.loadedModel){
  //       let rObj=scene.getObjectByName('newObj')
  //       console.log('rObj',rObj,this.props)
  //       scene.remove(this.props.loadedModel)
  //       // scene.remove(rObj)
  //     }
  //     // loadDAE('models/'+nextProps.model.name+'.dae')
  //     loadJSON(nextProps.model.name)
  //  }
  }

  linkClicked=(e,x)=>{
    this.props.dispatch({type:"setAnimation",payload:x})
    console.log("click B",x);
    e.preventDefault();
  }

  getMeshes=(tparent,node)=>{
    console.log('node',node)
    return(
      node.map(x =>
        <TreeNode title={x.name} key={x.name} tparent={tparent} udata={x}>
          {x.geometry && x.geometry.animations ? this.getMeshes(x, x.geometry.animations):null}
        </TreeNode>
                    )
    )
  }

  onSelect=(selectedKeys, info)=> {
    console.log('selected', selectedKeys, info);
    this.props.dispatch({type:"setAnimation",payload:{mod:info.node.props.tparent,anim:info.node.props.udata}})
  //  this.selKey = info.node.props.eventKey;
  }

  onCheck=(checkedKeys, info) =>{
    console.log('onCheck', checkedKeys, info);
  }

  onCheckBoxWireFrameChange=(e)=>{
    // console.log('onChg',this.refs.check,e.target.checked);
    // this.props.dispatch({type:"wireFrame",payload:this.refs.check})
    this.props.dispatch(acts.setWireframe(e.target.checked))
    // this.setState({applyOnChange:!this.state.applyOnChange})
  }

  render=()=>{
    return(
      <div>
        <div style={{
                position:'fixed',
                border:'1px solid #44ffff',
                // width:'100%',
                height:'100%',
                // zIndex:'-2',
                top: "0",
                left: "0",
                textAlign:"left",
                display:"inline-block",
            //    display:"flex",
                // flexDirection:"row",
                // justifyContent:"space-between"
                overflow:"auto",
                border:"1px solid #ff0000"

          }}>
          INNER DIV
          {this.props.currModel ?
            <Tree
              //{/*checkable */}
              defaultExpandAll
              onSelect={this.onSelect} onCheck={this.onCheck}>
              <TreeNode title={"sx"}>
                {this.getMeshes(this.props.currMode, this.props.currModel.children)}
              </TreeNode>
              {/*{[...Array(10).keys()].map(x => <TreeNode title={x} key={x} />)}*/}
            </Tree>
          :null}
          {/*{this.props.currModel ?
            <ul>
              {this.props.currModel.geometry.animations.map(x=>{
                return(
                  <li>
                    <a href='#' onClick={(e)=>{this.linkClicked(e,x)}}>
                      {x.name}
                    </a>
                  </li>)})}
            </ul>
            :"nml"}*/}
        </div>
        <div style={{height: "60px",
                    position: "fixed",
                    bottom:"0%",
                    width:"100%",
                    backgroundColor: "rgba(0,100,0,0.4)",
                    border:'1px solid #44ffff',
                    opacity:"1"}}>
          LOW DIV
          <Checkbox ref='check'// checked={'true'}
            onChange={this.onCheckBoxWireFrameChange}
              >Wireframe
          </Checkbox>
        </div>
      </div>
  )
  }
}

export default connect(mapStateToProps)(ThreeJS)

/*
    return (
      <div>
        <div style={{
                position:'fixed',
                border:'1px solid #44ffff',
                width:'100%',
                height:'100%',
                // zIndex:'-2',
                top: "0",
                left: "0",
                display:"flex",
                flexDirection:"row",
                justifyContent:"space-between"

          }}>
          <div style={{
                border:'1px solid #ff0000',
            }}>
            <div style={{
                    // position:'fixed',
                    border:'1px solid #ff0000',
                    zIndex:'-4',
                    // top: "0",
                    // left: "0",
                    // backgroundColor: "#f1f1f1",

              }}>
              three
              <Button>Button</Button>
            </div>
            1
          </div>
          {/*<div style={{
                border:'1px solid #ff0000',
                display:"flex",
                flexDirection:"column",
                justifyContent:"space-between"
            }}>
            <div style={{
                  border:'1px solid #ff0000',
                  display:"flex",
                  justifyContent:"space-between"
              }}>
              top
            </div>
            <div style={{
                  border:'1px solid #ff0000',
                  display:"flex",
                  justifyContent:"space-between"
              }}>
              bottom
            </div>
          </div>*/ /*{}}
          <div style={{
                border:'1px solid #ff0000',
            }}>
            1
          </div>
        </div>
      </div>
    )
*/
