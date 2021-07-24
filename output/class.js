"use strict";
var Player = /** @class */ (function () {
    function Player(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    Player.prototype.play = function () {
        console.log(this.name + " from " + this.country + " is playing");
    };
    return Player;
}());
var mashrafee = new Player('Mashrafee', 39, 'Bangladesh');
var sakib = new Player('Sakib', 33, 'Bangladesh');
var players = [];
players.push(mashrafee);
