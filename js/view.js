var BattleView = function(){

  this.getPlayerName = function(playerName){
    return prompt(playerName + ": Enter Your Name");
  };

  this.generateShip = function(shipName, shipSize, playerName){
    console.log(shipName);
    for(var i = 0; i < shipSize; i++){
      $("#" + playerName + "-board .ships ." + shipName).append("<div class='ship-cell'></div>");
    };
  };

};
