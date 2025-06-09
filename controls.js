export function setupSpeedControls(planets) {
  const container = document.getElementById('controls');
  planets.forEach((planet, index) => {
    const label = document.createElement('label');
    label.textContent = 'Planet ' + (index + 1) + ' Speed:';
    const input = document.createElement('input');
    input.type = 'range';
    input.min = '0';
    input.max = '0.1';
    input.step = '0.001';
    input.value = planet.userData.speed;
    input.addEventListener('input', (e) => {
      planet.userData.speed = parseFloat(e.target.value);
    });
    container.appendChild(label);
    container.appendChild(input);
  });
}

export function updatePlanetSpeeds(planets) {
  planets.forEach((planet) => {
    planet.userData.angle += planet.userData.speed;
    planet.position.x = planet.userData.distance * Math.cos(planet.userData.angle);
    planet.position.z = planet.userData.distance * Math.sin(planet.userData.angle);
  });
}