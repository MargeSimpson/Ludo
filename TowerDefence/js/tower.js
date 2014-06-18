/// <reference path="vendor/dejavu.js" />
'use strict';

var Tower = dejavu.AbstractClass.declare({
    $name: 'Tower',
    $extends: GameObject,
    __rangeRadius: null,
    __damagе: null,
    __price: null,
    __range: null,
    __fireRate: null,
    __affectedRadius: null,

    initialize: function (x, y, damage, price, range, fireRate, affectedRadius) {
        this.$super(x, y);
        this._setDamage(damage);
        this._setPrice(price);
        this._setRange(range);
        this._setFireRate(fireRate);
        this._setAffectedRadius(affectedRadius);
    },

    _setDamage: function (damage) {
        this.__damagе = damage;

        return this;
    },

    getDamage: function () {
        return this.__damagе
    },

    _setPrice: function (price) {
        this.__price = price;

        return this;
    },

    getPrice: function () {
        return this.__price;
    },

    _setRange: function (range) {
        this.__range = range;

        return this;
    },

    getRange: function () {
        return this.__range;
    },

    _setFireRate: function (fireRate) {
        this.__fireRate = fireRate;

        return this;
    },

    getFireRate: function () {
        return this.__fireRate;
    },

    _setAffectedRadius: function (affectedRadius) {
        this.__affectedRadius = affectedRadius;

        return this;
    },

    getAffectedRadius: function () {
        return this.__affectedRadius;
    },

    //$abstracts: {
    //    attack: function() {}
    //}
});