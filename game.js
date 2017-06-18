const FRAMES_PER_SECOND = 60;
const CANVAS_ID = "mainGameCanvas";
const CANVAS_WIDTH = 680;
const CANVAS_HEIGHT = 480;

const canvas = new Canvas(CANVAS_ID, CANVAS_WIDTH, CANVAS_HEIGHT);

$(document).ready(() => {
  const face = new Sprite(canvas.context, "face.png");

  let angle = 0;

  setInterval(() => {
    //fill background each frame
    canvas.context.fillStyle = "black";
    canvas.context.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    face.draw(15, 15);
    face.draw(80, 15, 64, 64);
    face.draw(160, 15, 32, 64);
    face.draw(220, 15, 64, 32);

    face.rotate(150, 150, angle);
    angle += 1;
  }, 1000 / FRAMES_PER_SECOND);
});
