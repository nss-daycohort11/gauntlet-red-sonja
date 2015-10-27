$(document).ready(function() {

  // var chosenProfession = null;
  // var chosenWeapon = null;
  // var battleground = null;

  var newPlayer = new Player();
  var chooseClass = {
    "Warrior": Warrior,
    "Valkyrie": Valkyrie,
    "Berserker": Berserker,
    "Monk": Monk,
    "Shaman": Shaman,
    "Wizard": Wizard,
    "Conjurer": Conjurer,
    "Sorcerer": Sorcerer,
    "Thief": Thief,
    "Ninja": Ninja,
    "Assassin": Assassin,
    "Unicorn": Unicorn
  }
  console.log(chooseClass);

  var newWeapon = new Weapon();
  var chooseWeapon = {
    "Dagger": Dagger,
    "BroadSword": BroadSword,
    "WarAxe": WarAxe,
    "Gloves": Gloves,
    "Staff": Staff,
    "CrystalBall": CrystalBall,
    "Wand": Wand,
    "ShrunkenHead": ShrunkenHead,
    "ThrowingStars": ThrowingStars,
    "CrossBow": CrossBow,
    "PoisonDart": PoisonDart,
    "Horn": Horn
  }

  var newEnemy = new Monster();
  var chooseEnemy = {
    "Orc": Orc,
    "Queen": Queen,
    "Tuzun": Tuzun,
    "Andar": Andar
  }



    $("#player-name").show();

    /*
      When any button with card-link class is clicked,
      move on to the next view.
     */
    $(".card-link").click(function(e) {
      var nextCard = $(this).attr("next");
      var moveAlong = true;

      console.log(moveAlong)
      if (moveAlong) {
        $(".card").hide();
        $("." + nextCard).show();
      }
      console.log($(".card-link").click)
    });

    /*
      When the back button clicked, move back a view
     */
    $(".card-back").click(function(e) {
      var previousCard = $(this).attr("previous");
      $(".card").hide();
      $("." + previousCard).show();
    });

  $(".classes button").click(function(){
    // Player.prototype.class = $(this).val();
    newPlayer = new chooseClass[$(this).val()]; //Whatever string class button you click
    console.log("this.val",$(this).val());
    console.log(newPlayer);
  });

  $(".weapons button").click(function(){
    newPlayer.weapon = new chooseWeapon[$(this).val()];
    console.log(newPlayer);
      if (newPlayer.magical === true) {
        newPlayer.Spell = new Sphere();
        console.log(newPlayer.Spell);
      }
      return newPlayer;
  });

  $(".enemies button").click(function(){
    newEnemy = new chooseEnemy[$(this).val()];
    console.log(newEnemy);
    return newEnemy;
  });


// LET'S GET READY TO RUUUUUMBLLLEEEE

$(".defeat-enemies button").click(function(){

})

var Battleground = function(playerFighter, enemyFighter) {
  this.Player = playerFighter;
  this.Enemy = enemyFighter;
};

Battleground.prototype.war = function() {
  var playerDamage = Math.round(Math.random() * this.newPlayer.weapon.damage + 1);
  var enemyDamage = Math.round(Math.random() * this.newEnemy.weapon.damage + 1);

  var totalPlayerDamage = Math.floor(playerDamage + (this.newPlayer.strength / 10));
  var totalEnemyDamage = Math.floor(enemyDamage + (this.newEnemy.strength / 10));

  var warResult = "";
  warResult += "<div class='war-total-player'>";
  warResult += "--" + this.newPlayer.name + "(" + this.newPlayer.health + " hp) attacks for " + totalPlayerDamage + "damage";
  warResult += "</div>";

  warResult += "<div class='war-total-enemy'>";
  warResult += "--" + this.newEnemy.name + "(" + this.newEnemy.health + " hp) attacks for " + totalEnemyDamage + "damage";
  warResult += "</div>";

  this.newPlayer.health -= totalEnemyDamage;
  this.newEnemy.health -= totalPlayerDamage;

  $("#battleground").append(warResult);

  if (this.newPlayer.health <= 0) {
    $("#battleground").append("<div>It. Is. Decided. You have perished amongst enemy hands.</div>"); 
  } else if {
    (this.newEnemy.health <= 0) {
      $("#battleground").append("<div>It. Is. Decided. You are victorious.</div>");
    }
  }
}





// dis is steve


// Battleground.prototype.melee = function() {
//   var baseHumanDamage = Math.round(Math.random() * this.human.weapon.damage + 1);
//   var baseEnemyDamage = Math.round(Math.random() * this.enemy.weapon.damage + 1);

//   var totalHumanDamage = Math.floor(baseHumanDamage + (this.human.strength / 10));
//   var totalEnemyDamage = Math.floor(baseEnemyDamage + (this.enemy.strength / 10));

//   var battleResult = "";
//   battleResult += "<div class=\"battle-record__human\">";
//   battleResult += "&gt; " + this.human.playerName + "(" + this.human.health + " hp) attacks with " + this.human.weapon + " for " + totalHumanDamage + " damage";
//   battleResult += "</div>";

//   battleResult += "<div class=\"battle-record__enemy\">";
//   battleResult += "&gt; " + this.enemy.species + "(" + this.enemy.health + " hp) attacks with " + this.enemy.weapon + " for " + totalEnemyDamage + " damage";
//   battleResult += "</div>";

//   this.human.health -= totalEnemyDamage;
//   this.enemy.health -= totalHumanDamage;

//   $("#battle-record").append(battleResult);

//   if (this.human.health <= 0 || this.enemy.health <= 0) {
//     $("#battle-record").append("<div>The battle is over. " + ((this.human.health > 0) ? "You" : "The " + this.enemy.species) + " won!</div>");

//     return false;
//   }

//   return true;
// };














});




