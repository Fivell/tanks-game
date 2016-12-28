var Tank = function (config) {

    var context = config['context'],
        blockSize = 60,
        x = 0,
        y = 0,
        step = 0.2,
        direction = 'down';

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

    this.shut = function () {

        var _x = 0,
            _y = 0;

        if (direction == 'up') {
            _x = blockSize * x + 20;
            _y = blockSize * y - 20;
        } else if (direction == 'down') {
            _x = blockSize * x + 20;
            _y = blockSize * y + blockSize;
        } else if (direction == 'left') {
            _x = blockSize * x - 20;
            _y = blockSize * y + 20;
        } else {
            _x = blockSize * x + blockSize;
            _y = blockSize * y + 20;
        }

        var bullet = new Bullet({
            context: context,
            x: _x,
            y: _y,
            direction: direction
        });

        setInterval(function () {
            bullet.render();
        }, 1000 / 100);
    };

    this.render = function () {
        context.beginPath();
        if (direction == 'up') {
            context.rect(blockSize * x, blockSize * y + 10, blockSize, blockSize - 10);
        } else if (direction == 'down') {
            context.rect(blockSize * x, blockSize * y, blockSize, blockSize - 10);
        } else if (direction == 'left') {
            context.rect(blockSize * x + 10, blockSize * y, blockSize - 10, blockSize);
        } else {
            context.rect(blockSize * x, blockSize * y, blockSize - 10, blockSize);
        }
        context.fillStyle = '#008800';
        context.fill();
        context.closePath();

        // draw gun
        context.beginPath();
        if (direction == 'up') {
            context.rect(blockSize * x + 20, blockSize * y, 20, 10);
        } else if (direction == 'down') {
            context.rect(blockSize * x + 20, (blockSize * y + blockSize) - 10, 20, 10);
        } else if (direction == 'left') {
            context.rect(blockSize * x, blockSize * y + 20, 10, 20);
        } else {
            context.rect((blockSize * x + blockSize) - 10, blockSize * y + 20, 10, 20);
        }
        context.fillStyle = '#FF0000';
        context.fill();
        context.closePath();
    };
};