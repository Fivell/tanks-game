requirejs([
    "helper/util",
    "bullet",
    "wall",
    "tank",
    "game"
], function () {
    new Game({
    }).run();
});
