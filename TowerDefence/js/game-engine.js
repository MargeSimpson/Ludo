/// <reference path="vendor/raphael-2.1.2.js" />
/// <reference path="vendor/kinetic-5.1.0.js" />
/// <reference path="vendor/dejavu.js" />

var GameEngine = (function () {
    'use strict';
    var self;

    var GameEngine = dejavu.Class.declare({
        $name: 'GameEngine',
        $constants: {
            INITIAL_MONEY: 1000,
        },

        __stage: null,
        __money: null,
        __path: Object.freeze([{ x: 16, y: 0 },
                { x: 16, y: 3 },
                { x: 8, y: 3 },
                { x: 8, y: 0 },
                { x: 5, y: 0 },
                { x: 5, y: 2 },
                { x: 6, y: 2 },
                { x: 6, y: 4 },
                { x: 5, y: 4 },
                { x: 5, y: 8 },
                { x: 7, y: 8 },
                { x: 7, y: 11 },
                { x: 16, y: 11 },
                { x: 16, y: 6 },
                { x: 11, y: 6 },
                { x: 11, y: 15 },
                { x: 14, y: 15 },
                { x: 14, y: 18 },
                { x: 7, y: 18 },
                { x: 7, y: 19 }]),

        __initialize: function () {
            self = this;
            self.__stage = new Kinetic.Stage({
                width: 640,
                height: 640,
                container: 'game-field'
            });

            self.__money = self.$static.INITIAL_MONEY,

            self.__intializeMenu();
        },

        run: function () {
            self.__renderFrame();
        },

        getMoney: function () {
            return self.__money;
        },

        __renderFrame: function () {
            var layer = new Kinetic.Layer();

            self.__stage.add(layer);
        },

        __intializeMenu: function () {
            var $gameMenu = $('#game-menu');

            $gameMenu.on('click', '.tower', function () {
                var $clickedTower = $(this).find('div')
                var towerType = $clickedTower.attr('data-tower-type');

                var Tower = null;
                var money = self.getMoney();

                switch (towerType) {
                    case 'arrow':
                        if (money >= ArrowTower.$static.PRICE) {
                            Tower = ArrowTower;
                        }
                        break;
                    case 'cannon':
                        break;
                        if (money >= CannonTower.$static.PRICE) {
                            Tower = CannonTower;
                        }
                    case 'flame':
                        if (money >= FlameTower.$static.PRICE) {
                            Tower = FlameTower;
                        }
                        break;
                }

                if (Tower) {
                    self.setUpNewTower(Tower);
                } else {
                    $('#not-enough-money').dialog();
                }

            });
        },

        setUpNewTower: function (Tower) {
            var tower = new Tower();
            console.log('This should setup new ' + tower.$name + ' on the field');
            //Should set up new tower on the field somehow
        },

        $statics: {
            __instance: null,

            getInstance: function () {
                if (this.$static.__instance == null) {
                    this.$static.__instance = new GameEngine();
                }

                return this.$static.__instance;
            },
        }
    });

    return GameEngine;
})();