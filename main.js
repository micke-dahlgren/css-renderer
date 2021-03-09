import { RenderWindow, renderFrame} from './draw.js'

const win = new RenderWindow(128, 128);
let frameData = win.context.getImageData(0, 0, win.width, win.height);


function renderNextFrame() {
  renderFrame(frameData.data);
  win.context.putImageData(frameData, 0, 0);
  window.requestAnimationFrame(renderNextFrame);
};

function main() {
  renderNextFrame();
}

main();