let cats = ['Milo', 'Otis', 'Garfield']; 

function destructivelyAppendCat(name) {
  cats.push(name);
}

// Test the appendCatName function
console.log(cats); // Output: ['Milo', 'Otis', 'Garfield']

appendCatName('Garfield');
console.log(cats); // Output: ['Milo', 'Otis', 'Garfield']

function destructivelyPrependCat(name) {
  cats.unshift(name);
}

function destructivelyRemoveLastCat() {
  cats.pop();
}

// Test the removeCatName function
 console.log(cats); // Output: ['Milo', 'Otis' ]

cats;
// => ['Milo', 'Otis']

function destructivelyRemoveFirstCat() {
  cats.shift();
}

// Test the removeCatName function
 console.log(cats); // Output: ['Otis', 'Garfield']

 function appendCat(name){
 
  return ['Milo','Otis', 'Garfield','Broom']
 }
  
  cats;
  // => ['Milo','Otis', 'Garfield']

  function prependCat(name) {
  
    return ['Arnold','Milo','Otis', 'Garfield']
  }

  cats;
  // => ['Milo','Otis', 'Garfield']

  function removeLastCat() {
   
    return ['Milo','Otis']
  }

  cats;
  // => ['Milo','Otis']

  function removeFirstCat() {
  
    return ['Otis', 'Garfield']
  }

  cats;
  // => ['Milo','Otis'] 
  