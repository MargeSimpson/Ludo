(function () {
    /// <reference path="enemy.js" />
    'use strict';

    var gameEngine = GameEngine.getInstance();
    gameEngine.run();

    var width = 640;
    //stage = new Kinetic.Stage({
    //    width: width,
    //    height: width,
    //    container: 'game-frame'
    //});

    var gameField = GameField.getInstance(0, 0, width, width, null);

    var initialPoint = gameField.getPath[0];
    if (initialPoint === undefined) {
        initialPoint = { x: 0, y: 0 }
    }
    var enemy = Enemy.getInstance(initialPoint.x*32, initialPoint.y*32);
    enemy.render(gameEngine.layer);
    //stage.add(layer);

})();