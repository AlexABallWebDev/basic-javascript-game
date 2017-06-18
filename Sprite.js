/**
Represents a sprite to be drawn to a canvas.
*/
class Sprite {
  /**
  @param {string} fileName Name of image file
  @param {bool} isPattern Used to check if this sprite is a background pattern or not.
  */
  constructor(fileName, isPattern = false) {
    this.image = null;
    this.pattern = null;
    this.TO_RADIANS = Math.PI / 180;

    if (!(fileName === undefined || fileName === "" || fileName === null)) {
      this.image = new Image();
      this.image.src = fileName;

      if (isPattern) {
        this.pattern = context.createPattern(this.image, 'repeat');
      }
    } else {
      console.log("File name not given when creating Sprite object.");
    }
  }

  /**
  Draws the given Sprite.
  @param {number} x The x coordinate to draw to on the canvas.
  @param {number} y The y coordinate to draw to on the canvas.
  @param {number} width How wide (in pixels) the image will be drawn.
      Defaults to the image's original width.
  @param {number} height How tall (in pixels) the image will be drawn.
      Defaults to the image's original height.
  */
  draw(x, y, width = undefined, height = undefined) {
    if (this.pattern !== null) {
      context.fillStyle = this.pattern;
      context.fillRect(x, y, width, height);
    } else {
      if (width === undefined || height === undefined) {
        //draw using original image width and height
        context.drawImage(this.image, x, y, this.image.width, this.image.height);
      } else if (width !== undefined && height !== undefined) {
        //stretch the image based on the given width and height
        context.drawImage(this.image, x, y, width, height);
      }
    }
  }

  /**
  Draws the Sprite rotated according to the given angle in degrees.
  @param {number} x The x coordinate to draw to on the canvas.
  @param {number} y The y coordinate to draw to on the canvas.
  @param {number} angle The angle to rotate, in degrees.
  */
  rotate(x, y, angle) {
    context.save();

    context.translate(x, y);
    context.rotate(angle * this.TO_RADIANS);
    context.drawImage(this.image, -(this.image.width / 2), -(this.image.height / 2));

    context.restore();
  }
}
