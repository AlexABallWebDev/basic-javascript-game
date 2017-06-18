/**
Represents a sprite to be drawn to a canvas.
*/
class Sprite {
  /**
  @param {string} fileName Name of image file
  @param {bool} isPattern Used to check if this sprite is a background pattern or not.
  */
  constructor(context, fileName, isPattern = false) {
    this.context = context;
    this.image = null;
    this.pattern = null;

    if (!(fileName === undefined || fileName === "" || fileName === null)) {
      this.image = new Image();
      this.image.src = fileName;

      if (isPattern) {
        this.pattern = this.context.createPattern(this.image, 'repeat');
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
      this.context.fillStyle = this.pattern;
      this.context.fillRect(x, y, width, height);
    } else {
      if (width === undefined || height === undefined) {
        //draw using original image width and height
        this.context.drawImage(this.image, x, y, this.image.width, this.image.height);
      } else if (width !== undefined && height !== undefined) {
        //stretch the image based on the given width and height
        this.context.drawImage(this.image, x, y, width, height);
      }
    }
  }

  /**
  Converts angles in degrees to radians.
  @param {number} angleInDegrees The angle to be converted in degrees.
  @return {number} The converted angle in radians.
  */
  static convertToRadians(angleInDegrees) {
    return angleInDegrees * (Math.PI / 180);
  }

  /**
  Draws the Sprite rotated according to the given angle in degrees.
  @param {number} x The x coordinate to draw to on the canvas.
  @param {number} y The y coordinate to draw to on the canvas.
  @param {number} angle The angle to rotate, in degrees.
  */
  rotate(x, y, angle) {
    this.context.save();

    this.context.translate(x, y);
    this.context.rotate(Sprite.convertToRadians(angle));
    this.context.drawImage(this.image, -(this.image.width / 2), -(this.image.height / 2));

    this.context.restore();
  }
}
