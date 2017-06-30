class Paddle {
  constructor(context, x, y, width, height) {
    this.context = context;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  moveLeft(speed) {
    this.x -= speed;
  }

  moveRight(speed) {
    this.x += speed;
  }

  draw() {
    canvas.context.fillStyle = "red";
    this.context.fillRect(this.x, this.y, this.width, this.height);
  }
}
