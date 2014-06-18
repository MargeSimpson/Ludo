/// <reference path="vendor/dejavu.js" />
var GameField = dejavu.Class.declare({
    $name: 'GameField',
    $extends: GameObject,
    __width: null,
    __height: null,
    __path: null,
    __minions: null,
    __towers: null,

    initialize: function (x, y, width, height, path) {
        this.$super(x, y);
        this.setWidth(__width);
        this.setHeight(__height);
        this.setPath(path);
        this.setMinions([]);
        this.setTowers([]);
    },

    setWidth: function (width) {
        this.__width = width;

        return this;
    },

    getWidth: function () {
        return this.__width;
    },

    setHeight: function (hegiht) {
        this.__height = hegiht;

        return this;
    },

    getHeight: function () {
        return this.__height;
    },

    setPath: function (path) {
        this.__path = path;

        return this;
    },

    getPath: function () {
        this.__path = path;
    },

    setMinions: function (minions) {
        this.__minions = minions;

        return this;
    },

    getMinions: function () {
        return this.__minions;
    },

    setTowers: function (towers) {
        this.__towers;

        return this;
    },

    getTowers: function () {
        return this.__towers;
    },

    addTower: function (tower) {
        var towers = this.getTowers();

        if (this.__isTowerOnAnotherTower(tower) ||
           !this.__isTowerOnPath(tower)) {
            throw {
                name: 'InvalidTowerPosition',
                message: 'Tower cannot be set at position (' + tower.getX() + ', ' + tower.getY() + ')',
            };
        }

        towers.push(tower);
    },

    __isTowerOnAnotherTower: function (tower) {
        var towers = this.getTowers();

        for (var i = 0, length = towers.length; i < length; i++) {
            var currentTower = towers[i];

            if (tower.getX() == currentTower.getX() && tower.getY() == currentTower.getY()) {
                return true;
            }
        }

        return false;
    },

    __isTowerOnPath: function (tower) {
        var path = this.getPath();

        for (var i = 0, lenght = path.lenght; i < length; i++) {
            var pathTile = path[i];

            if (tower.getX() == pathTile.x && tower.getY() == pathTile.y) {
                return true;
            }
        }

        return false;
    },


});