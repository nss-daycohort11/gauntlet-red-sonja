var Weapon = function() {
  this.name = "bare hands";
  this.damage = 1;
  this.hands = 2;
<<<<<<< HEAD
  this.ranged = false;
  this.poisoned = false;

};
Weapon.prototype.toString = function() {
  return this.name;
}

var Dart = function() {
  this.name = "dart";
  this.damage = 3;
  this.hands = 1;
  this.ranged = true;
};
Dart.prototype = new Weapon();
=======
  };

  Weapon.prototype.toString = function () {
    return this.name;
  }
>>>>>>> b755da59f25500e80e25c84236e3b1f77067d69c

var Dagger = function() {
  this.name = "Dagger";
  this.damage = 4;
  this.hands = 1;
};
Dagger.prototype = new Weapon();

<<<<<<< HEAD
var Dirk = function() {
  this.name = "dirk";
  this.damage = 5;
  this.hands = 1;
=======
var BroadSword = function() {
  this.name = "BroadSword";
  this.damage = 14;
  this.hands = 2;
>>>>>>> b755da59f25500e80e25c84236e3b1f77067d69c
};
Dirk.prototype = new Weapon();

<<<<<<< HEAD
var ShortSword = function() {
  this.name = "short sword";
  this.damage = 6;
  this.hands = 1;
=======
var WarAxe = function() {
  this.name = "WarAxe";
  this.damage = 18;
  this.hands = 2;
>>>>>>> b755da59f25500e80e25c84236e3b1f77067d69c
};
ShortSword.prototype = new Weapon();

<<<<<<< HEAD
var Mace = function() {
  this.name = "mace";
  this.damage = 6;
  this.hands = 1;
=======
var Gloves = function() {
  this.name = "Gloves";
  this.damage = 2;
  this.hands = 2;
>>>>>>> b755da59f25500e80e25c84236e3b1f77067d69c
};
Mace.prototype = new Weapon();

<<<<<<< HEAD
var BallChain = function() {
  this.name = "ball and chain";
  this.damage = 8;
  this.hands = 1;
=======
var Staff = function() {
  this.name = "Staff";
  this.damage = 4;
  this.intelligenceBonus = 0;
  this.hands = 2;
>>>>>>> b755da59f25500e80e25c84236e3b1f77067d69c
};
BallChain.prototype = new Weapon();

<<<<<<< HEAD
var LongSword = function() {
  this.name = "long sword";
  this.damage = 8;
=======
var CrystalBall = function() {
  this.name = "CrystalBall";
  this.damage = 1;
  this.intelligenceBonus = 15;
>>>>>>> b755da59f25500e80e25c84236e3b1f77067d69c
  this.hands = 2;
};
LongSword.prototype = new Weapon();

<<<<<<< HEAD
var Rapier = function() {
  this.name = "rapier";
  this.damage = 8;
=======
var Wand = function() {
  this.name = "Wand";
  this.damage = 3;
  this.intelligenceBonus = 5;
>>>>>>> b755da59f25500e80e25c84236e3b1f77067d69c
  this.hands = 1;
};
Rapier.prototype = new Weapon();

<<<<<<< HEAD
var PoisonBlowgun = function() {
  this.name = "poison blowgun";
  this.damage = 4;
=======
var ShrunkenHead = function() {
  this.name = "ShrunkenHead";
  this.damage = 2;
  this.intelligenceBonus = 10;
>>>>>>> b755da59f25500e80e25c84236e3b1f77067d69c
  this.hands = 1;
  this.poisoned = true;
  this.ranged = true;
};
PoisonBlowgun.prototype = new Weapon();

<<<<<<< HEAD
var BroadSword = function() {
  this.name = "broad sword";
  this.damage = 8;
  this.hands = 2;
};
BroadSword.prototype = new Weapon();

var WarAxe = function() {
  this.name = "war axe";
  this.damage = 10;
  this.hands = 2;
};
WarAxe.prototype = new Weapon();

var Halberd = function() {
  this.name = "halberd";
  this.damage = 12;
=======
var ThrowingStars = function() {
  this.name = "ThrowingStars";
  this.damage = 6;
  this.stealthBonus = 15;
>>>>>>> b755da59f25500e80e25c84236e3b1f77067d69c
  this.hands = 2;
};
Halberd.prototype = new Weapon();

<<<<<<< HEAD
var LongBow = function() {
  this.name = "long bow";
=======
var CrossBow = function() {
  this.name = "CrossBow";
>>>>>>> b755da59f25500e80e25c84236e3b1f77067d69c
  this.damage = 8;
  this.hands = 2;
  this.ranged = true;
};
LongBow.prototype = new Weapon();

<<<<<<< HEAD
var Staff = function() {
  this.name = "staff";
  this.damage = 6;
=======
var PoisonDart = function() {
  this.name = "PoisonDart";
  this.damage = 10;
  this.stealthBonus = 5;
>>>>>>> b755da59f25500e80e25c84236e3b1f77067d69c
  this.hands = 2;
};
Staff.prototype = new Weapon();

var ShortBow = function() {
  this.name = "short bow";
  this.damage = 6;
  this.hands = 2;
  this.ranged = true;
};
ShortBow.prototype = new Weapon();

var Nunchaku = function() {
  this.name = "nunchaku";
  this.damage = 6;
  this.hands = 1;
};
Nunchaku.prototype = new Weapon();

var LightSaber = function() {
  this.name = "light saber";
  this.damage = 16;
  this.hands = 1;
};
LightSaber.prototype = new Weapon();
