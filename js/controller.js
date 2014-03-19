var BattleShip = function(){
  view = new BattleView();
  var player1;
  var player2;

  populateShips = function(player) {
    $(player.getBoard().getShips()).each(function(index, ship){
      var shipName = ship.getName();
      var shipSize = ship.getSize();
      view.generateShip(shipName, shipSize, player.getIndex());
    })
  }

  placeShips = function() {

  };


  this.initialize = function() {
    player1Name = view.getPlayerName("Player 1");
    player1 = new Player(player1Name, "1");
    player1.initialize();

    player2Name = view.getPlayerName("Player 2");
    player2 = new Player(player2Name, "2");
    player2.initialize();

    populateShips(player1);
    populateShips(player2);

    placeShips(player1);
  };
};
