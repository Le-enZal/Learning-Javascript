// Create the array and assign it values
//create the array
var colors = ['white',
              'black',
               'custom'];
//update the third item in the array
colors [2] = 'beige';

// Get the eelement with an id of colors
var el = document.getElementById ('colors');

//replace with third item from the array
el.textContent = colors [2];