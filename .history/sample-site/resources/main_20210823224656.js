// 设置画布

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

const para = document.querySelector('p');

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

class EvilCircle extends Shape {
    constructor(x, y, exists) {
        super(x, y, 20, 20, exists);
        this.color = 'white';
        this.size = 10;

        this.aDown = false;
        this.sDown = false;
        this.wDown = false;
        this.dDown = false;
    }

    draw() {
        ctx.beginPath();
        ctx.lineWidth = 3;
        ctx.strokeStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.stroke();
    }

    update() {
        if(this.aDown) this.x -= this.velX;
        if(this.dDown) this.x += this.velX;
        if(this.wDown) this.y -= this.velY;
        if(this.sDown) this.y += this.velY;

        if((this.x + this.size) >= width) {
            this.x -= this.size;
          }
      
          if((this.x - this.size) <= 0) {
            this.x -= this.size;
          }
      
          if((this.y + this.size) >= height) {
            this.y -= this.size;
          }
      
          if((this.y - this.size) <= 0) {
            this.y -= this.size;
          }
    }

    setControls() {
        key
        window.onkeydown = e => {
            switch(e.key) {
                case 'a':
                    this.x -= this.velX;
                    break;
                case 'd':
                    this.x += this.velX;
                    break;
                case 'w':
                    this.y -= this.velY;
                    break;
                case 's':
                    this.y += this.velY;
                    break;
            }
        }
    }

    collisionDetect() {
        for(let j = 0; j < balls.length; j++) {
            if(balls[j].exists) {
              const dx = this.x - balls[j].x;
              const dy = this.y - balls[j].y;
              const distance = Math.sqrt(dx * dx + dy * dy);

              if (distance < this.size + balls[j].size) {
                balls[j].exists = false;
              }
            }
        }
    }

}

let balls = [];
let evil = new EvilCircle(
    random(0 + 10, width - 10),
    random(0 + 10, height - 10),
    true 
);
evil.setControls();

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

  let ballCount = 0;

  for(let i = 0; i < balls.length; i++) {
    if(!balls[i].exists) continue;
    balls[i].draw();
    balls[i].update();
    balls[i].collisionDetect();

    ballCount++;
  }

  evil.draw();
  evil.update();
  evil.collisionDetect();

  para.textContent = '还剩' + ballCount + '个球';

  requestAnimationFrame(loop);
}

loop();