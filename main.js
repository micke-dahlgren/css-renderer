import { RenderWindow, renderFrame} from './draw.js'

let win = new RenderWindow(128, 128);
let frameData = win.context.getImageData(0, 0, win.width, win.height);

let update = function () {
  renderFrame(frameData.data);
  win.context.putImageData(frameData, 0, 0);
  renderNextFrame();
};

function renderNextFrame() {
  window.requestAnimationFrame(update);
};

renderNextFrame();