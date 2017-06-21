class Paddle {
  constructor(context, x, y, width, height) {
    this.context = context;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  moveLeft(velocity) {
    this.x -= velocity;
  }

  moveRight(velocity) {
    this.y -= velocity;
  }

  draw() {
    this.context.drawRect(this.x, this.y, this.width, this.height);
  }
}
