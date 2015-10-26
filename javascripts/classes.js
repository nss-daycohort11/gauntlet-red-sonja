/*
  Base function for a player, or enemy, class (profession)
 */
var PlayerClass = function() {
  this.name = "Beggar";
  this.healthBonus = 0;
  this.strengthBonus = 0;
  this.intelligenceBonus = 0;
  this.magical = false;
  this.stealthy = false;

  this.toString = function() {
    return this.name;
  }
};

/*
    FIGHTER CLASSES
      - Warrior
      - Valkyrie
      - Berserker
      - Monk
 */
var Fighter = function() {
  this.healthBonus = 20;
  this.strengthBonus = 10;
};
Fighter.prototype = new PlayerClass();


var Warrior = function() {
  this.name = "Warrior";
  this.healthBonus = this.healthBonus + 25;
  this.strengthBonus = this.strengthBonus + 30;
};
Warrior.prototype = new Fighter();


var Valkyrie = function() {
  this.name = "Valkyrie";
  this.healthBonus = this.healthBonus + 20;
  this.strengthBonus = this.strengthBonus + 10;
};
Valkyrie.prototype = new Fighter();


var Berserker = function() {
  this.name = "Berserker";
  this.healthBonus = this.healthBonus + 35;
  this.strengthBonus = this.strengthBonus + 20;
};
Berserker.prototype = new Fighter();


var Monk = function() {
  this.name = "Monk";
  this.healthBonus = this.healthBonus + 10;
  this.strengthBonus = this.strengthBonus + 40;
};
Monk.prototype = new Fighter();


/*
    MAGICAL CLASSES
      - Shaman
      - Wizard
      - Conujurer
      - Sorcerer
 */
var Mage = function() {
  this.name = "Mage";
  this.magical = true;
  this.healthBonus = this.healthBonus - 10;
  this.strengthBonus = this.strengthBonus - 20;
  this.intelligenceBonus = this.intelligenceBonus + 20;
};
Mage.prototype = new PlayerClass();


var Shaman = function() {
  this.name = "Shaman";
  this.healthBonus = this.healthBonus + 5;
  this.strengthBonus = this.strengthBonus - 10;
  this.intelligenceBonus = this.intelligenceBonus + 20;
};
Shaman.prototype = new Mage();


var Wizard = function() {
  this.name = "Wizard";
  this.healthBonus = this.healthBonus - 15;
  this.strengthBonus = this.strengthBonus - 25;
  this.intelligenceBonus = this.intelligenceBonus + 40;
};
Wizard.prototype = new Mage();


var Conjurer = function() {
  this.name = "Conjurer";
  this.strengthBonus = this.strengthBonus - 10;
  this.intelligenceBonus = this.intelligenceBonus + 10;
};
Conjurer.prototype = new Mage();


var Sorcerer = function() {
  this.name = "Sorcerer";
  this.healthBonus = this.healthBonus - 5;
  this.strengthBonus = this.strengthBonus - 20;
  this.intelligenceBonus = this.intelligenceBonus + 30;
};
Sorcerer.prototype = new Mage();


/*
    STEALTH CLASSES
      - Thief
      - Ninja
      - Assassin
 */

 var Stealth = function () {
  this.name = "Stealth";
  this.stealthy = true;
  this.strengthBonus = this.strengthBonus + 5;
  this.intelligenceBonus = this.intelligenceBonus + 5;
  this.stealthBonus = this.stealthBonus + 20;
 };
Stealth.prototype = new PlayerClass();

var Thief = function () {
  this.name = "Thief";
  this.stealthBonus = this.stealthBonus + 10;
};
Thief.prototype = new Stealth();

var Ninja = function () {
  this.name = "Ninja";
  this.stealthBonus = this.stealthBonus + 15;
  this.strengthBonus = this.strengthBonus + 10;
  this.healthBonus = this.healthBonus + 5;
};
Ninja.prototype = new Stealth();

var Assassin = function () {
  this.name = "Assassin";
  this.stealthBonus = this.stealthBonus + 20;
  this.strengthBonus = this.strengthBonus + 5;
  this.healthBonus = this.healthBonus + 5;
};
Assassin.prototype = new Stealth();

/*
    UNICORN CLASS
*/

var Unicorn = function () {
  this.name = "Unicorn";
  this.stealthy = true;
  this.magical = true;
  this.strengthBonus = this.strengthBonus + 100;
  this.intelligenceBonus = this.intelligenceBonus + 100;
  this.stealthBonus = this.stealthBonus + 100;
  this.healthBonus = this.healthBonus + 100;
};
Unicorn.prototype = new PlayerClass();








