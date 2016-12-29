var Tank = function (config) {

    var self = this;

    document.addEventListener("keydown", function (e) {
        if (e.keyCode == 39) {
            self.moveRight();
        }
        else if (e.keyCode == 37) {
            self.moveLeft();
        }
        else if (e.keyCode == 38) {
            self.moveUp();
        }
        else if (e.keyCode == 40) {
            self.moveDown();
        } else if (e.keyCode == 32) {
            self.shut();
        }
    });

    // var bullets = [];

    var context = window.canvasContext,
        blockSize = 20,
        x = config['x'] || 6,
        y = config['y'] || 6,
        step = 0.5,
        direction = config['direction'] || 'right';

    this.moveRight = function () {
        if (direction == 'right') {
            x += step;
        } else {
            direction = 'right';
        }
    };

    this.moveLeft = function () {
        if (direction == 'left') {
            x -= step;
        } else {
            direction = 'left';
        }
    };

    this.moveUp = function () {
        if (direction == 'up') {
            y -= step;
        } else {
            direction = 'up';
        }
    };

    this.moveDown = function () {
        if (direction == 'down') {
            y += step;
        } else {
            direction = 'down';
        }
    };

    var isAllowShut = function () {

        // if (bullets.length == 0) {
        //     return true;
        // }
        //
        // var gunCoords = {
        //     x: 0,
        //     y: 0
        // };
        // if (direction == 'up') {
        //     gunCoords.x = blockSize * x + blockSize;
        //     gunCoords.y = blockSize * y - blockSize - blockSize / 2;
        // } else if (direction == 'down') {
        //     gunCoords.x = blockSize * x + blockSize;
        //     gunCoords.y = blockSize * y + 3 * blockSize + blockSize / 2;
        // } else if (direction == 'left') {
        //     gunCoords.x = blockSize * x - blockSize - blockSize / 2;
        //     gunCoords.y = blockSize * y + blockSize;
        // } else {
        //     gunCoords.x = blockSize * x + 3 * blockSize + blockSize / 2;
        //     gunCoords.y = blockSize * y + blockSize;
        // }
        //
        // if (bullets[bullets.length - 1].allowShut(direction, gunCoords)) { // if last bullet near the gun
        //     return true;
        // }
        // return false;
        return true;
    };

    this.shut = function () {

        if (isAllowShut()) {
            var _x = 0,
                _y = 0;

            if (direction == 'up') {
                _x = blockSize * x + blockSize;
                _y = blockSize * y - blockSize - blockSize / 2;
            } else if (direction == 'down') {
                _x = blockSize * x + blockSize;
                _y = blockSize * y + 3 * blockSize + blockSize / 2;
            } else if (direction == 'left') {
                _x = blockSize * x - blockSize - blockSize / 2;
                _y = blockSize * y + blockSize;
            } else {
                _x = blockSize * x + 3 * blockSize + blockSize / 2;
                _y = blockSize * y + blockSize;
            }

            // var bullet = new Bullet({
            //     context: context,
            //     x: _x,
            //     y: _y,
            //     direction: direction
            // });
            //
            // bullet.render();

            window.app.gameObjects.push(
                new Bullet({
                    context: context,
                    x: _x,
                    y: _y,
                    direction: direction
                })
            );

            // bullets.push(bullet);
        }
    };

    this.isOutOfRange = function () {
        return false;
    };

    this.render = function () {

        // // remove bullets to speed up the game
        // for (var i = 0; i < bullets.length; i++) {
        //     if (bullets[i].isOutOfRange()) {
        //         bullets.splice(i, 1);
        //     }
        // }

        if (direction == 'up') {
            // draw left wheel
            context.beginPath();
            context.rect(blockSize * x, blockSize * y, blockSize - 1, blockSize - 1);
            context.rect(blockSize * x, blockSize * y + blockSize, blockSize - 1, blockSize - 1);
            context.rect(blockSize * x, blockSize * y + 2 * blockSize, blockSize - 1, blockSize - 1);
            context.fillStyle = '#000000';
            context.fill();
            context.closePath();

            // draw body
            context.beginPath();
            context.rect(blockSize * x + blockSize, blockSize * y, blockSize, blockSize);
            context.rect(blockSize * x + blockSize, blockSize * y + blockSize, blockSize, blockSize);
            context.rect(blockSize * x + blockSize, blockSize * y + 2 * blockSize, blockSize, blockSize - 1);
            context.fillStyle = '#008800';
            context.fill();
            context.closePath();

            // draw right wheel
            context.beginPath();
            context.rect(blockSize * x + 2 * blockSize + 1, blockSize * y, blockSize - 1, blockSize - 1);
            context.rect(blockSize * x + 2 * blockSize + 1, blockSize * y + blockSize, blockSize - 1, blockSize - 1);
            context.rect(blockSize * x + 2 * blockSize + 1, blockSize * y + 2 * blockSize, blockSize - 1, blockSize - 1);
            context.fillStyle = '#000000';
            context.fill();
            context.closePath();
        } else if (direction == 'down') {
            // draw left wheel
            context.beginPath();
            context.rect(blockSize * x, blockSize * y, blockSize - 1, blockSize - 1);
            context.rect(blockSize * x, blockSize * y + blockSize, blockSize - 1, blockSize - 1);
            context.rect(blockSize * x, blockSize * y + 2 * blockSize, blockSize - 1, blockSize - 1);
            context.fillStyle = '#000000';
            context.fill();
            context.closePath();

            // draw body
            context.beginPath();
            context.rect(blockSize * x + blockSize, blockSize * y, blockSize, blockSize);
            context.rect(blockSize * x + blockSize, blockSize * y + blockSize, blockSize, blockSize);
            context.rect(blockSize * x + blockSize, blockSize * y + 2 * blockSize, blockSize, blockSize - 1);
            context.fillStyle = '#008800';
            context.fill();
            context.closePath();

            // draw right wheel
            context.beginPath();
            context.rect(blockSize * x + 2 * blockSize + 1, blockSize * y, blockSize - 1, blockSize - 1);
            context.rect(blockSize * x + 2 * blockSize + 1, blockSize * y + blockSize, blockSize - 1, blockSize - 1);
            context.rect(blockSize * x + 2 * blockSize + 1, blockSize * y + 2 * blockSize, blockSize - 1, blockSize - 1);
            context.fillStyle = '#000000';
            context.fill();
            context.closePath();
        } else if (direction == 'left') {
            // draw left wheel
            context.beginPath();
            context.rect(blockSize * x, blockSize * y, blockSize - 1, blockSize - 1);
            context.rect(blockSize * x + blockSize, blockSize * y, blockSize, blockSize - 1);
            context.rect(blockSize * x + blockSize * 2 + 1, blockSize * y, blockSize - 1, blockSize - 1);
            context.fillStyle = '#000000';
            context.fill();
            context.closePath();

            // draw body
            context.beginPath();
            context.rect(blockSize * x, blockSize * y + blockSize, blockSize, blockSize);
            context.rect(blockSize * x + blockSize, blockSize * y + blockSize, blockSize, blockSize);
            context.rect(blockSize * x + blockSize * 2, blockSize * y + blockSize, blockSize, blockSize);
            context.fillStyle = '#008800';
            context.fill();
            context.closePath();

            // draw right wheel
            context.beginPath();
            context.rect(blockSize * x, blockSize * y + 2 * blockSize + 1, blockSize - 1, blockSize - 1);
            context.rect(blockSize * x + blockSize, blockSize * y + 2 * blockSize + 1, blockSize, blockSize - 1);
            context.rect(blockSize * x + blockSize * 2 + 1, blockSize * y + 2 * blockSize + 1, blockSize - 1, blockSize - 1);
            context.fillStyle = '#000000';
            context.fill();
            context.closePath();
        } else {
            // draw left wheel
            context.beginPath();
            context.rect(blockSize * x, blockSize * y, blockSize - 1, blockSize - 1);
            context.rect(blockSize * x + blockSize, blockSize * y, blockSize, blockSize - 1);
            context.rect(blockSize * x + blockSize * 2 + 1, blockSize * y, blockSize - 1, blockSize - 1);
            context.fillStyle = '#000000';
            context.fill();
            context.closePath();

            // draw body
            context.beginPath();
            context.rect(blockSize * x, blockSize * y + blockSize, blockSize, blockSize);
            context.rect(blockSize * x + blockSize, blockSize * y + blockSize, blockSize, blockSize);
            context.rect(blockSize * x + blockSize * 2, blockSize * y + blockSize, blockSize, blockSize);
            context.fillStyle = '#008800';
            context.fill();
            context.closePath();

            // draw right wheel
            context.beginPath();
            context.rect(blockSize * x, blockSize * y + 2 * blockSize + 1, blockSize - 1, blockSize - 1);
            context.rect(blockSize * x + blockSize, blockSize * y + 2 * blockSize + 1, blockSize, blockSize - 1);
            context.rect(blockSize * x + blockSize * 2 + 1, blockSize * y + 2 * blockSize + 1, blockSize - 1, blockSize - 1);
            context.fillStyle = '#000000';
            context.fill();
            context.closePath();
        }

        // draw gun
        context.beginPath();
        if (direction == 'up') {
            context.rect(blockSize * x + blockSize, blockSize * y - blockSize / 2, blockSize, blockSize / 2);
        } else if (direction == 'down') {
            context.rect(blockSize * x + blockSize, blockSize * y + 3 * blockSize, blockSize, blockSize / 2);
        } else if (direction == 'left') {
            context.rect(blockSize * x - blockSize / 2, blockSize * y + blockSize, blockSize / 2, blockSize);
        } else {
            context.rect(blockSize * x + 3 * blockSize, blockSize * y + blockSize, blockSize / 2, blockSize);
        }
        context.fillStyle = '#FF0000';
        context.fill();
        context.closePath();
    };
};