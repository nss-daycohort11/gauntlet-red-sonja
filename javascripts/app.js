$(document).ready(function() {

<<<<<<< HEAD
  /*
    Test code to generate a human player and an orc player
   */
  // var warrior = new Human("Joe");
  // warrior.init();
  // warrior.init(AvailableClasses.Monk);

  // var enemy = AvailableEnemies.randomEnemy();
  // enemy.init();


  // console.log(warrior.toString());
  // console.log(enemy.toString());


  /*
    END OF TEST CODE
    Show the initial view that accepts player name
   */
  var HumanCombatant = null;
  var EnemyCombatant = null;
  var chosenProfession = null;
  var chosenWeapon = null;
  var battleground = null;

  $("#player-setup").show();

  /*
    When any button with card__link class is clicked,
    move on to the next view.
   */
  $(".card__link").click(function(e) {
    var currentCard = $(this).attr("current");
    var nextCard = $(this).attr("next");
    var moveAlong = false;

    switch (currentCard) {
      case "card--name":
        moveAlong = $("#player-name").val() !== "";
        break;
      case "card--class":
        moveAlong = chosenProfession !== null;
        break;
      case "card--weapon":
        moveAlong = chosenWeapon !== null;
        break;
    };

    if (moveAlong) {
      /*
        If all requirements met to move along to the next screen, set
        that screen up now if there is any dynamic elements that need
        to be created before it is shown.
       */
      switch (nextCard) {
        case "card--class":
          break;

        case "card--weapon":
          if (chosenProfession.magical) {
            HumanCombatant.init(chosenProfession);
            nextCard = "card--battleground";
            startCombat();
          } else {
            var weaponEl = $("#weapon-select").children(".card__prompt");
            $(".weapons").remove();

            var block = "<div class=\"row weapons\">";
            block += '<div class="col-sm-6">';

            chosenProfession.allowedWeapons.forEach(function(weapon, index) {
              var weaponName = new window[weapon]().toString();
              if (index === 3) {
                block += "</div>";
                block += "<div class=\"col-sm-6\">";
              }
              block += '<div class="card__button"><a class="weapon__link btn btn--big btn--blue" href="#"><span class="btn__prompt">&gt;</span><span class="btn__text" weapon='+weapon+'>' + weaponName + '</span></a></div>';
            });
            block += "</div></div>";
            weaponEl.append(block);
          }
          break;

        case "card--battleground":
          HumanCombatant.init(chosenProfession, chosenWeapon);
          startCombat();

          break;
      }

      /*
        Now that any initialization is done, hide all cards and show next one
       */
=======



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

    $(".card__back").click(function(e) {

      var previousCard = $(this).attr("previous");
>>>>>>> b755da59f25500e80e25c84236e3b1f77067d69c
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

<<<<<<< HEAD
  var continueBattle = true;
  var battleTimer;

  function meleeRound() {
    if (!battleground.melee()) {
      window.clearInterval(battleTimer);

      if (HumanCombatant.health > 0) {
        $("#battle-record").after("<button class=\"btn btn--big btn--yellow btn--another\">Fight another</button>");
      } else {
        $("#battle-record").after("<button class=\"btn btn--big btn--yellow btn--again\">Play Again</button>");
      }
    }

    $("#battle-record").scrollTop(9999999);
  }

  function startCombat() {
    EnemyCombatant = AvailableEnemies.randomEnemy();
    EnemyCombatant.init();

    $(".battle--human").html(HumanCombatant.toString());
    $(".battle--enemy").html(EnemyCombatant.toString());

    battleground = new Battleground(HumanCombatant, EnemyCombatant);
    battleTimer = window.setInterval(meleeRound, 2000);
  }

  /*
    When the "Fight Another" button is clicked just start
    the battle all over again with the player's existing
    health, and a new opponent.
   */
  $(document).on("click", ".btn--another", function() {
    $(".btn--another").remove();
    startCombat();
  });

  /*
    When the "Fight Again" button is clicked just start
    the battle all over again with the player's existing
    health, and a new opponent.
   */
  $(document).on("click", ".btn--again", function() {
    $(".btn--again").remove();
    $(".card").hide();
    $("#player-setup").show();
    $("#battle-record").empty();
  });

  /*
    Handle user choosing a profession for the human combatant
   */
  $(".class__link").click(function(e) {
    HumanCombatant = new Human($("#player-name").val());
    chosenProfession = AvailableClasses[$(this).children(".btn__text").html()];
  });


  /*
    Handle user choosing a weapon for the human combatant
   */
  $(document).on("click", ".weapon__link", function(e) {
    var weapon = $(this).find(".btn__text").attr("weapon");
    chosenWeapon = new window[weapon]();
  });


  /*
    When the back button clicked, move back a view
   */
  $(".card__back").click(function(e) {
    var previousCard = $(this).attr("previous");
    $(".card").hide();
    $("." + previousCard).show();
  });

  /*
    Whichever combatant has the higher intelligence score
    will attack first. Intelligence also increases damange 
    to magical attacks.
   */

});
=======
  $(".enemies button").click(function(){
    newEnemy = new chooseEnemy[$(this).val()];
    console.log(newEnemy);
    return newEnemy;
    // console.log(newWhatever);
  });


// LET'S GET READY TO RUUUUUMBLLLEEEE

$(".defeat-enemies button").on("click", function () {
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

    var warButton = "";
    warButton

    this.newPlayer.health -= totalEnemyDamage;
    this.newEnemy.health -= totalPlayerDamage;

    $("#battleground").append(warResult);

    if (this.newPlayer.health <= 0) {
      $("#battleground").append("<div>It. Is. Decided. You have perished amongst enemy hands.</div>"); 
    } else if 
      (this.newEnemy.health <= 0) {
        $("#battleground").append("<div>It. Is. Decided. You are victorious.</div>");
      }
  }
Battleground.war ();
});

});


  $(".classes button").click(function(){
    // Player.prototype.class = $(this).val();
    newPlayer = new $(this).val();
    console.log("this.val",$(this).val());
    console.log(newPlayer);
    var constructor = chooseClass[$(this).val()];
    newPlayer.class = new constructor();
    console.log(newPlayer);
  });

});





>>>>>>> b755da59f25500e80e25c84236e3b1f77067d69c
