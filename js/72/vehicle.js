(function () {
    'use strict';

    function Vehicle(color, speed) {
        this.color = color;
        this.speed = speed;
    }

    Vehicle.prototype.go = function () {
        console.log(`now going at ${this.speed}`);
    };

    Vehicle.prototype.print = function () {
        console.log(`Color: ${this.color}, Speed: ${this.speed}`);
    };

    function Plane(color, speed) {
        this.color = color;
        this.speed = speed;
    }


    Plane.prototype = Object.create(Vehicle.prototype);
    Plane.prototype.go = function () {
        console.log(`now flying at ${this.speed}`);
    };

    const truck = new Vehicle('white', '100mph');

    truck.print();
    truck.go();

    const helicopter = new Plane('silver', '200mph');
    helicopter.print();
    helicopter.go();
})();