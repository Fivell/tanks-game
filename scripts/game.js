var Game = function (config) {

    window.canvasContext = document.getElementById("myCanvas").getContext("2d");
    window.app = {gameObjects: {}};
    window.app.gameObjects = [
        new Tank({})
    ];

    // var renderScene = function () {
    //     requestAnimationFrame(renderScene);
    //
    //     // clear canvas
    //     window.canvasContext.clearRect(0, 0, window.canvasContext.canvas.width, window.canvasContext.canvas.height);
    //
    //     window.app.gameObjects.forEach(function (item) {
    //         item.render();
    //     });
    // };

    this.run = function () {
        // renderScene();

        setInterval(function () {

            console.log(window.app.gameObjects.length);

            // clear canvas
            window.canvasContext.clearRect(0, 0, window.canvasContext.canvas.width, window.canvasContext.canvas.height);

            window.app.gameObjects.forEach(function (item) {
                item.render();
            });
        }, 1000 / 60);

        setInterval(function () {
            var gameObjects = window.app.gameObjects.filter(function (item) {
                return !item.isOutOfRange();
            });
            window.app.gameObjects = gameObjects;
        }, 1000);
    };
};




