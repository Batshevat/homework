(function () {

    'use strict';

    class Vehicle {

        constructor(color) {
            this.color = color;
        }

        go(speed) {
            this.speed = speed;
            console.log(`now going at ${this.speed}`);
        }

        print() {
            console.log(`${this.color}, ${this.speed}`);
        }

    }

    class Plane extends Vehicle {

        go(speed) {
            this.speed = speed;
            console.log(`now flying at ${this.speed}`);
        }

    }
    const car = new Vehicle('red');
    car.go('75mph');
    car.print();
    const boeing = new Plane('blue');
    boeing.go('200mph');
    boeing.print();


})();