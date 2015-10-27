var AvailableClasses = {};

/*
  One object to store a single instance of each class. When
  assigning a class to a combatant, use the keys on this object
  instead of creating new instances every time.
 */
var AvailableClasses = {};

/*
  Base function for a player, or enemy, class (profession)
 */
var PlayerClass = function() {
  this.name = "Apprentice";
  this.healthBonus = 0;
  this.strengthBonus = 0;
  this.intelligenceBonus = 0;
  this.magical = false;
};

<<<<<<< HEAD
};

=======
>>>>>>> b755da59f25500e80e25c84236e3b1f77067d69c
PlayerClass.prototype.toString = function() {
  return this.name;
};
PlayerClass.prototype=new Player();


/*
    FIGHTER CLASSES
      - Warrior
      - Valkyrie
      - Berserker
      - Monk
 */
var Fighter = function() {
  this.name = "Fighter";
  this.healthBonus += 20;
  this.strengthBonus = 10;
  this.allowedWeapons = ["LongSword", "ShortSword", "BroadSword", "Dagger"];
};
Fighter.prototype = new PlayerClass();
AvailableClasses.Fighter = new Fighter();


var Warrior = function() {
  this.name = "Warrior";
<<<<<<< HEAD
  this.healthBonus += 50;
  this.strengthBonus += 90;
  this.allowedWeapons.push("Halberd");
=======
  this.healthBonus = this.healthBonus + 25;
  this.strengthBonus = this.strengthBonus + 30;
  this.allowedWeapons = ["Dagger", "BroadSword", "WarAxe"]
>>>>>>> b755da59f25500e80e25c84236e3b1f77067d69c
};
Warrior.prototype = new Fighter();
AvailableClasses.Warrior = new Warrior();


var Valkyrie = function() {
  this.name = "Valkyrie";
<<<<<<< HEAD
  this.healthBonus += 20;
  this.allowedWeapons = ["LongSword", "ShortSword", "BroadSword", "Dagger", "BallChain", "LongBow"];
  this.strengthBonus += 70;
=======
  this.healthBonus = this.healthBonus + 20;
  this.strengthBonus = this.strengthBonus + 10;
  this.allowedWeapons = ["Dagger", "BroadSword", "WarAxe"]
>>>>>>> b755da59f25500e80e25c84236e3b1f77067d69c
};
Valkyrie.prototype = new Fighter();
AvailableClasses.Valkyrie = new Valkyrie();


var Berserker = function() {
  this.name = "Berserker";
<<<<<<< HEAD
  this.allowedWeapons = ["LongSword", "ShortSword", "BroadSword", "Dagger", "Mace", "WarAxe"];
  this.strengthBonus += 120;
=======
  this.healthBonus = this.healthBonus + 35;
  this.strengthBonus = this.strengthBonus + 20;
  this.allowedWeapons = ["Dagger", "BroadSword", "WarAxe"]
>>>>>>> b755da59f25500e80e25c84236e3b1f77067d69c
};
Berserker.prototype = new Fighter();
AvailableClasses.Berserker = new Berserker();


var Monk = function() {
  this.name = "Monk";
<<<<<<< HEAD
  this.healthBonus += 25;
  this.allowedWeapons = ["ShortBow", "Staff", "Nunchaku"];
  this.strengthBonus = this.strengthBonus + 100;
=======
  this.healthBonus = this.healthBonus + 10;
  this.strengthBonus = this.strengthBonus + 40;
  this.allowedWeapons = ["Gloves", "Staff"]
>>>>>>> b755da59f25500e80e25c84236e3b1f77067d69c
};
Monk.prototype = new Fighter();
AvailableClasses.Monk = new Monk();


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
<<<<<<< HEAD
  this.healthBonus -= 60;
  this.strengthBonus -= 40;
  this.intelligenceBonus += 150;
=======
  this.healthBonus = this.healthBonus - 10;
  this.strengthBonus = this.strengthBonus - 20;
  this.intelligenceBonus = this.intelligenceBonus + 20;
  this.allowedWeapons = ["Staff", "CrystalBall", "Wand", "ShrunkenHead"]
>>>>>>> b755da59f25500e80e25c84236e3b1f77067d69c
};
Mage.prototype = new PlayerClass();



var Shaman = function() {
  this.name = "Shaman";
  this.healthBonus += 5;
  this.strengthBonus -= 10;
  this.intelligenceBonus += 80;
};
Shaman.prototype = new Mage();
AvailableClasses.Shaman = new Shaman();


