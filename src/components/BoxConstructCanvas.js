import React, {Component} from 'react'
import * as THREE from 'three'
import OrbitControls from '../orbit-controls-es6/src';

import {store} from '../store'


class ThreeCanvas{

  constructor(renderer,box){
    // this.renderer
  }


  // var renderer

    init=()=>{
      var enableAnim=true;
      // var mixer
  // const init_3=()=>{
			var scene = new THREE.Scene();
      scene.background=new THREE.Color(0x555555)

      var gridHelper = new THREE.GridHelper();
      // scene.add( gridHelper );

      var boxHelper = new THREE.BoxHelper();
      scene.add( boxHelper );

      var	mixer = new THREE.AnimationMixer( scene );

			var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/(window.innerHeight/1), 0.1, 1000 );
			// var camera = new THREE.OrthographicCamera( 75, window.innerWidth/(window.innerHeight/1), 0.1, 1000 );
			// var	camera = new THREE.CombinedCamera( window.innerWidth / 2, window.innerHeight / 2, 70, 1, 1000, - 500, 1000 );

			this.renderer = new THREE.WebGLRenderer();
			this.renderer.setSize( window.innerWidth, window.innerHeight / 1);
			var	clock = new THREE.Clock();

			var geometry = new THREE.BoxGeometry( 1, 1, 1 );
			var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
			var cube = new THREE.Mesh( geometry, material );
			scene.add( cube );
      this.box=cube

			camera.position.z = 15;

      var light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
      scene.add( light );

      const controls = new OrbitControls(camera, this.renderer.domElement);
      controls.enabled = true;
      controls.maxDistance = 1500;
      controls.minDistance = 0;

				// LIGHTS

				var hemiLight = new THREE.HemisphereLight( 0xffffff, 0xffffff, 0.65 );
				// hemiLight.color.setHSL( 0.6, 1, 0.6 );
				// hemiLight.groundColor.setHSL( 0.095, 1, 0.75 );
				hemiLight.position.set( 110, 500, 110 );
				// scene.add( hemiLight );

				//

				var dirLight = new THREE.DirectionalLight( 0xffffff, 0.41 );
				dirLight.color.setHSL( 0.1, 1, 0.95 );
				dirLight.position.set( -1, 1.75, 1 );
				dirLight.position.multiplyScalar( 450 );
				scene.add( dirLight );

  // }
			// var animate = function () {
			const animate = () => {
        if(enableAnim)
				    requestAnimationFrame( animate );

        render()

				cube.rotation.x += 0.1;
				// cube.rotation.y += 0.1;
				// var delta = clock.getDelta();
        //
				// if ( mixer !== undefined ) {
        //
				// 	mixer.update( delta );
        //
				// }
        //
				// renderer.render(scene, camera);
			};


		const render=()=> {

      var delta = clock.getDelta();

      if ( mixer !== undefined ) {

        mixer.update( delta );

      }

      this.renderer.render( scene, camera );

    }


  // init_3()
	animate();

    }

  update=()=>{
    this.box.position.z += 10
  }
}




class BoxConstructCanvas extends Component{

  copnstructor(){
    // super()
    this.tc=new ThreeCanvas()
  }
  componentWillMount=()=>{
    this.tc=new ThreeCanvas()
    this.tc.init()

    let v=document.getElementById("b3d")
		v.appendChild( this.tc.renderer.domElement )
  }

  componentWillUnmount=()=>{
    let v=document.getElementById("b3d")
		v.removeChild( this.tc.renderer.domElement )
  }



  render =()=>{
    return(
      <div>
        boxConstruct
      </div>
    )
  }
}

export default BoxConstructCanvas
