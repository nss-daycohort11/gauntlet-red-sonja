/*
  Define the base object for any player of Gauntlet,
  whether a human player or a monster.
 */
var Player = function() {
  this.species = null;
  this.class = null;
  this.weapon = null;
  this.playerName = null;
  this.protection = 0;

  this.health = 0;
  this.limbs = ["head", "neck", "arm", "leg", "torso"];
  this.skinColor = "gray";
  this.skinColors = [this.skinColor];
  this.strength = 90;
  this.intelligence = 90;
};

Player.prototype.toString = function() {
  var output = [this.playerName,
    ": a ",
    this.skinColor,
    (this.skinColor) ? " skinned " : "",
    this.species,
    " ",
    this.class,
    " with ",
    this.health,
    " health. ",
    (this.class.magical) ? "I smell a mage" : " Wielding a " + this.weapon,
    "!"
  ].join("");
  return output;
};

Player.prototype.init = function(profession, weapon) {
  this.health = Math.floor(Math.random() * 200 + 50);

  if (!profession) {
    this.generateClass();
  } else {
    this.setClass(profession);
  }

  if (!weapon) {
    this.generateWeapon();
  } else {
    this.setWeapon(weapon);
  }

  this.setSkin();
};

Player.prototype.modifyHealth = function(bonus) {
  this.health += bonus;
  if (this.health < 20) this.health = 20;
};

Player.prototype.modifyStrength = function(bonus) {
  this.strength += bonus;
  if (this.strength < 10) this.strength = 10;
};

Player.prototype.modifyIntelligence = function(bonus) {
  this.intelligence += bonus;
  if (this.intelligence < 10) this.intelligence = 10;
};

Player.prototype.generateClass = function() {
  // Get a random index from the allowed classes array
  var random = Math.round(Math.random() * (this.allowedClasses.length - 1));

  // Get the string at the index
  var randomClass = this.allowedClasses[random];

  // Composes the corresponding player class into the player object
  this.setClass(new window[randomClass]());
};

Player.prototype.setClass = function(newClass) {
  this.class = newClass;
  this.modifyHealth(newClass.healthBonus);
  this.modifyStrength(newClass.strengthBonus);
  this.modifyIntelligence(newClass.intelligenceBonus);
};

Player.prototype.generateWeapon = function() {
  if (this.class && !this.class.magical) {
    var random = Math.round(Math.random() * (this.class.allowedWeapons.length - 1));
    var weapon = this.class.allowedWeapons[random];
    this.setWeapon(new window[weapon]());
  }
}

Player.prototype.setWeapon = function(newWeapon) {
  this.weapon = newWeapon;
};

Player.prototype.setSkin = function() {
  var randomSkin = Math.round(Math.random() * (this.skinColors.length-1));
  this.skinColor = this.skinColors[randomSkin];
};

