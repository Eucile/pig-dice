// Business Logic
var roll = function () {
  return Math.floor(6 * Math.random()) + 1;
}

function switchPlayer() {
  $(".player-data").toggle();
  $(".image-col").html("");
}

function Player(name) {
  this.roll = 0;
  this.turnTotal = 0;
  this.playerTotal = 0;
  this.name = name;
}

function diceImageOne(roll) {
  console.log(roll);
  $("#dice-col-2").html("");
  if (roll == 1) {
    $("#dice-col-1").html("<img src='img/inverted-dice-1.png'>");
  } else if (roll == 2){
    $("#dice-col-1").html("<img src='img/inverted-dice-2.png'>");
  } else if (roll == 3) {
    $("#dice-col-1").html("<img src='img/inverted-dice-3.png'>");
  } else if (roll == 4) {
    $("#dice-col-1").html("<img src='img/inverted-dice-4.png'>");
  } else if (roll == 5) {
    $("#dice-col-1").html("<img src='img/inverted-dice-5.png'>");
  } else if (roll == 6) {
    $("#dice-col-1").html("<img src='img/inverted-dice-6.png'>");
  }
}

function diceImageTwo(roll) {
  console.log(roll);
  $("#dice-col-1").html("");
  if (roll == 1) {
    $("#dice-col-2").html("<img src='img/inverted-dice-1.png'>");
  } else if (roll == 2){
    $("#dice-col-2").html("<img src='img/inverted-dice-2.png'>");
  } else if (roll == 3) {
    $("#dice-col-2").html("<img src='img/inverted-dice-3.png'>");
  } else if (roll == 4) {
    $("#dice-col-2").html("<img src='img/inverted-dice-4.png'>");
  } else if (roll == 5) {
    $("#dice-col-2").html("<img src='img/inverted-dice-5.png'>");
  } else if (roll == 6) {
    $("#dice-col-2").html("<img src='img/inverted-dice-6.png'>");
  }
}

Player.prototype.updateTurn = function() {
  if(this.roll === 1) {
    this.turnTotal = 0;
    switchPlayer();
    this.roll = 0;
    $("#message").text("You rolled a 1. Switch!");
  } else if ((this.roll > 1) && (this.roll < 7)) {
    this.turnTotal += this.roll;
    $("#message").text("Player " + this.name + " rolled a " + this.roll + "!");
  }
}

Player.prototype.hold = function() {
  this.playerTotal += this.turnTotal;
  this.roll = 0;
  this.turnTotal = 0;
  switchPlayer();
  $("#progress-" + this.name).css("width", this.playerTotal);
  if(this.playerTotal >= 100) {
    $(".winner-modal").text(this.name);
    $("#myModal").modal('show');
  }
}

// User-Interface Logic
$(document).ready(function() {
  var player1 = new Player(1);
  var player2 = new Player(2);

  $("#player-one-roll").click(function(){
    player1.roll = roll();
    player1.updateTurn();
    $("#your-roll1").text(player1.roll);
    $("#turn-total1").text(player1.turnTotal);
    diceImageOne(player1.roll); //changed
  });
  $("#player-one-hold").click(function(){
    player1.hold();
    $("#your-roll1").text(0);
    $("#turn-total1").text(0);
    $("#player-one-total").text(player1.playerTotal);
  });
  $("#player-two-roll").click(function(){
    player2.roll = roll();
    player2.updateTurn();
    $("#your-roll2").text(player2.roll);
    $("#turn-total2").text(player2.turnTotal);
    diceImageTwo(player2.roll); //changed
  });
  $("#player-two-hold").click(function(){
    player2.hold();
    $("#your-roll2").text(0);
    $("#turn-total2").text(0);
    $("#player-two-total").text(player2.playerTotal);
  });
});
