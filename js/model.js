var Ship = function(name){
  this.name = name
  this.size = getSize(this.name)
  this.position;

  this.assignPosition = function(position){
    this.position = position
  }

  var getSize = function(name){
    switch(name){
      case: "destroyer"
        return 2;
        break;
      case: "cruiser"
      case: "submarine"
        return 3;
        break;
      case: "battleship"
        return 4;
        break;
      case: "aircraft carrier"
        return 5;
        break
      default:
        return undefined;
    };
  };
}


var Board = function(name){
  this.name = name;
  this.ships = [];



}
