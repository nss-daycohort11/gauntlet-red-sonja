$(document).ready(function() {

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

    /*
      Test code to generate a human player and an orc player
     */
    // var warrior = new Human();
    // warrior.setWeapon(new WarAxe());
    // warrior.generateClass();  // This will be used for "Surprise me" option
    // console.log(warrior.toString());

    // var orc = new Orc();
    // orc.generateClass();
    // orc.setWeapon(new BroadSword());
    // console.log(orc.toString());

    /*
      Test code to generate a spell
     */
    // var spell = new Sphere();
    // console.log("spell: ", spell.toString());


    /*
      END OF TEST CODE

      Show the initial view that accepts player name
     */
    $("#player-setup").show();

    /*
      When any button with card__link class is clicked,
      move on to the next view.
     */
    $(".card__link").click(function(e) {
      var nextCard = $(this).attr("next");
      var moveAlong = false;

      switch (nextCard) {
        case "card--class":
          moveAlong = ($("#player-name").val() !== "");
          break;
        case "card--weapon":
          moveAlong = ($("#player-name").val() !== "");
          break;
      }

      if (moveAlong) {
        $(".card").hide();
        $("." + nextCard).show();
      }
    });

    /*
      When the back button clicked, move back a view
     */
    $(".card__back").click(function(e) {
      var previousCard = $(this).attr("previous");
      $(".card").hide();
      $("." + previousCard).show();
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





// var chooseClass = [
//   {name: "Warrior", value :Warrior},
//   {name: "", value :Warrior},
//   {name: "Warrior", value :Warrior},
//   {name: "Warrior", value :Warrior},
//   {name: "Warrior", value :Warrior},
//   {name: "Warrior", value :Warrior},
//   {name: "Warrior", value :Warrior},
//   {name: "Warrior", value :Warrior},
//   {name: "Warrior", value :Warrior},
//   {name: "Warrior", value :Warrior},
// ]





