export function createPlanets(scene, THREE) {
  const sun = new THREE.Mesh(new THREE.SphereGeometry(5, 32, 32), new THREE.MeshBasicMaterial({ color: 0xffff00 }));
  scene.add(sun);

  const planets = [];
  const sizes = [0.8, 1.2, 1.4, 1.3, 2.5, 2.2, 1.9, 1.8];
  const distances = [8, 11, 14, 17, 21, 25, 29, 33];
  const colors = [0xaaaaaa, 0xffaa00, 0x00aaff, 0x00ff00, 0xff0000, 0xff8800, 0x8888ff, 0x4444ff];

  for (let i = 0; i < 8; i++) {
    const geometry = new THREE.SphereGeometry(sizes[i], 32, 32);
    const material = new THREE.MeshStandardMaterial({ color: colors[i] });
    const planet = new THREE.Mesh(geometry, material);
    planet.userData = { angle: 0, speed: 0.01 * (i + 1), distance: distances[i] };
    scene.add(planet);
    planets.push(planet);
  }
  return planets;
}
