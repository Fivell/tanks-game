var Wall = function (config) {

    var context = config['context'],
        x = config['x'] || 20,
        y = config['y'] || 20,
        direction = config['direction'] || 'down';

    var draw = function () {
        requestAnimationFrame(draw);

        if (direction == 'up') {
            y -= 1;
        } else if (direction == 'down') {
            y += 1;
        } else if (direction == 'left') {
            x -= 1;
        } else {
            x += 1;
        }

        context.beginPath();
        context.rect(x + 1, y + 1, 18, 18);
        context.fillStyle = '#000088';
        context.fill();
        context.closePath();
    };

    this.render = function () {
        draw();
    };
};