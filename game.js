const FRAMES_PER_SECOND = 60;
const CANVAS_ID = "mainGameCanvas";
const CANVAS_WIDTH = 680;
const CANVAS_HEIGHT = 480;
const TILE_WIDTH = 64;
const TILE_HEIGHT = 32;
const WALL_WIDTH = 20;

const canvas = new Canvas(CANVAS_ID, CANVAS_WIDTH, CANVAS_HEIGHT);

$(document).ready(() => {
  const face = new Sprite(canvas.context, "face.png");

  let angle = 0;

  setInterval(() => {
    //fill background each frame
    canvas.context.fillStyle = "black";
    canvas.context.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    //draw bricks
    for (let y = 1; y < 4; y++) {
      for (let x = 0; x < 10; x++) {
        let tileX = WALL_WIDTH + (x * TILE_WIDTH);
        let tileY = y * TILE_HEIGHT;
        canvas.context.beginPath();
        canvas.context.fillStyle = "black";
        canvas.context.rect(tileX, tileY, TILE_WIDTH, TILE_HEIGHT);
        canvas.context.stroke();
        canvas.context.fillStyle = "yellow";
        canvas.context.fillRect(tileX, tileY, TILE_WIDTH, TILE_HEIGHT);
      }
    }

    //draw walls
    canvas.context.fillStyle = "blue";
    canvas.context.fillRect(0, 0, WALL_WIDTH, CANVAS_HEIGHT);
    canvas.context.fillRect(CANVAS_WIDTH - WALL_WIDTH, 0, WALL_WIDTH, CANVAS_HEIGHT);

  }, 1000 / FRAMES_PER_SECOND);
});
