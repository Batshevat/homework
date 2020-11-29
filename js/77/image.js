(function () {
  'use strict';

  const canvas = document.getElementById('theCanvas');
  const context = canvas.getContext('2d');
  const SNAKE_SIZE = 64;
  let gameOver = false;
  let score = 0;
  let snake;
  let apple;
  let speed = 500;
  const crashSound = document.getElementById('crash');
  const crunchSound = document.getElementById('crunch');


  function resizeCanvas() {
    canvas.width = (window.innerWidth - 2) - ((window.innerWidth - 2) % SNAKE_SIZE);
    canvas.height = (window.innerHeight - 2) - ((window.innerHeight - 2) % SNAKE_SIZE);
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();


  class Snake {
    constructor() {
      this.direction = 'ArrowRight';
      this.x = 0;
      this.y = 0;

      document.addEventListener('keydown', e => {
        switch (e.key) {
          case 'ArrowUp':
          case 'ArrowDown':
          case 'ArrowLeft':
          case 'ArrowRight':
            this.direction = e.key;
        }
      });
      this.draw();
    }

    draw() {
      context.drawImage(img, this.x, this.y, SNAKE_SIZE, SNAKE_SIZE);

    }
    move() {
      let x = this.x;
      let y = this.y;

      switch (this.direction) {
        case 'ArrowLeft':
          x -= SNAKE_SIZE;
          break;
        case 'ArrowRight':
          x += SNAKE_SIZE;
          break;
        case 'ArrowUp':
          y -= SNAKE_SIZE;
          break;
        case 'ArrowDown':
          y += SNAKE_SIZE;
          break;
      }

      if (x < 0 || x > canvas.width - SNAKE_SIZE || y < 0 || y > canvas.height - SNAKE_SIZE) {
        gameOver = true;
      } else {
        this.x = x;
        this.y = y;
      }
      if (apple) {
        if (this.x === apple.x && this.y === apple.y) {

          crunchSound.currentTime = 0;
          crunchSound.play();

          score++;
          apple.move();
        }
      }
      this.draw();
    }

  }
  class Apple {
    constructor() {
      this.move();
      this.draw();

    }
    draw() {
      context.drawImage(appleImg, this.x, this.y, SNAKE_SIZE, SNAKE_SIZE);

    }
    move() {
      this.x = Apple.getRandomNumber(canvas.width - SNAKE_SIZE);
      this.y = Apple.getRandomNumber(canvas.height - SNAKE_SIZE);
    }
    static getRandomNumber(max) {
      let r = Math.floor(Math.random() * (max + 1));
      return r - (r % SNAKE_SIZE);
    }
  }



  function gameLoop() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    snake.move();
    apple.draw();

    context.font = 'bold 48px serif';
    context.fillText(score, canvas.width - 120, 50);

    if (!gameOver) {
      setTimeout(gameLoop, speed);
    } else {
      crashSound.currentTime = 0;
      crashSound.play();
    }
  }


  const img = new Image();
  img.src = 'images/snakehead.png';
  img.addEventListener('load', () => {

    snake = new Snake();
    setTimeout(() => {
      gameLoop();
    }, speed);


  });
  const appleImg = new Image();
  appleImg.src = 'images/apple.png';
  appleImg.addEventListener('load', () => {

    apple = new Apple();



  });
}());