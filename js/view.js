var BattleView = function(){

  this.getPlayerName = function(playerName){
    return prompt(playerName + ": Enter Your Name");
  };

  this.generateShip = function(shipName, shipSize, playerName){
    for(var i = 0; i < shipSize; i++){
      $("#" + playerName + "-board .ships ." + shipName).append("<div class='ship-cell'></div>");
    };
  };

  this.resetNames = function(p1Name, p2Name) {
    $("#player1-board .player-name").html(p1Name);
    $("#player2-board .player-name").html(p2Name);
  };
};
