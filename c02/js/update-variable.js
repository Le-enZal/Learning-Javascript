var inStock;
var shipping;

inStock = true;
shipping = false;
// the equal sign is the new value of the attribute

/* some other processing might go here and, as a result,
  the script might need to change these values */

  inStock = false;
  shipping = true;

  var elStock = document.getElementbyId ('stock');
  elStock.classname = inStock;
  var elShip = document.getElementbyId ('shipping');
  elShip.classname = shipping;
