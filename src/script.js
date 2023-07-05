import './style.css';
import * as THREE from 'three';

// Canvas
const canvas = document.querySelector('canvas.webgl');

// Scene
const scene = new THREE.Scene();

// /**
//  * Objects
//  * mesh.position.x, y, or z = num will move the object
//  * x is left and right, y is up or down, z is forward and backward
//  */
// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
// const mesh = new THREE.Mesh(geometry, material);
// scene.add(mesh);

// // Position object in 3D space
// // mesh.position.x = 0.7
// // mesh.position.y = -0.6
// // mesh.position.z = 1
// mesh.position.set(0.7, -0.6, 1) // same as above but in 1 line
// // mesh.position.normalize() // Reduce the length of vector to 1 unit but preserve its direction
// // console.log(mesh.position.length()) // Print length of a vector
// // console.log(mesh.position.distanceTo(camera.position)) // Print distance from another vector

// // Scale (can specify x, y, and z)
// mesh.scale.set(2, 0.5, 0.5)

// // Rotation
// // Math.PI will do half a rotation
// mesh.rotation.reorder('YXZ')
// mesh.rotation.x = Math.PI * 0.25
// mesh.rotation.y = Math.PI * 0.25

// // Can combine position, rotation (or quaternion) or scale in any order

/**
 * Objects
 */
const group = new THREE.Group()
group.position.y = 1
group.scale.y = 2
group.rotation.y = 1
scene.add(group)

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
)

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0x00ff00 })
)

const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0x0000ff })
)

cube2.position.x = -2
cube3.position.x = 2

group.add(cube1)
group.add(cube2)
group.add(cube3)

// AxesHelper (new THREE.AxesHelper(2) will increase length of the lines)
// Shows the position of the axes
const axesHelper = new THREE.AxesHelper()
scene.add(axesHelper)


/**
 * Sizes
*/
const sizes = {
    width: 800,
    height: 600
};

/**
 * Camera
*/
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
// camera.position.set(1, 1, 3)
scene.add(camera);

// camera.lookAt(new THREE.Vector3(0,0,0))


/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);