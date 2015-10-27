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
  };
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
  };

  var newEnemy = new Monster();
  var chooseEnemy = {
    "Orc": Orc,
    "Queen": Queen,
    "Tuzun": Tuzun,
    "Andar": Andar
  };



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
    // console.log(newWhatever);
  });


// LET'S GET READY TO RUUUUUMBLLLEEEE

var playerFighter = newPlayer;
var enemyFighter = newEnemy;

console.log(playerFighter);

$(".defeat-enemies").on("click", function() {
    console.log("Happy");

  Battle(playerFighter, enemyFighter);
  // $("#battleground").html(war);
})

});




