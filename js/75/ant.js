(function () {
    'use strict';

    const canvas = document.getElementById('theCanvas');

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    class Ant {
        constructor(context, color='red') {
            this.color = color;
            this.x = canvas.width / 2;
            this.y = canvas.height / 2;

            this.context = context;
            this.draw();
            if (!Ant.SIZE) {
                Ant.SIZE = 2;
            }
        }
        draw() {
            this.context.fillStyle = this.color;
            this.context.beginPath();
            this.context.fillRect(this.x, this.y, Ant.SIZE, Ant.SIZE);

        }

        move() {
            this.x += Ant.getRandomNumber(-4, 4);
            this.y += Ant.getRandomNumber(-4, 4);


            if (this.x < Ant.SIZE) {
                this.x = Ant.SIZE;
            }
            else if (this.x > canvas.width - Ant.SIZE) {
                this.x = canvas.width - Ant.SIZE;
            }
            if (this.y < Ant.SIZE) {
                this.y = Ant.SIZE;
            }
            else if (this.y > canvas.height - Ant.SIZE) {
                this.y = canvas.width - Ant.SIZE;
            }
            this.draw();
        }

        static getRandomNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }

    }


    const context = canvas.getContext('2d');
    const ants = [];
    for (let i = 0; i < 100000; i++) {
        ants.push(new Ant(context));
    }
    let lastTime;

    function drawAnts(time) {
        if (! lastTime) {
          lastTime = time;
        }
      
    
        context.clearRect(0, 0, canvas.width, canvas.height);
        ants.forEach(ant => ant.move(time - lastTime));
    
        lastTime = time;
        requestAnimationFrame(drawAnts);
      }
    
      requestAnimationFrame(drawAnts);

   
    const numAnts = document.getElementById('amount');
    const colorAnts = document.getElementById('color');
    document.getElementById('addAnts').addEventListener('submit',e => {
        e.preventDefault();
        for(let i = 0; i < numAnts; i++){
            ants.push(new Ant(context, colorAnts.value));
        }

    });
}());