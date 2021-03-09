import { Color } from './structs.js'

class RenderWindow {
  constructor(height, width) {
    this.height = height;
    this.width = width;
    this.canvas = document.getElementById('canvas');
    this.context = document.getElementById('canvas').getContext('2d');
  }
}

function renderFrame(data) {
  for (var i = 0; i < data.length; i += 4) {
    let pixelColor = renderPixel();
    setPixelColor(i, pixelColor,data);
  }
}

function renderPixel() {
  let ran = Math.random();
  return new Color(
    Math.round(ran*255),
    Math.round(ran*255),
    Math.round(ran*255),
    255);
}

function setPixelColor(pixelIndex,Color,data) {
  data[pixelIndex] = Color.red; 
  data[pixelIndex+1] = Color.green; 
  data[pixelIndex+2] = Color.blue; 
  data[pixelIndex+3] =  Color.alpha; 
}

export {
  RenderWindow,
  renderFrame,
}
