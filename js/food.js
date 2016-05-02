// XMLHttpRequests are REALLY HARD and I hope I did this in a sustainable manner

// Elements for inserting information into the Dog Food Table in the DOM
var products = document.getElementById('products');
var dogBrands = document.getElementsByClassName('brand-dog');
var dogType = document.getElementsByClassName('types-dog');

// Nesting ALL the for-loops to get the objects to appear in the order I want in the DOM
// STILL SURPRISED THAT THIS WORKS, WHAT KIND OF WITCHCRAFT IS THIS?!
function putTheDogStuffintheDom () {
  var dogObjects = JSON.parse(dogs.responseText);
  console.log(dogObjects);
  for (var i = 0; i < dogObjects.dog_brands.length; i++) {
    dogBrands.item(i).innerHTML += dogObjects.dog_brands[i].name;
    for (var j = 0; j < dogObjects.dog_brands[i].types.length; j++) {
      dogType.item(i).innerHTML += `${dogObjects.dog_brands[i].types[j].type}: `;
      for (var k = 0; k < dogObjects.dog_brands[i].types[j].volumes.length; k++) {
        dogType.item(i).innerHTML += `${dogObjects.dog_brands[i].types[j].volumes[k].name} - ${dogObjects.dog_brands[i].types[j].volumes[k].price}, `;
      }
    }
  }
}

// The infamously confusing XMLHttpRequest, in the flesh:
var dogs = new XMLHttpRequest();
// This listener simply tells the browser when to run the function making the things go
dogs.addEventListener("load", putTheDogStuffintheDom);
// tells us where to get the information we are pulling in
dogs.open("GET", "js/JSONdog.json");
// fires the function IS ENTIRELY NECESSARY
dogs.send();

//
// Elements for inserting information into the Dog Food Table in the DOM
var catBrands = document.getElementsByClassName('brand-cat');
var catType = document.getElementsByClassName('types-cat');
var catBreeds = document.getElementsByClassName('breeds-cat');

// Rinse/Repeat of the loops used for the Dog Food table, only with a section for breeds
function putTheCatStuffintheDom () {
  var catObjects = JSON.parse(cats.responseText);
  console.log(catObjects);
  for (var i = 0; i < catObjects.cat_brands.length; i++) {
    catBrands.item(i).innerHTML += catObjects.cat_brands[i].name;
    for (var m = 0; m < catObjects.cat_brands[i].breeds.length; m++) {
      catBreeds.item(i).innerHTML += `${catObjects.cat_brands[i].breeds[m]}, `;
    }
    for (var j = 0; j < catObjects.cat_brands[i].types.length; j++) {
      catType.item(i).innerHTML += `${catObjects.cat_brands[i].types[j].type}: `;
      for (var k = 0; k < catObjects.cat_brands[i].types[j].volumes.length; k++) {
        catType.item(i).innerHTML += `${catObjects.cat_brands[i].types[j].volumes[k].name} - ${catObjects.cat_brands[i].types[j].volumes[k].price}, `;
      }
    }
  }
}

// And again, the XHR. Which I keep wanting to shorten to XML, because somehow that makes more sense?
var cats = new XMLHttpRequest();
cats.addEventListener("load", putTheCatStuffintheDom);
cats.open("GET", "js/JSONcat.json");
cats.send();
// <-- Magical last line thing that Ryan and Github keeps saying I need.
