import React, { useEffect, useReducer, useRef } from 'react';
import * as THREE from 'three-full';
import countries from '../../service/countries.json';

const MapTwo = props => {
    let conCanv     = '',
        canWidth    = '',
        canHeight   = '',
        scene       = '',
        camera      = '',
        renderer    = '',
        pointLight  = '',
        light       = '',
        loader      = '',
        controls    = '',
        frameId     = '',
        obj         = {}
    const containerCanvas = useRef( null )

    useEffect(() => {
        conCanv    = containerCanvas.current;
        canWidth   = conCanv.offsetWidth
        canHeight  = conCanv.offsetHeight
        
        scene      = new THREE.Scene()
        
        camera     = new THREE.PerspectiveCamera( 45 , canWidth / canHeight , 1, 1000 )
        camera.position.set( -70, 0, 250 )
        
        renderer   = new THREE.WebGLRenderer( { antialias: true } )
        renderer.setClearColor( '#f2f2f2' )
        renderer.setSize( canWidth, canHeight )
        
        pointLight = new THREE.PointLight( 0xffffff, 0.5, 400 )
        pointLight.position.set( 2, 10, 5 )   
        light      = new THREE.AmbientLight( 0xffffff, 1 )
        scene.add( pointLight )
        scene.add( light )

        conCanv.appendChild( renderer.domElement )
        loader = new THREE.GLTFLoader()
        loader.load( 
            '/assets/3d/globee2.glb',
                gltf  => {
                scene.add( gltf.scene )
            } )
        console.log( loader )
        controls = new THREE.OrbitControls( camera, renderer.domElement )
        controls.enableZoom = false
              console.log(scene )
        window.addEventListener( 'resize', () => {
            renderer.setSize( conCanv.offsetWidth, conCanv.offsetHeight )
            camera.aspect = conCanv.offsetWidth/ conCanv.offsetHeight
            camera.updateProjectionMatrix()
        })

        start()
        console.log( scene )
        return () => {
            stop()
            console.log( scene )
            conCanv.removeChild( renderer.domElement )
            console.log( scene )
        }
    }, [])
    const animate       = () => {      
        frameId = window.requestAnimationFrame(animate)
        renderer.render( scene, camera )  
     }
    const start         = () => !frameId 
                        ? frameId = requestAnimationFrame(animate) 
                        : null
    const stop          = () => cancelAnimationFrame(frameId) 

        
    return (
      <div id="cont-canv" className="canv" ref={ containerCanvas }>
        
      </div>
    )
  }



export default MapTwo;