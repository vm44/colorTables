import React, { Component } from "react";
import { connect } from "react-redux";
// import thunk from 'redux-thunk';
import * as THREE from "three";

import * as acts from "../actions";

// import {loadDAE} from '../index'

const handleClick = (e, { name }) => {
  e.preventDefault();
  // console.log('models/'+name+'.dae')

  //  loadDAE('models/'+name+'.dae')
};

const hc1 = name => {
  console.log("clk!", name);
};

let menuItems = [
  "three_Exp_A2",
  // 'Mercure',
  // 'clown_002_014',
  "Desant",
  // 'cowboy_c_002_010anExpTh',
  // 'Knight_001_003t016exp',
  // 'Vampire_expD_001_016',
  // 'viking_c_001_007',
  "GoatHead",
  "house",
  // 'VikingHead',
  // 'three_Exp_A1','executioner_002t008',
  "T-10M",
  "Dragon",
  "WoodSoldier"
  // 'head_speznaz2_001_eyes_hat_AM','soldier_0033an','cowboy_c_001_011',
  // 'Vampire_001_017pp','mh_move_2-02'
];

class ThreeSetup extends Component {
  activateModel = name => {
    return dispatch => {
      console.log(name);
      let fullName = "models/" + name.name + "/" + name.name + ".json";
      let l = new THREE.ObjectLoader();
      // let l=new THREE.JSONLoader()
      // l.options.convertUpAxis = true;
      l.load(fullName, function(loadedObject) {
        // console.log('loadObj',loadedObject)

        dispatch({ type: "reLoad", payload: name.name });
        dispatch(acts.setModel(name.name, loadedObject));

        // loadedObject.traverse( function ( child ) {
        //
        // 	if ( child instanceof THREE.SkinnedMesh ) {
        //     console.log('child!',child)
        //
        // 		let mesh = child;
        //     console.log('foundD!',mesh)
        //
        //     // return (dispatch,getState)=>{
        //       // dispatch({type:"setAnimation",payload:undefined})
        //       // dispatch({type:'reLoad',payload:name.name})
        //       // dispatch(acts.setModel(name.name,mesh))
        //     // }
        // 	}
        //
        // } );
      });
    };
  };

  componentWillMount = () => {
    console.log("willMnt");
  };

  componentDidMount = () => {
    console.log("didMnt");
    // this.props.dispatch(this.activateModel({name:'T-10M'}))
  };

  render() {
    const ListItem = ({ parms, act, name }) => (
      <li
        style={
          {
            //float:'left',
            // display:'inline',
            // margin:2
          }
        }
      >
        {/*// <a href='#' onClick={(e)=>{parms.dispatch({type:'reLoad',payload:{name}});handleClick(e,{name})}}>*/}
        {/*<a href='#' onClick={(e)=>{e.preventDefault(); parms.dispatch(parms.activateModel({name}))}}>*/}
        <a
          href="#"
          onClick={e => {
            e.preventDefault();
            parms.dispatch(act({ name }));
          }}
        >
          {/*<a href='#' onClick={hc1}>*/}
          {/*<a href='#' onClick={()=>{console.log('CLK!',{name})}}>*/}
          {name}
        </a>
      </li>
    );

    return (
      <div
        style={{
          //margin:'auto',
          border: "1px red solid",
          display: "inline-block"
        }}
      >
        <ul
          style={{
            //display:'inline',//padding:'10px',fontSize:14,
            listStyleType: "none",
            paddingLeft: "0"
          }}
        >
          {/*{menuItems.map(x=><MenuItem name={x[0]} link={x[1]} />)}*/}
          {menuItems.map(x => (
            <ListItem parms={this.props} act={this.activateModel} name={x} />
          ))}
        </ul>
      </div>
      // {/*</div>*/}
    );
  }
}

export default connect()(ThreeSetup);
