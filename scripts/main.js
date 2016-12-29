requirejs([
    "helper/util",
    "bullet",
    "tank",
    "game"
], function () {
    new Game({
    }).run();
});
