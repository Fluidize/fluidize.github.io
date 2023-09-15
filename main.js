const mouse_position_output = document.getElementById('output');
let mousePos = { x: undefined, y: undefined };

window.addEventListener('mousemove', (event) => {
  mousePos = { x: event.clientX, y: event.clientY };
  document.documentElement.style.setProperty('--xpx',innerWidth/2-mousePos.x + 'px')
  document.documentElement.style.setProperty('--ypx',innerHeight/2-mousePos.y + 'px')
});
