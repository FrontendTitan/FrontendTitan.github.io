"use strict";
/**
 * @file background.ts
 * @description This file contains the code for the background animation.
 */
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer({ alpha: true }); // Set alpha to true to keep the background transparent
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
var positions = new Float32Array(1000 * 3); // 3 vertices per point
var colors = new Float32Array(1000 * 3); // 3 colors per point
function resetParticles() {
    for (var i = 0; i < positions.length; i += 3) {
        positions[i] = Math.random() * 1000 - 500; // x
        positions[i + 1] = Math.random() * 1000 - 500; // y
        positions[i + 2] = Math.random() * 1000 - 500; // z
        colors[i] = Math.random(); // r
        colors[i + 1] = Math.random(); // g
        colors[i + 2] = Math.random(); // b
    }
}
resetParticles();
var geometry = new THREE.BufferGeometry();
geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3)); // New color attribute
var material = new THREE.PointsMaterial({ size: 1, vertexColors: true }); // Set vertexColors to true
var stars = new THREE.Points(geometry, material);
scene.add(stars);
camera.position.z = 200;
var cameraSpeed = 0.0001; // New variable for camera speed
var animate = function () {
    requestAnimationFrame(animate);
    // Use the cameraSpeed variable to control the speed of the particles
    camera.position.z += cameraSpeed;
    camera.position.y += cameraSpeed;
    camera.position.x -= cameraSpeed;
    camera.rotation.y -= 0.0001;
    // If the camera has moved past a certain point, reset the positions of the stars and the camera
    if (camera.rotation.y < -1.9) {
        resetParticles();
        geometry.attributes.position.needsUpdate = true;
        geometry.attributes.color.needsUpdate = true; // Update the colors
        camera.rotation.y = 1.5;
        camera.position.z = 200;
        camera.position.y = 0;
    }
    renderer.render(scene, camera);
};
animate();
// Add event listener for window resize
window.addEventListener('resize', function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}, false);
