var Ship = function(name){
  var name = name
  var size = 0;
  var position;

  this.assignPosition = function(position){
    this.position = position
  };

  this.assignSize = function(){
    size = fetchShipSize();
  };

  this.getName = function(){
    return name;
  };

  this.getSize = function(){
    return size;
  };

  var fetchShipSize = function(){
    switch(name){
      case "destroyer":
        return 2;
        break;
      case "cruiser":
      case "submarine":
        return 3;
        break;
      case "battleship":
        return 4;
        break;
      case "aircraft-carrier":
        return 5;
        break
      default:
        return undefined;
    };
  };
};

var Player = function(name, index){
  var index = "player" + index
  var name = name;
  var board = new Board();

  this.getName = function(){
    return name;
  }

  this.getBoard = function(){
    return board;
  }

  this.initialize = function(){
    board.populateShips();
  };

  this.getIndex = function() {
    return index;
  }
};

var Board = function(){
  var ships = [];
  var shipTypes = ["destroyer", "cruiser", "submarine", "battleship", "aircraft-carrier"]

  // Generate Ships For Player
  this.populateShips = function(){
    $(shipTypes).each(function(index, shipName){
      var ship = new Ship(shipName)
      ship.assignSize();
      ships.push(ship);
    });
  };

  // Dispaly Each Ship on the DOM for players to select


  // Set ships on board where players drop them



  this.getShips = function(){
    return ships;
  };
}
