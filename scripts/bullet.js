var Bullet = function (config) {

    var context = config['context'],
        x = config['x'],
        y = config['y'],
        direction = config['direction'];

    this.moving = setInterval(function () {
        if (direction == 'up') {
            y -= 10;
        } else if (direction == 'down') {
            y += 10;
        } else if (direction == 'left') {
            x -= 10;
        } else {
            x += 10;
        }
    }, 50);

    // move the bullet


    var draw = function () {
        requestAnimationFrame(draw);

        context.beginPath();
        context.rect(x + 1, y + 1, 18, 18);
        context.fillStyle = '#000088';
        context.fill();
        context.closePath();
    };

    this.render = function () {
        draw();
    };

    this.getX = function () {
        return x;
    };

    this.getY = function () {
        return y;
    };

    this.isOutOfRange = function () {
        return (this.getX() < -18 || this.getY() < -18 || this.getX() > context.canvas.width || this.getY() > context.canvas.height);
    };

    this.allowShut = function (dir, gunCoords) {
        console.log(this.getX(), this.getY(), gunCoords.x, gunCoords.y, dir);
        if (dir == 'right') {
            return this.getX() - gunCoords.x > 18;
        }
        if (dir == 'left') {
            return this.getX() - gunCoords.x < 18;
        }
        if (dir == 'up') {
            return this.getY() - gunCoords.y < 18;
        }
        if (dir == 'down') {
            return this.getY() - gunCoords.y < 18;
        }
        return false;
    };
};