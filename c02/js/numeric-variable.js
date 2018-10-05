// Create three variables to store the information needed.
var price;
//price holds the price of an individual tile
var quantity;
//quantity holds the # of tiles a customer wants
var total;
//total holds the total cost of the tiles 

// Assign values to the price and quantity variables.
price = 5;
quantity = 14;
// Calculate the total by multiplying the price by quantity.
total = price * quantity;

// Get the element with an id of cost.
var el = document.getElementById('cost');
el.textContent = '$' + total;

/*
NOTE: textContent does not work in IE8 or earlier
You can use innerHTML, but note the security issues on p228-231
el.innerHTML = '$' + total;
*/
