import R from 'ramda'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Button} from 'react-bootstrap'

import {renderer,loadDAE,loadJSON,scene} from '../ThreeCanvas'

const mapStateToProps=(state)=>{
  // console.log('mapS',R.pickAll(['model'],state['threeD']))
  let r = R.pickAll(['models','model','loadedModel'],state['threeD'])
  if(r.model && r.models){
    console.log('cMR1',r)
    r=R.assoc('currModel',r.models[r.model.name],r)
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
    console.log('WillUpd!',this.props,nextProps)
    if(!this.props.model ||
      (this.props.model && (this.props.model.name != nextProps.model.name))){
      if(this.props.loadedModel){
        let rObj=scene.getObjectByName('newObj')
        console.log('rObj',rObj,this.props)
        scene.remove(this.props.loadedModel)
        // scene.remove(rObj)
      }
      // loadDAE('models/'+nextProps.model.name+'.dae')
      loadJSON(nextProps.model.name)
   }
  }

  linkClicked=(e,x)=>{
    this.props.dispatch({type:"setAnimation",payload:x})
    console.log("click B",x);
    e.preventDefault();
  }


  render=()=>{
    return(
        <div style={{
                position:'fixed',
                border:'1px solid #44ffff',
                width:'100%',
                height:'100%',
                // zIndex:'-2',
                top: "0",
                left: "0",
            //    display:"flex",
                // flexDirection:"row",
                // justifyContent:"space-between"

          }}>
          INNER DIV
          {this.props.currModel ?
            <ul>
              {this.props.currModel.geometry.animations.map(x=>{
                return(
                  <li>
                    <a href='#' onClick={(e)=>{this.linkClicked(e,x)}}>
                      {x.name}
                    </a>
                  </li>)})}
            </ul>
            :"nml"}
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
