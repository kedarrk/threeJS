//import { Light } from "./three";
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth/1, window.innerHeight/1 );
document.body.appendChild( renderer.domElement );

const geometry= new THREE.BoxGeometry(0.25,0.25,3,1,1,3);
const material = new THREE.MeshBasicMaterial( { color: 0xffffff } );


var cubes=[];var zdis=-111;
for(var i=0;i<100;i++){
	zdis++;
	cubes[i]=new THREE.Mesh( geometry, material );
	cubes[i].position.x=(Math.random()>=0.5?1:-1)*20*Math.random();
	cubes[i].position.y=(Math.random()>=0.5?1:-1)*20*Math.random();
	cubes[i].position.z=zdis;
	scene.add( cubes[i] );
}
camera.position.z = 5;

	
// for(var i=0;i=10;i++){
// 	zdis++;
// 	//const cube = ;
// 	cubes[i]= new THREE.Mesh( geometry, material );
// 	cubes[i].position.x=(Math.random()>=0.5?1:-1)*20*Math.random();
// 	cubes[i].position.y=(Math.random()>=0.5?1:-1)*20*Math.random();
// 	cubes[i].position.z=zdis;
	

// 	scene.add( cubes[i] );
	
// }
function animate() {
	requestAnimationFrame( animate );
	zdis=-111;
	for(var i=0;i<cubes.length;i++){
		cubes[i].position.z+=0.2;
		if(cubes[i].position.z >= 1.5){
			cubes[i].position.z=zdis;
			cubes[i].position.x=(Math.random()>=0.5?1:-1)*20*Math.random();
			cubes[i].position.y=(Math.random()>=0.5?1:-1)*20*Math.random();
			zdis++;
		}
	}
	renderer.render( scene, camera );
}
animate();