var Wizard = function() {
  this.name = "Wizard";
  this.healthBonus -= 15;
  this.strengthBonus -= 25;
  this.intelligenceBonus += 100;
};
Wizard.prototype = new Mage();
AvailableClasses.Wizard = new Wizard();


var Conjurer = function() {
  this.name = "Conjurer";
  this.strengthBonus -= 10;
  this.intelligenceBonus += 90;
};
Conjurer.prototype = new Mage();
AvailableClasses.Conjurer = new Conjurer();


var Sorcerer = function() {
  this.name = "Sorcerer";
  this.healthBonus -= 5;
  this.strengthBonus -= 20;
  this.intelligenceBonus += 30;
};
Sorcerer.prototype = new Mage();
AvailableClasses.Sorcerer = new Sorcerer();


/*
    STEALTH CLASSES
      - Thief
      - Ninja
      - Assassin
 */
<<<<<<< HEAD
var Stealth = function() {
  this.name = "Stealth";
  this.healthBonus -= 5;
  this.strengthBonus -= 10;
  this.intelligenceBonus += 20;
};
Stealth.prototype = new PlayerClass();

var Thief = function() {
  this.name = "Thief";
  this.healthBonus -= 5;
  this.strengthBonus -= 5;
  this.intelligenceBonus += 50;
  this.allowedWeapons = ["Dagger", "Dart", "Dirk", "ShortSword"];
};
Thief.prototype = new Stealth();
AvailableClasses.Thief = new Thief();
=======

var Stealth = function() {
  this.name = "Stealth";
  this.strengthBonus = + 5;
  this.intelligenceBonus = + 5;
  this.magical = false;
  this.stealth = + 20;
  this.allowedWeapons = ["ThrowingStars", "Crossbow", "PoisonDart", "Dagger"]
};
  Stealth.prototype = new PlayerClass ();

var Thief = function() {
  this.name = "Thief";
  this.magical = false;
  this.stealth = + 10;
};
  Thief.prototype = new Stealth ();
  AvailableClasses.Thief = new Thief();
>>>>>>> b755da59f25500e80e25c84236e3b1f77067d69c


var Ninja = function() {
  this.name = "Ninja";
<<<<<<< HEAD
  this.healthBonus += 5;
  this.strengthBonus += 15;
  this.intelligenceBonus += 40;
  this.allowedWeapons = ["Dagger", "Dart", "Dirk", "ShortSword", "Rapier"];
};
Ninja.prototype = new Stealth();
AvailableClasses.Ninja = new Ninja();


var Assassin = function() {
  this.name = "Assassin";
  this.healthBonus -= 10;
  this.strengthBonus -= 5;
  this.intelligenceBonus += 100;
  this.allowedWeapons = ["Dagger", "Dart", "ShortSword", "PoisonBlowgun"];
};
Assassin.prototype = new Stealth();
AvailableClasses.Assassin = new Assassin();
=======
  this.strengthBonus = + 10;
  this.healthBonus = this.healthBonus + 5;
  this.magical = false;
  this.stealth = + 15;
};
  Ninja.prototype = new Stealth ();
  AvailableClasses.Ninja = new Ninja();

var Assassin = function() {
  this.name = "Assassin";
  this.strengthBonus = + 5;
  this.healthBonus = this.healthBonus + 5;
  this.magical = false;
  this.stealth = + 20;
};
  Assassin.prototype = new Stealth ();
  AvailableClasses.Assassin = new Assassin();
>>>>>>> b755da59f25500e80e25c84236e3b1f77067d69c


<<<<<<< HEAD
var Lord = function() {
  this.name = "Lord";
  this.intelligenceBonus += 20;
  this.allowedWeapons = ["LightSaber"];
};
Lord.prototype = new PlayerClass();
AvailableClasses.Lord = new Lord();
=======
  var Unicorn = function() {
  this.name = "Unicorn";
  this.strengthBonus = + 100;
  this.healthBonus = this.healthBonus + 100;
  this.magical = true;
  this.stealth = + 100;
  this.allowedWeapons = ["Horn"]
};
  Unicorn.prototype = new PlayerClass();
  AvailableClasses.Unicorn = new Unicorn();



>>>>>>> b755da59f25500e80e25c84236e3b1f77067d69c
