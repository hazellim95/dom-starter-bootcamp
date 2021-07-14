// Please implement exercise logic here
const words = [
  ['orange', 'tomato'],
  ['fire engine', 'basketball'],
];


// Function that creates yellow boxes, with parameter of type array

const createYellowBox = (array) => {
  // Create 1 yellow row 
  const row = document.createElement('div')
  row.innerText = '';
  row.classList.add('row');

  // create get the elements from the input array and create an element for each 
  console.log("creating word elements..");
  for (m = 0; m < array.length; m++) {
    const word = document.createElement('span');
    word.innerText = array[m];
    word.classList.add('word');
    //append each element to the respective row element    
    row.appendChild(word);
  }

  // return the created yellow box with its words
  return row;

}


// for loop to create the container and a series of yellow boxes
for (i = 0; i < 2; i++) {
  //Create grey container to hold row
  const container = document.createElement('div');
  container.innerText = '';
  container.classList.add('container');
  console.log(`created grey box ${i}`);

  // Create the yellow rows using for loop and push to a new array
  const rowElements = []; //new array to store yellow rows
  for (j = 0; j < words.length; j++) {
    const row = createYellowBox(words[j])
    rowElements.push(row);
  }

  //Append container to document
  document.body.appendChild(container);
  console.log(`appending grey box ${i}`);

  //Append rows to container
  for (k = 0; k < rowElements.length; k++) {
    container.appendChild(rowElements[k]);
  }

}



//// Previous exercise: Element Contents From an Array: ////
// // Global const for word array
// const words = ['banana', 'pasta', 'alligator', 'purple', 'accurate', 'fickle'];

// for (i = 0; i < 6; i++) {
//   //Create grey container to hold row
//   const container = document.createElement('div');
//   container.innerText = '';
//   container.classList.add('container');
//   console.log(`created grey box ${i}`);
  
//   // Create 1 yellow row
//   const row = document.createElement('div')
//   row.innerText = '';
//   row.classList.add('row');

//   //Create local array to store the 6 word elements
//   const wordArray = [];
//   //Loop through words array to create 6 pink boxes
//   for (k = 0; k < words.length; k++) {
//     const word = document.createElement('span');
//     word.innerText = words[k];
//     word.classList.add('word');
//     console.log(`created word ${k}: ${words[k]}`)
//     wordArray.push(word);
//   }
//   //Append container to document
//   document.body.appendChild(container);
//   console.log(`appending grey box ${i}`);

//   //Append row to container
//   container.appendChild(row);
//   //Append words to row
//   for (j = 0; j < wordArray.length; j++) {
//     row.appendChild(wordArray[j]);
//   }
// }




//// Previous exercise: Element creation in a loop: ////

// // for loop to generate 6 grey containers
// for (i = 0; i < 6; i++) {
//   //Create grey container to hold row
//   const container = document.createElement('div');
//   container.innerText = '';
//   container.classList.add('container');

//   // Create 2 yellow rows
//   const row1 = document.createElement('div')
//   row1.innerText = '';
//   row1.classList.add('row');

//   const row2 = document.createElement('div')
//   row2.innerText = '';
//   row2.classList.add('row');

//   //Create pink words for row 1
//   const word_hello = document.createElement('span');
//   word_hello.innerText = 'hello';
//   word_hello.classList.add('word');

//   const word_papaya = document.createElement('span');
//   word_papaya.innerText = 'papaya';
//   word_papaya.classList.add('word');

//   //Create pink words for row 2
//   const word_banana = document.createElement('span');
//   word_banana.innerText = 'banana';
//   word_banana.classList.add('word');

//   const word_world = document.createElement('span');
//   word_world.innerText = 'world';
//   word_world.classList.add('word');

//   //Append container to document
//   document.body.appendChild(container);
//   //Append row1 and row2 to container
//   container.appendChild(row1);
//   container.appendChild(row2)
//   //Append words to row1
//   row1.appendChild(word_hello);
//   row1.appendChild(word_papaya);
//   //Append words to row2
//   row2.appendChild(word_banana);
//   row2.appendChild(word_world);
// }
