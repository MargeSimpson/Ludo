/// <reference path="vendor/raphael-2.1.2.js" />
/// <reference path="vendor/kinetic-5.1.0.js" />
/// <reference path="vendor/dejavu.js" />
'use strict';

var GameEngine = dejavu.Class.declare({
    $name: 'GameEngine',
    __stage: null,

    __initialize: function () {
        this.__stage = new Kinetic.Stage({
            width: 1000,
            height: 640,
            container: 'game-frame'
        });
    },

    run: function () {
        this.__renderFrame();
    },

    __renderFrame: function () {
        this.__renderMenus();
        // this.__renderField();
    },

    __renderMenus: function () {
        var layer = new Kinetic.Layer();
        var menuX = 640;
        var menuY = 0;
        var menuWidth = 360;
        var menuHeight = 640;

        var buttonWidth = 100;
        var buttonHeight = 100;

        var menuFrame = new Kinetic.Rect({
            x: menuX,
            y: menuY,
            width: menuWidth,
            height: menuHeight,
            fill: 'red',
        });

        var buttonMargin = (menuWidth - (buttonWidth * 2)) / 3;

        var createArcherTowerButton = new Kinetic.Rect({
            stroke: 'black',
            fill: 'green',
            x: menuX + buttonMargin,
            y: menuY + buttonMargin,
            width: buttonWidth,
            height: buttonHeight,
            draggable: true
        });

        createArcherTowerButton.addEventListener('click', function () {
            alert('This should select a archer tower to build');
        });

        var createCannonTowerButton = new Kinetic.Rect({
            stroke: 'black',
            fill: 'gray',
            x: createArcherTowerButton.x() + createArcherTowerButton.width() + buttonMargin,
            y: menuY + buttonMargin,
            width: buttonWidth,
            height: buttonHeight,
            draggable: true
        });

        createCannonTowerButton.addEventListener('click', function () {
            alert('This should select a cannon tower to build');
        });

        var createFlameTowerButton = new Kinetic.Rect({
            stroke: 'black',
            fill: 'orange',
            x: menuX + buttonMargin,
            y: createArcherTowerButton.y() + createArcherTowerButton.height() + buttonMargin,
            width: buttonWidth,
            height: buttonHeight,
            draggable: true
        });

        createFlameTowerButton.addEventListener('click', function () {
            alert('This should select a flame tower to build');
        });

        layer.add(menuFrame);
        layer.add(createArcherTowerButton);
        layer.add(createCannonTowerButton);
        layer.add(createFlameTowerButton)

        this.__stage.add(layer);
    },

    $statics: {
        __instance: null,

        getInstance: function () {
            if (this.$static.__instance == null) {
                this.$static.__instance = new GameEngine();
            }

            return this.$static.__instance;
        }
    }
}); 
