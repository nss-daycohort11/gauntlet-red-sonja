<<<<<<< HEAD
AvailableEnemies = {
  randomEnemy: function() {
    var enemies = Object.keys(this).filter((k) => k !== "randomEnemy");
    var enemyInstance = enemies[Math.round(Math.random() * (enemies.length - 1))];
    return new window[enemyInstance]();
  }
=======

var AvailableEnemies = {};



var Monster = function() {
  // this.species = null;
  // this.class = null;
  // this.weapon = null;
  

  // this.MonsterName = name;
  // this.health = Math.floor(Math.random() * 40 + 50);

  this.limbs = ["head", "neck", "arm", "leg", "torso"];
  this.skinColor = "gray";
  this.skinColors = [this.skinColor];
  this.strength = 90;
  this.intelligence = 90;

  this.toString = function() {
    var output = [this.MonsterName,
      ": a ",
      this.skinColor,
      " skinned ",
      this.species,
      " ",
      this.class,
      " with ",
      this.health,
      " health. ",
      (this.class.magical) ? "Able to cast " : " Wielding a ",
      this.weapon.toString(),
      "!"
    ].join("");
    return output;
  };
  // Monster.prototype.toString = function() {
  //   return this.MonsterName;
>>>>>>> b755da59f25500e80e25c84236e3b1f77067d69c
};

var Orc = function() {
  this.species = "Orc";
  this.allowedClasses = ["Warrior", "Berserker", "Shaman", "Assassin"];
  this.health += 30;
  this.intelligence -= 30;
};
Orc.prototype = new Monster();
AvailableEnemies.Orc = new Orc();
<<<<<<< HEAD
=======



var Queen = function() {
  this.MonsterName = "Queen Gedren";
  this.allowedClasses = ["Valkyrie", "Thief", "Ninja", "Assassin"];
  this.intelligence = this.intelligence + 5;
  this.generateClass = function() {
    // Get a random index from the allowed classes array
    var random = Math.round(Math.random() * (this.allowedClasses.length - 1));

    // Get the string at the index
    var randomClass = this.allowedClasses[random];

    // Composes the corresponding player class into the player object
    this.class = new window[randomClass]();
    return this.class;
  }
};
Queen.prototype = new Monster();
AvailableEnemies.Queen = new Queen();


var Tuzun = function() {
  this.MonsterName = "Tuzun Thune";
  this.allowedClasses = ["Monk", "Wizard", "Sorcerer"];
  this.intelligence = this.intelligence + 10;
  this.strength = this.strength - 10;
  this.generateClass = function() {
    // Get a random index from the allowed classes array
    var random = Math.round(Math.random() * (this.allowedClasses.length - 1));

    // Get the string at the index
    var randomClass = this.allowedClasses[random];

    // Composes the corresponding player class into the player object
    this.class = new window[randomClass]();
    return this.class;
  }
};
Tuzun.prototype = new Monster();
AvailableEnemies.Tuzun = new Tuzun();


var Andar = function() {
  this.MonsterName = "Andar Bezfarda";
  this.allowedClasses = ["Conjurer"];
  this.intelligence = this.intelligence + 20;
  this.strength = this.strength + 20;
  this.generateClass = function() {
    // Get a random index from the allowed classes array
    var random = Math.round(Math.random() * (this.allowedClasses.length - 1));

    // Get the string at the index
    var randomClass = this.allowedClasses[random];

    // Composes the corresponding player class into the player object
    this.class = new window[randomClass]();
    return this.class;
  }
};
Andar.prototype = new Monster();
AvailableEnemies.Andar = new Andar();







>>>>>>> b755da59f25500e80e25c84236e3b1f77067d69c


var Sith = function() {
  this.species = "Sith";
  this.skinColors.push("red", "blue", "golden", "thorny");
  this.allowedClasses = ["Lord"];
  this.health += 60;
};
Sith.prototype = new Monster();
AvailableEnemies.Sith = new Sith();


var Kobold = function() {
  this.species = "Kobold";
  this.health -= 15;
  this.allowedClasses = ["Warrior", "Assassin"];
};
Kobold.prototype = new Monster();
AvailableEnemies.Kobold = new Kobold();


var Goblin = function() {
  this.species = "Goblin";
  this.health -= 20;
  this.skinColors.push("green", "mottled gray");
  this.allowedClasses = ["Fighter", "Assassin", "Conjurer"];
  this.intelligence -= 50;
};
Goblin.prototype = new Monster();
AvailableEnemies.Goblin = new Goblin();


var Skeleton = function() {
  this.species = "Skeleton";
  this.health += 10;
  this.skinColors = [];
  this.allowedClasses = ["Fighter"];
};
Skeleton.prototype = new Monster();
AvailableEnemies.Skeleton = new Skeleton();


var Ghoul = function() {
  this.species = "Ghoul";
  this.health += 10;
  this.skinColors.push("tattoo", "sickly white");
  this.allowedClasses = ["Assassin", "Shaman"];
  this.intelligence -= 50;
};
Ghoul.prototype = new Monster();
AvailableEnemies.Ghoul = new Ghoul();