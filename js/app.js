'use strict'


// An array to push all of our instances too.
Product.allProduct = [];
// Product constructor function that makes a property for the filepath, name of image, number of times displayed and number of clicks.
function Product(filepath, name, displayCount, clickCount) {
  this.filepath = filepath;
  this.name = name;
  this.displayCount = 0;
  this.clickCount = 0;
  Product.allProduct.push(this);
}
// instances for each picture
new Product('img/bag.jpg','bag', this.displayCount, this.clickCount );
new Product('img/banana.jpg','banana', this.displayCount, this.clickCount );
new Product('img/bathroom.jpg','bathroom', this.displayCount, this.clickCount );
new Product('img/boots.jpg', 'boots', this.displayCount, this.clickCount );
new Product('img/breakfast.jpg', 'breakfast', this.displayCount, this.clickCount );
new Product('img/bubblegum.jpg', 'bubblegum', this.displayCount, this.clickCount );
new Product('img/chair.jpg','chair', this.displayCount, this.clickCount );
new Product('img/cthulhu.jpg','cthulhu', this.displayCount, this.clickCount );
new Product('img/dog-duck.jpg','dog-duck', this.displayCount, this.clickCount );
new Product('img/dragon.jpg', 'dragon', this.displayCount, this.clickCount );
new Product('img/pen.jpg', 'pen', this.displayCount, this.clickCount );
new Product('img/pet-sweep.jpg', 'pet-sweep', this.displayCount, this.clickCount );
new Product('img/scissors.jpg','scissors', this.displayCount, this.clickCount );
new Product('img/shark.jpg','shark', this.displayCount, this.clickCount );
new Product('img/sweep.png','sweep', this.displayCount, this.clickCount );
new Product('img/tauntaun.jpg', 'tauntaun', this.displayCount, this.clickCount );
new Product('img/unicorn.jpg', 'unicorn', this.displayCount, this.clickCount );
new Product('img/usb.gif', 'usb', this.displayCount, this.clickCount );
new Product('img/water-can.jpg', 'water-can', this.displayCount, this.clickCount );
new Product('img/wine-glass.jpg', 'wine-glass', this.displayCount, this.clickCount );

// pull in all three image elements from the DOM
var imgEL = document.getElementById('product-pic1');
var imgEL2 = document.getElementById('product-pic2');
var imgEL3 = document.getElementById('product-pic3');

// add event listner that when item is clicked it saves the click and adds to the counter property.
imgEL.addEventListener('click', randomProduct);
imgEL2.addEventListener('click', randomProduct);
imgEL3.addEventListener('click', randomProduct);

function randomizer() {
  // pick a random number between 0 and the length of our array Product.allProduct. 
  Math.floor(Math.random() * Product.allProduct.length);
  return
}

//Define the randomProduct function
function randomProduct(e) {
  // what ever images is randomly selected. make it the src for img element.
  var randIndex = randomizer();
  
  imgEL.src = Product.allProduct[randIndex].filepath;
  
   // what ever images is randomly selected. make it the src for img element.
  imgEL2.src = Product.allProduct[randIndex].filepath;
  
  
  // what ever images is randomly selected. make it the src for img element.
  imgEL3.src = Product.allProduct[randIndex].filepath;
  
}

randomProduct();
// also track how many times each image is display even if its not being clicked.



// After 25 click we want to remove the eventListner. Then display a list of the products with votes received with each list item looking like "3 votes for the Banana Slicer".
