import * as THREE from 'three'
import R from 'ramda'
import OrbitControls from 'orbit-controls-es6';
import ColladaLoader from 'three-collada-loader'

import {store} from './store'
import * as acts from './actions'

var cAnimAction

      const anim_ctl=()=>{
        let v=store.getState()['main'].toJS()['data']['default']['fontSizeRange'][0]
        console.log("anim_ctl!",v)
        if(v>20){
          if(enableAnim){
            enableAnim=false
            let v=document.getElementById("b3d")
            v.removeChild( renderer.domElement );
          }
        }
        else{
          if(!enableAnim){
            let v=document.getElementById("b3d")
            v.appendChild( renderer.domElement );
            enableAnim=true
            animate()
          }
        }

        let ms=store.getState()['threeD']
        console.log('msMod',ms)
        if(ms.models && ms.models.hasOwnProperty(ms.model.name)){
          let cModel=ms.models[ms.model.name]
          console.log(cModel)
          cModel.geometry.animations.map(x=>console.log(x.name))
        }

        if(ms.animation){
          if(cAnimAction)
            cAnimAction.stop()
  				cAnimAction = mixer.clipAction( ms.animation.name );
          cAnimAction.play()
        }

      }


	var setMaterial = function(node, material) {
	  node.material = material;
	  if (node.children) {
			// if(node.type == "Object3D")
			// 	vList.innerHTML += node.type+" "+node.name +"<br>"
	    for (var i = 0; i < node.children.length; i++) {
	      setMaterial(node.children[i], material);
	    }
	  }
	}

  var mesh, skeleton, mixer;

  const loadJSON1=(name)=>{
				var loader = new THREE.JSONLoader();
				loader.load(name, function ( geometry, materials ) {

					// adjust color a bit

					// var material = materials[ 0 ];
					// material.morphTargets = true;
					// material.color.setHex( 0xffaaaa );
          console.log('geomG',geometry)
          console.log('geomG1',materials)


						var mesh = new THREE.Mesh( geometry, materials );

						// random placement in a grid

						var s = THREE.Math.randFloat( 0.00075, 0.001 );
						mesh.scale.set( s, s, s );

						mesh.rotation.y = THREE.Math.randFloat( -0.25, 0.25 );

						mesh.matrixAutoUpdate = false;
						mesh.updateMatrix();

						scene.add( mesh );

						mixer.clipAction( geometry.animations[ 0 ], mesh )
								.setDuration( 1 )			// one second
								.startAt( - Math.random() )	// random phase (already running)
								.play();					// let's go


				} );
      }


  const loadJSON=(name)=>{

      let fullName='models/'+name+'.json'
			let l=new THREE.ObjectLoader()
      l.load( fullName, function ( loadedObject ) {

				loadedObject.traverse( function ( child ) {

					if ( child instanceof THREE.SkinnedMesh ) {

						mesh = child;
            console.log('foundD!',mesh)

					}

				} );

				if ( mesh === undefined ) {

					alert( 'Unable to find a SkinnedMesh in this place:\n\n' + name + '\n\n' );
					return;

				}


				// Add mesh and skeleton helper to scene

				// mesh.rotation.y = - 135 * Math.PI / 180;
				scene.add( mesh );

				skeleton = new THREE.SkeletonHelper( mesh );
				skeleton.visible = true;
				scene.add( skeleton );


				// Initialize camera and camera controls

				var radius = mesh.geometry.boundingSphere.radius;

				// var aspect = window.innerWidth / window.innerHeight;
				// camera = new THREE.PerspectiveCamera( 45, aspect, 1, 10000 );
				// camera.position.set( 0.0, radius, radius * 3.5 );
        //
				// controls = new THREE.OrbitControls( camera, renderer.domElement );
				// controls.target.set( 0, radius, 0 );
				// controls.update();
        //
        //
				// // Create the control panel
        //
				// createPanel();


				// Initialize mixer and clip actions

				mixer = new THREE.AnimationMixer( mesh );

        console.log('meshA',mesh)

				// let idleAction = mixer.clipAction( 'idle' );
				// let walkAction = mixer.clipAction( 'walk' );
				// let runAction = mixer.clipAction( 'run' );
				// let actions = [ idleAction, walkAction, runAction ];
        //
				// // activateAllActions();
        //
				// actions.forEach( function ( action ) {
        //
				// 	action.play();
        //
				// })

        // mesh.geometry.animations.map(x => console.log(x.name))

				// let idleAction = mixer.clipAction( 'ArmatureAction' );
				// let idleAction = mixer.clipAction( mesh.geometry.animations[1].name );
        // idleAction.play()

        // let walkAction = mixer.clipAction( 'walk' );
				// let runAction = mixer.clipAction( 'run' );
				// let actions = [ idleAction, walkAction, runAction ];
        //
				// // activateAllActions();
        //
				// actions.forEach( function ( action ) {
        //
				// 	action.play();
        //
				// })

				// Listen on window resizing and start the render loop

				// window.addEventListener( 'resize', onWindowResize, false );
				//animate();

        store.dispatch(acts.setModel(name,mesh))

			} );
  }


  const loadJSON2=(name)=>{
				// var loaderJ = new THREE.JSONLoader();
				var loaderJ = new THREE.ObjectLoader();
				loaderJ.load( name, function ( obj ) {

					// var material = materials[ 0 ];
					// material.morphTargets = true;
					// material.color.setHex( 0xffaaaa );
          //
          //
					// 	var mesh = new THREE.Mesh( geometry, materials );
          //
					// 	mesh.position.set( 0, 0, 0 );
          //
					// 	// mesh.scale.set( s, s, s );
					// 	mesh.matrixAutoUpdate = false;
					// 	mesh.updateMatrix();
            console.log('objL',obj)
						scene.add( obj );

    				var animationClip = obj.children[0].geometry.animations[ 0 ];
    				// var animationClip = obj.animations[ 0 ];
    				// mixer = new THREE.AnimationMixer( scene );
    				mixer.clipAction( animationClip ).play();
            console.log(animationClip,mixer)

						// mixer.clipAction( geometry.animations[ 0 ], mesh )
						// 		.setDuration( 1 )			// one second
						// 		.startAt( - Math.random() )	// random phase (already running)
						// 		.play();					// let's go

				} );

  }


  const loadDAE=(name)=>{
    var loader = new ColladaLoader();
		loader.options.convertUpAxis = true;

    loader.load( name, function ( collada ) {

			var object = collada.scene;

			mixer = new THREE.AnimationMixer( object );

			object.traverse( function ( child ) {

				if ( child instanceof THREE.SkinnedMesh ) {

          console.log("skimesh",child)

					var clip = THREE.AnimationClip.parseAnimation( child.geometry.animation, child.geometry.bones );
					mixer.clipAction( clip, child ).play();

				}
      })


      console.log('collada',collada)
      var box = new THREE.Box3().setFromObject( collada.scene );
      let c=new Array(3)
      let s=new THREE.Sphere
      // console.log( box.min, box.max, box.size() );
      box.getSize().toArray(c)
      box.getBoundingSphere(s)
      console.log('mSize',c,s)
      camera.position.z=s.radius*1.1
      scene.add( collada.scene );
      collada.scene.name='newObj'
      store.dispatch({type:"loadedModel",payload:collada.scene})

  })
}

      var enableAnim=true;
      // var mixer
  // const init_3=()=>{
			var scene = new THREE.Scene();
			var	mixer = new THREE.AnimationMixer( scene );

			var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/(window.innerHeight/1), 0.1, 1000 );
			// var camera = new THREE.OrthographicCamera( 75, window.innerWidth/(window.innerHeight/1), 0.1, 1000 );
			// var	camera = new THREE.CombinedCamera( window.innerWidth / 2, window.innerHeight / 2, 70, 1, 1000, - 500, 1000 );

			var renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight / 1);
			var	clock = new THREE.Clock();


      // var sky = new THREE.Sky();
      // scene.add( sky.mesh );

      var v=document.getElementById("b3d")

      // loadDAE('models/tl.dae')
      // loadDAE('models/T-10_108.dae')

			// var geometry = new THREE.BoxGeometry( 1, 1, 1 );
			// var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
			// var cube = new THREE.Mesh( geometry, material );
			// scene.add( cube );

			camera.position.z = 15;

      var light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
      scene.add( light );

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enabled = true;
      controls.maxDistance = 1500;
      controls.minDistance = 0;
  // }
			// var animate = function () {
			const animate = () => {
        if(enableAnim)
				    requestAnimationFrame( animate );

        render()

				// cube.rotation.x += 0.1;
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


		function render() {

      var delta = clock.getDelta();

      if ( mixer !== undefined ) {

        mixer.update( delta );

      }

      renderer.render( scene, camera );

    }


  // init_3()
	animate();

  store.subscribe(anim_ctl)

export {renderer,loadDAE,loadJSON,scene}
