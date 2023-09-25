var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Fighter = /** @class */ (function () {
    function Fighter(health, power, speed, magic, intelligence, energy) {
        this.health = health;
        this.power = power;
        this.speed = speed;
        this.magic = magic;
        this.intelligence = intelligence;
        this.energy = energy;
    }
    Fighter.prototype.train = function () {
        this.energy -= 10;
        this.power++;
        this.speed++;
        this.magic++;
        this.intelligence++;
    };
    Fighter.prototype.specialPower = function () {
        this.power++;
    };
    return Fighter;
}());
var Hero = /** @class */ (function (_super) {
    __extends(Hero, _super);
    function Hero(health, power, speed, magic, intelligence, energy) {
        return _super.call(this, health, power, speed, magic, intelligence, energy) || this;
    }
    Hero.prototype.train = function () {
        this.energy -= 10;
        this.power += 10;
        this.speed += 10;
        this.magic += 10;
        this.intelligence += 10;
    };
    Hero.prototype.specialPower = function () {
        this.energy = 0;
        this.power *= 2;
    };
    return Hero;
}(Fighter));
var Sage = /** @class */ (function (_super) {
    __extends(Sage, _super);
    function Sage(health, power, speed, magic, intelligence, energy) {
        return _super.call(this, health, power, speed, magic, intelligence, energy) || this;
    }
    Sage.prototype.train = function () {
        this.energy -= 5;
        this.power += 5;
        this.speed += 5;
        this.magic += 10;
        this.intelligence += 10;
    };
    Sage.prototype.specialPower = function () {
        this.energy = 0;
        this.magic *= 2;
    };
    return Sage;
}(Fighter));
var Barbarian = /** @class */ (function (_super) {
    __extends(Barbarian, _super);
    function Barbarian(health, power, speed, magic, intelligence, energy) {
        return _super.call(this, health, power, speed, magic, intelligence, energy) || this;
    }
    Barbarian.prototype.train = function () {
        this.energy -= 5;
        this.power += 10;
        this.speed += 10;
        this.magic += 5;
        this.intelligence += 5;
    };
    Barbarian.prototype.specialPower = function () {
        this.energy = 0;
        this.health *= 2;
    };
    return Barbarian;
}(Fighter));
var DemonLord = /** @class */ (function (_super) {
    __extends(DemonLord, _super);
    function DemonLord(health, power, speed, magic, intelligence, energy) {
        return _super.call(this, health, power, speed, magic, intelligence, energy) || this;
    }
    DemonLord.prototype.train = function () {
        this.energy -= 10;
        this.power += 15;
        this.speed += 15;
        this.magic += 15;
        this.intelligence += 15;
    };
    DemonLord.prototype.specialPower = function () {
        this.energy = 0;
        this.power *= 2;
        this.health *= 2;
    };
    return DemonLord;
}(Fighter));
var General = /** @class */ (function (_super) {
    __extends(General, _super);
    function General(health, power, speed, magic, intelligence, energy) {
        return _super.call(this, health, power, speed, magic, intelligence, energy) || this;
    }
    General.prototype.train = function () {
        this.energy -= 5;
        this.power += 5;
        this.speed += 5;
        this.magic += 5;
        this.intelligence += 5;
    };
    General.prototype.specialPower = function () {
        this.energy = 0;
        this.power++;
        this.health++;
        this.speed++;
        this.magic++;
        this.intelligence++;
    };
    return General;
}(Fighter));
var Soldier = /** @class */ (function (_super) {
    __extends(Soldier, _super);
    function Soldier(health, power, speed, magic, intelligence, energy) {
        return _super.call(this, health, power, speed, magic, intelligence, energy) || this;
    }
    Soldier.prototype.train = function () {
        this.energy -= 2;
        this.power += 2;
        this.speed += 2;
        this.magic += 2;
        this.intelligence += 2;
    };
    Soldier.prototype.specialPower = function () {
        this.energy = 0;
        this.intelligence += 20;
    };
    return Soldier;
}(Fighter));
var hero = new Hero(1000, 10, 10, 10, 10, 7);
var sage = new Sage(500, 5, 5, 10, 10, 3);
var barb = new Barbarian(100, 10, 5, 5, 5, 3);
var demon = new DemonLord(2500, 15, 15, 15, 25, 9);
var general = new General(1800, 8, 8, 8, 18, 4);
var soldier = new Soldier(1300, 3, 3, 3, 13, 1);
while (true) {
    if (hero.energy >= 10 && hero.health <= hero.health / 2) {
        console.log("Hero Special Power");
        hero.specialPower();
    }
    else if (sage.energy >= 5 && sage.health <= sage.health / 2) {
        console.log("Sage Special Power");
        sage.specialPower();
    }
    else if (barb.energy >= 5 && barb.health <= barb.health / 2) {
        console.log("Barbarian Special Power");
        barb.specialPower();
    }
    else if (demon.energy >= 10 && demon.health <= 100) {
        console.log("The Demon Lord Special Power");
        demon.specialPower();
    }
    else if (general.energy >= 5 && general.health <= 300) {
        console.log("The General Specia Power");
        general.specialPower();
    }
    else if (soldier.energy >= 2 && soldier.health <= 10) {
        console.log("The Soldier Special Power");
        soldier.specialPower();
    }
    else if (hero.energy >= 10) {
        console.log("Hero is training");
        hero.train();
    }
    else if (sage.energy >= 5) {
        console.log("Sage is training");
        sage.train();
    }
    else if (barb.energy >= 5) {
        console.log("Barbarian is training");
        barb.train();
    }
    else if (demon.energy >= 10) {
        console.log("The demon lord is training");
        demon.train();
    }
    else if (general.energy >= 5) {
        console.log("The general is training");
        general.train();
    }
    else if (soldier.energy >= 2) {
        console.log("The soldier is training");
        soldier.train();
    }
    else {
        var hint = hero.intelligence + sage.intelligence + barb.intelligence;
        var dint = demon.intelligence + general.intelligence + soldier.intelligence;
        var hpower = hero.power + sage.magic + barb.power;
        var dpower = demon.power + general.power + soldier.power + demon.magic;
        if (hint > dint) {
            if (demon.health <= hpower) {
                demon.health = 0;
            }
            else {
                demon.health -= hpower;
            }
            if (general.health <= hpower / 2) {
                general.health = 0;
            }
            else {
                general.health -= hpower / 2;
            }
            if (soldier.health <= hpower / 3) {
                soldier.health = 0;
            }
            else {
                soldier.health -= hpower / 3;
            }
            if (demon.health == 0) {
                console.log("The Demon Lord is defeated");
                if (general.health == 0) {
                    console.log("The General has perished");
                    if (soldier.health == 0) {
                        console.log("The Soldier has vanished");
                        console.log("The demons win");
                        break;
                    }
                }
            }
            else {
                console.log("Next Turn");
                demon.energy++;
                general.energy++;
                soldier.energy++;
            }
        }
        else {
            if (hero.health <= hpower) {
                hero.health = 0;
            }
            else {
                hero.health -= hpower;
            }
            if (sage.health <= hpower / 2) {
                sage.health = 0;
            }
            else {
                sage.health -= hpower / 2;
            }
            if (barb.health <= hpower / 2) {
                barb.health = 0;
            }
            else {
                barb.health -= hpower / 3;
            }
            if (hero.health == 0) {
                console.log("The Hero is defeated");
                if (sage.health == 0) {
                    console.log("The Sage has perished");
                    if (barb.health == 0) {
                        console.log("The Barbarian has vanished");
                        console.log("The demons win");
                        break;
                    }
                }
            }
            else {
                console.log("Next Turn");
                hero.energy++;
                sage.energy++;
                barb.energy++;
            }
        }
    }
}
