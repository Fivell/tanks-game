var Game = function (config) {

    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
    var tank = new Tank({
        context: context
    });

    var draw = function () {
        // clear canvas
        context.clearRect(0, 0, canvas.width, canvas.height);

        // render tank
        tank.render();
    };

    this.run = function () {

        setInterval(function () {
            draw();
        }, 1000 / 50);

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




