/**
Represents the canvas that the game is drawn on.
*/
class Canvas {
  /**
  @param {string} canvasId The HTML ID of the canvas.
  @param {number} width The width of the canvas.
  @param {number} height The height of the canvas.
  */
  constructor(canvasId, width, height) {
    this.width = width;
    this.height = height;
    this.canvas = document.getElementById(canvasId);
    this.context = mainGameCanvas.getContext("2d");

    $(mainGameCanvas).attr({
      width: width,
      height: height
    });

    $(mainGameCanvas).css({
      width: width + "px",
      height: height + "px",
      border: " 1px solid black"
    });
  }
}
