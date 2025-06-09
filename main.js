import * as THREE from 'three';
import { createPlanets } from './planets.js';
import { setupSpeedControls, updatePlanetSpeeds } from './controls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
const pointLight = new THREE.PointLight(0xffffff, 1.2);
scene.add(ambientLight, pointLight);

// Create planets
const planets = createPlanets(scene);

// Camera position
camera.position.z = 50;

// Controls
setupSpeedControls(planets);

function animate() {
    requestAnimationFrame(animate);
    updatePlanetSpeeds(planets);
    renderer.render(scene, camera);
}
animate();