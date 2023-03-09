
 init(); 
function init() {
    var scene =  new THREE.Scene();    
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth/ window.innerHeight, 0.1, 1000);
        camera.position.set(0, 300, 100);
        // camera.rotation.x = 0;        
        // camera.rotation.y = -20; 
        console.log(camera.position);
    var renderer = new THREE.WebGLRenderer();
        renderer.setClearColor('#e5e5e5');
        renderer.setSize(window.innerWidth, window.innerHeight);    
        document.getElementById('canvas-cont').appendChild(renderer.domElement);
        window.addEventListener('resize', () => {
            renderer.setSize(window.innerWidth,innerHeight);
            camera.aspect = window.innerWidth / innerHeight;            
            camera.updateProjectionMatrix();
        });
        // RAYCASTER
            var raycaster = new THREE.Raycaster();
            var mouse = new THREE.Vector2();

        // var lightPoint = new THREE.PointLight(0xffffff, 2, 100);
        //     lightPoint.position.set(1,10,10);
        //     scene.add(lightPoint);
        // var ambientLight = new THREE.AmbientLight(0xffffff);
        //     scene.add(ambientLight);
        var directionalLight = new THREE.DirectionalLight( 0xffffff, 0.8 );
            directionalLight.position.set( -100, 0, 10000 );
            directionalLight.lookAt(new THREE.Vector3(0,0,0));
            scene.add( directionalLight );

        var mtlLoader = new THREE.MTLLoader();
            mtlLoader.setTexturePath('./assets/');
            mtlLoader.setPath('./assets');
            mtlLoader.load('/tex_turbina_.mtl', function (materials) {
        
            materials.preload();
        
        var objLoader = new THREE.OBJLoader();
            objLoader.setMaterials(materials);
            objLoader.setPath('./assets/');
            objLoader.load('/tex_turbina_.obj', function (object) {            
            scene.add(object);     
            object.position.set(-0,0,0);         
            object.rotation.y = -374.60;                                          
            });
        });

        function animate() {
            requestAnimationFrame( animate );    
            renderer.render(scene, camera);
        };
            document.getElementsByClassName('flecha')[0].addEventListener('click', () => {
                if(camera.position.x == -160){
                    TweenMax.to(camera.position, 2, {x: 0,});                    
                    TweenMax.to(camera.position, 2, {y: 300,});                    
                    TweenMax.to(camera.position, 2, {z: 100,});                    
                }else if(camera.position.x == 0){

                    TweenMax.to(document.getElementsByClassName('flecha'), 1, {background: 'red'});
                    TweenMax.to(camera.position, 2, {x: -160,});
                    TweenMax.to(camera.position, 2, {y: 100});
                    TweenMax.to(camera.position, 2, {z: -200});
                }
            });
    animate();
}
