const mainGameCanvas = document.getElementById("mainGameCanvas");
const context = mainGameCanvas.getContext("2d");

$(document).ready(() => {
  const pictureName = "face.png";
  const face = new Sprite(pictureName);

  let angle = 0;

  setInterval(() => {
    //fill background each frame
    context.fillStyle = "black";
    context.fillRect(0, 0, 800, 800);

    face.draw(15, 15);
    face.draw(80, 15, 64, 64);
    face.draw(160, 15, 32, 64);
    face.draw(220, 15, 64, 32);

    face.rotate(150, 150, angle);
    angle += 2;
  }, 25);

});
