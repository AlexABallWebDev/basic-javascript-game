const FRAMES_PER_SECOND = 60;
const CANVAS_ID = "mainGameCanvas";
const CANVAS_WIDTH = 680;
const CANVAS_HEIGHT = 480;

const TILE_WIDTH = 64;
const TILE_HEIGHT = 32;

const WALL_WIDTH = 20;

const BALL_INITIAL_X = 331;
const BALL_INITIAL_Y = 311;
const BALL_X_VELOCITY = 2;
const BALL_Y_VELOCITY = 2;
const BALL_RADIUS = 9;

const PADDLE_INITIAL_X = 300;
const PADDLE_INITIAL_Y = 400;
const PADDLE_WIDTH = 80;
const PADDLE_HEIGHT = 20;
const PADDLE_SPEED = 6;

//keyboard keys
const LEFT_KEY_CODE = 37;
const RIGHT_KEY_CODE = 39;

const canvas = new Canvas(CANVAS_ID, CANVAS_WIDTH, CANVAS_HEIGHT);
const ball = new Ball(canvas.context, BALL_INITIAL_X, BALL_INITIAL_Y,
  BALL_X_VELOCITY, BALL_Y_VELOCITY, BALL_RADIUS);
const paddle = new Paddle(canvas.context, PADDLE_INITIAL_X, PADDLE_INITIAL_Y,
  PADDLE_WIDTH, PADDLE_HEIGHT);

let brickArray = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

let left_key_down = false;
let right_key_down = false;


function initializePaddleControls() {
  //paddle controls
  $(document).on("keydown", (e) => {
    if (e.keyCode == LEFT_KEY_CODE) {
      left_key_down = true;
    }
  });

  $(document).on("keydown", (e) => {
    if (e.keyCode == RIGHT_KEY_CODE) {
      right_key_down = true;
    }
  });

  $(document).on("keyup", (e) => {
    if (e.keyCode == LEFT_KEY_CODE) {
      left_key_down = false;
    }
  });

  $(document).on("keyup", (e) => {
    if (e.keyCode == RIGHT_KEY_CODE) {
      right_key_down = false;
    }
  });
}

$(document).ready(() => {
  const face = new Sprite(canvas.context, "face.png");

  initializePaddleControls();

  let angle = 0;

  setInterval(() => {
    //fill background each frame
    canvas.context.fillStyle = "black";
    canvas.context.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    //draw bricks
    for (let y = 0; y < 3; y++) {
      for (let x = 0; x < 10; x++) {
        if (brickArray[y][x] !== 0) {
          let tileX = WALL_WIDTH + (x * TILE_WIDTH);
          let tileY = (y + 1) * TILE_HEIGHT;
          canvas.context.beginPath();
          canvas.context.fillStyle = "black";
          canvas.context.rect(tileX, tileY, TILE_WIDTH, TILE_HEIGHT);
          canvas.context.stroke();
          canvas.context.fillStyle = "yellow";
          canvas.context.fillRect(tileX, tileY, TILE_WIDTH, TILE_HEIGHT);
        }
      }
    }

    paddle.draw();

    ball.draw();

    ball.move();

    if (left_key_down) {
      paddle.moveLeft(PADDLE_SPEED);
    }

    if (right_key_down) {
      paddle.moveRight(PADDLE_SPEED);
    }

    //if ball collides with a wall
    if (ball.x <= WALL_WIDTH || ball.x + ball.radius >= canvas.width - WALL_WIDTH) {
      ball.bounceX();
    }

    //collision detection for paddle and ball
    if (ball.x >= paddle.x && ball.x <= paddle.x + paddle.width &&
      ball.y + ball.radius >= paddle.y && ball.y <= paddle.y + paddle.height) {
      ball.bounceY();
    }

    //TODO collision detection for bricks and ball

    //TODO make bricks vanish when collision occurs and disable collision with vanished bricks.

    //TODO add score

    //TODO add randomness to ball

    //TODO add reset feature that saves score

    //TODO add game over and then reset feature that resets score

    //draw walls
    canvas.context.fillStyle = "blue";
    canvas.context.fillRect(0, 0, WALL_WIDTH, CANVAS_HEIGHT);
    canvas.context.fillRect(CANVAS_WIDTH - WALL_WIDTH, 0, WALL_WIDTH, CANVAS_HEIGHT);

  }, 1000 / FRAMES_PER_SECOND);
});
