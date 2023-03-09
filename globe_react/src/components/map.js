import React from 'react';
import './map.scss'
import * as THREE from 'three-full';
import countries from '../service/countries.json';

class AppMap extends React.Component {
    state = {
        city: countries,
        currentCity: {
            name: '',
            status : '',
            Rd: '',
            date: ''
        }
    }
    obj = {}
    xhrs = {}
    raycaster = {}
    mouse = {}
  componentDidMount(){       
      this.conCanv    = this.refs.canv;
      this.canWidth   = this.conCanv.offsetWidth
      this.canHeight  = this.conCanv.offsetHeight

      this.scene      = new THREE.Scene()
      this.camera     = new THREE.PerspectiveCamera( 45 , this.canWidth / this.canHeight , 1, 1000 )
      this.camera.position.set( -70, 0, 250 )

      this.renderer   = new THREE.WebGLRenderer( { antialias: true } )
      this.renderer.setClearColor( '#f2f2f2' )
      this.renderer.setSize( this.canWidth, this.canHeight )

      this.pointLight = new THREE.PointLight( 0xffffff, 0.5, 400 )
      this.pointLight.position.set( 2, 10, 5 )   
      this.light      = new THREE.AmbientLight( 0xffffff, 1 )
      this.scene.add( this.pointLight )
      this.scene.add( this.light )

      this.raycaster  = new THREE.Raycaster()
      this.mouse      = new THREE.Vector2()
      
      this.conCanv.appendChild( this.renderer.domElement )

      this.loader = new THREE.GLTFLoader()
          this.loader.load( 
              './assets/3d/globee2.glb',
                gltf  => this.scene.add( gltf.scene ), 
                xhr  => this.xhrs = xhr 
              )

      this.controls = new THREE.OrbitControls( this.camera )
      this.controls.enableZoom = false

    const onMouseClick = (e) => {
          e.preventDefault();

          this.mouse.x = ( e.clientX / this.conCanv.offsetWidth ) * 2 - 1                  
          this.mouse.y = - ( e.clientY / this.conCanv.offsetHeight ) * 2 + 1

          this.raycaster.setFromCamera( this.mouse, this.camera )

          this.intersects = this.raycaster.intersectObjects( this.scene.children, true )

          try {
              let { 0: {name: nameMap}, 0: objectMap } = this.state.city.countries
              .filter( ({ name }) => name == this.intersects[1].object.name )

              let ObjectName = this.intersects[1].object.name;

              if ( ObjectName == nameMap ){
                  this.setState({
                      currentCity: {
                          name: objectMap.name,
                          status : true,
                          Rd: objectMap.Rd,
                          date: objectMap.date
                      }
                  })
              }
          }
          catch(e){ console.log( e ) }
          
      }
                
      this.conCanv.addEventListener('mousemove', onMouseClick, false);

      window.addEventListener( 'resize', () => {
          this.renderer.setSize( this.conCanv.offsetWidth, this.conCanv.offsetHeight )
          this.camera.aspect = this.conCanv.offsetWidth/ this.conCanv.offsetHeight
          this.camera.updateProjectionMatrix()
      })
      this.start()
    }   
    componentWillUnmount(){
        this.stop()
        this.canv.removeChild(this.renderer.domElement)
    }
    animate       = () => {       
       this.renderScene()
       this.frameId = window.requestAnimationFrame(this.animate)
     }
    start         = () => !this.frameId 
                        ? this.frameId = requestAnimationFrame(this.animate) 
                        : null
    stop          = () => cancelAnimationFrame(this.frameId) 
    renderScene   = () => this.renderer.render( this.scene, this.camera )  

  render() {       
    return (
      <div id="cont-canv" className="canv" ref='canv'
      >
        {
          this.state.currentCity.status                
            ? 
              <section className="city">
                  <h2>Rd. 2 { this.state.currentCity.name }</h2>
                  <p>
                      { this.state.currentCity.Rd} { this.state.currentCity.date } 
                  </p>
              </section>
            : null
        }
      </div>
    )
  }
  }



export default AppMap;