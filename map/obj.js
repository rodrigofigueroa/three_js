// vars
var renderer, scene, camera, drip;
var targetRotation = 0, targetRotationOnMouseDown = 0, mouseX = 0, mouseXOnMouseDown = 0;
var ww = window.innerWidth,
	hf = window.innerWidth / 2,
	wh = window.innerHeight;

function init(){

	renderer = new THREE.WebGLRenderer({canvas : document.getElementById('scene')});
	renderer.setSize(ww,wh);

	// set scene
	scene = new THREE.Scene();

	// create camera
	camera = new THREE.PerspectiveCamera(50, ww/wh, 0.1, 10000 );
	camera.position.set(0, 50, 500);
	scene.add(camera);

	// light the scene
	directionalLight = new THREE.DirectionalLight( 0xffffff, 0.8 );
	directionalLight.position.set( -100, 0, 350 );
	directionalLight.lookAt(new THREE.Vector3(0,0,0));
	scene.add( directionalLight );

	// controls
	function onDocumentMouseDown( event ) {
		event.preventDefault();
		document.addEventListener( 'mousemove', onDocumentMouseMove, false );
		document.addEventListener( 'mouseup', onDocumentMouseUp, false );
		document.addEventListener( 'mouseout', onDocumentMouseOut, false );
		mouseXOnMouseDown = event.clientX - hf;
		targetRotationOnMouseDown = targetRotation;
	}
	function onDocumentMouseMove( event ) {
		mouseX = event.clientX - hf;
		targetRotation = targetRotationOnMouseDown + ( mouseX - mouseXOnMouseDown ) * 0.02;
	}
	function onDocumentMouseUp() {
		document.removeEventListener( 'mousemove', onDocumentMouseMove, false );
		document.removeEventListener( 'mouseup', onDocumentMouseUp, false );
		document.removeEventListener( 'mouseout', onDocumentMouseOut, false );
	}
	function onDocumentMouseOut() {
		document.removeEventListener( 'mousemove', onDocumentMouseMove, false );
		document.removeEventListener( 'mouseup', onDocumentMouseUp, false );
		document.removeEventListener( 'mouseout', onDocumentMouseOut, false );
	}
	
	// mouse event listeners
	document.addEventListener( 'mousedown', onDocumentMouseDown, false );
	
	//Load the obj file
	loadOBJ();	
}

var loadOBJ = function(){
	var loader = new THREE.OBJLoader();  
	loader.load( 'https://res.cloudinary.com/aoedipus/raw/upload/drippy.obj', function(object){
			
		// scale
		object.scale.multiplyScalar(30);
		// position them
		object.rotation.y = Math.PI/1.5;
		object.position.y = -125;
		object.position.z = 0;
	
		// add to scene
		drip = object;
		scene.add(drip);
		render();
	});
}

// animate drip
var render = function () {
	requestAnimationFrame(render);

	drip.rotation.y += ( targetRotation - drip.rotation.y ) * 0.05;
	renderer.render(scene, camera);
};

init();
