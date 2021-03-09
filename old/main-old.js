const winW = 20;
const winH = 20;
let redIter = 0;
let greenIter = 0;
let blueIter = 0;
let red = [255,0,0]
let green = [0,255,0]
let blue = [0,0,255]
let custom = [43,89,157];
let redPixels;
let greenPixels;
let bluePixels;
let stopAnim = false;

function createHtml() {
  window.addEventListener('click', () => { renderNextFrame(); stopAnim = !stopAnim; })
    let screen = document.createElement('div');
    screen.id = 'screen';
    document.getElementById('screenContainer').appendChild(screen);
  
  for(i = 0; i< winW*winH ; i++){
    let pixel = document.createElement('div');
    pixel.id = ''+i+'';
    pixel.className = 'pixel';
    document.getElementById('screen').appendChild(pixel);
    
    let redDiv = document.createElement('div');
    let greenDiv = document.createElement('div');
    let blueDiv = document.createElement('div');
   
    redDiv.className = 'red channel';
    greenDiv.className = 'green channel';
    blueDiv.className = 'blue channel';

    redDiv.id = 'redChannel';
    greenDiv.id = 'greenChannel';
    blueDiv.id = 'blueChannel';

    pixel.appendChild(redDiv);
    pixel.appendChild(greenDiv);
    pixel.appendChild(blueDiv);
  }
  redPixels = document.querySelectorAll('#redChannel');
  greenPixels = document.querySelectorAll('#greenChannel');
  bluePixels = document.querySelectorAll('#blueChannel');
  redPixels = Array.prototype.slice.call(redPixels);
  greenPixels = Array.prototype.slice.call(greenPixels);
  bluePixels = Array.prototype.slice.call(bluePixels);
}


createHtml();

//event handler
function changeColor(rgb){

  let r = rgb[0]/255;
  let g = rgb[1]/255;
  let b = rgb[2]/255;
 
  redPixels.forEach(pixel => pixel.style.opacity = r);
  greenPixels.forEach(pixel => pixel.style.opacity = g);
  bluePixels.forEach(pixel => pixel.style.opacity = b);
}

var update = function () {

  changeColor([redIter, greenIter, blueIter]);
  redIter = ((redIter + 1) % 255);
  greenIter = ((greenIter + 3) % 255);
  blueIter = ((redIter + 5) % 255);

  //
  if (!stopAnim) {
    renderNextFrame();
  }
};

function renderNextFrame() {
  window.requestAnimationFrame(update);
};

renderNextFrame();