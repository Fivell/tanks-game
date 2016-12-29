var Game = function (config) {

    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
    var tank = new Tank({
        context: context
    });
    var wall = new Wall({
        context: context
    });

    var draw = function () {
        requestAnimationFrame(draw);

        // clear canvas
        context.clearRect(0, 0, canvas.width, canvas.height);

        // render tank
        tank.render();

        // // render the wall
        // wall.render();
    };

    this.run = function () {

        // setInterval(function () {
        //     draw();
        // }, 1000 / 50);

        draw();

        document.addEventListener("keydown", function (e) {
            if (e.keyCode == 39) {
                tank.moveRight();
            }
            else if (e.keyCode == 37) {
                tank.moveLeft();
            }
            else if (e.keyCode == 38) {
                tank.moveUp();
            }
            else if (e.keyCode == 40) {
                tank.moveDown();
            } else if (e.keyCode == 32) {
                tank.shut();
            }
        }, false);
    };
};




