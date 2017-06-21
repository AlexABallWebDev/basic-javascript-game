class Ball {
  constructor(context, x, y, xVelocity, yVelocity, radius) {
    this.context = context;
    this.x = x;
    this.y = y;
    this.xVelocity = xVelocity;
    this.yVelocity = yVelocity;
    this.radius = radius;
  }

  bounceX() {
    this.x = -x;
  }

  bounceY() {
    this.y = -y;
  }

  moveX() {
    this.x += this.xVelocity;
  }

  moveY() {
    this.y += this.yVelocity;
  }

  move() {
    this.moveX();
    this.moveY();
  }

  draw() {
    //TODO change to draw circle
    canvas.context.fillStyle = "red";
    this.context.fillRect(this.x, this.y, this.radius, this.radius);
  }
}
