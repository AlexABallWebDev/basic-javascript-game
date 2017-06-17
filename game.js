const mainGameCanvas = document.getElementById("mainGameCanvas");
const context = mainGameCanvas.getContext("2d");

/**
Represents a sprite to be drawn to a canvas.
*/
class Sprite {
  /**
  @param {string} fileName Name of image file
  @param {bool} isPattern Used to check if this sprite is a background pattern or not.
  */
  constructor(fileName, isPattern) {
    this.image = null;
    this.isPattern = null;
    this.TO_RADIANS = Math.PI / 180;

    if (fileName === undefined || fileName === "" || filename === null) {
      this.image = new Image();
      this.image.src = fileName;

      if (isPattern) {
        this.pattern = context.createPattern(this.image, 'repeat');
      }
    } else {
      console.log("File name not given when creating Sprite object.");
    }
  }
}

$(document).ready(() => {
  context.beginPath();
  context.rect(0, 0, 640, 480);
  //context.closePath();
  context.fillStyle = "black";
  context.fill();
});
