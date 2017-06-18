const FRAMES_PER_SECOND = 60;
const CANVAS_ID = "mainGameCanvas";
const CANVAS_WIDTH = 680;
const CANVAS_HEIGHT = 480;
const TILE_WIDTH = 32;
const TILE_HEIGHT = 32;

const canvas = new Canvas(CANVAS_ID, CANVAS_WIDTH, CANVAS_HEIGHT);

$(document).ready(() => {
  const face = new Sprite(canvas.context, "face.png");

  let angle = 0;

  setInterval(() => {
    //fill background each frame
    canvas.context.fillStyle = "black";
    canvas.context.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    for (let y = 0; y < 10; y++) {
      for (let x = 0; x < 10; x++) {
        let tileX = x * TILE_WIDTH;
        let tileY = y * TILE_HEIGHT;
        face.draw(tileX, tileY);
      }
    }
  }, 1000 / FRAMES_PER_SECOND);
});
