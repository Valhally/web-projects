// 设置画布

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

function random(min,max) {
  const num = Math.floor(Math.random() * (max - min)) + min;
  return num;
}

function randomColor() {
  const color = 'rgb(' +
                random(0, 255) + ',' +
                random(0, 255) + ',' +
                random(0, 255) + ')';
  return color;
}

class Shape {
    constructor(x, y, velX, velY, exists) {
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;
        this.exists = exists;
    }

    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fill();
    }

    update() {
        if((this.x + this.size) >= width) {
          this.velX = -(this.velX);
        }
    
        if((this.x - this.size) <= 0) {
          this.velX = -(this.velX);
        }
    
        if((this.y + this.size) >= height) {
          this.velY = -(this.velY);
        }
    
        if((this.y - this.size) <= 0) {
          this.velY = -(this.velY);
        }
    
        this.x += this.velX;
        this.y += this.velY;
    };

    collisionDetect() {
        for(let j = 0; j < balls.length; j++) {
            if(this !== balls[j]) {
              const dx = this.x - balls[j].x;
              const dy = this.y - balls[j].y;
              const distance = Math.sqrt(dx * dx + dy * dy);

              if (distance < this.size + balls[j].size) {
                balls[j].color = this.color = randomColor();
              }
            }
        }
    }
}

class Ball extends Shape {
    constructor(x, y, velX, velY, color, size, exists) {
        super(x, y, velX, velY, exists);
        this.color = color;
        this.size = size;
    }
}

let balls = [];

while(balls.length < 25) {
  const size = random(10,20);
  let ball = new Ball(
    random(0 + size, width - size),
    random(0 + size, height - size),
    random(-7, 7),
    random(-7, 7),
    randomColor(),
    size,
    true
  );
  balls.push(ball);
}

function loop() {
  ctx.fillStyle = 'rgba(0,0,0,0.25)';
  ctx.fillRect(0,0,width,height);

  for(let i = 0; i < balls.length; i++) {
    balls[i].draw();
    balls[i].update();
    balls[i].collisionDetect();
  }

  requestAnimationFrame(loop);
}

loop();