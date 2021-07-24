"use strict";
var Player = /** @class */ (function () {
    function Player(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    Player.prototype.play = function () {
        console.log("name: " + this.name + ", age: " + this.age + " & country: " + this.country);
    };
    return Player;
}());
var mashrafee = new Player('Mashrafee', 39, 'Bangladesh');
var sakib = new Player('Sakib', 33, 'Bangladesh');
var players = [];
players.push(mashrafee);
