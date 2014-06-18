/// <reference path="minion.js" />
/// <reference path="vendor/dejavu.js" />
'use strict';

var Ninja = dejavu.Class.declare({
    $name: 'Ninja',
    $extends: Minion,
    $constants: {
        SPEED: 5,
        HEALTH_POINTS: 100,
        REWARD: 300,
        SIZE: 32
    },

    initialize: function (x, y) {
        this.$super(x, y, this.$static.SPEED, this.$static.HEALTH_POINTS, this.$static.REWARD);
    },

    render: function (layer) {
        circle = new Kinetic.Circle({
            x: this.getX,
            y: this.getY,
            radius: 0 | (this.$static.SIZE / 2),
            fill: rgb(130, 181, 23),
            stroke: 'none'
        });

        layer.add(circle);
    }
});