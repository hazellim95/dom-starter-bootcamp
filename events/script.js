const words = [
  ['hello', 'papaya'],
  ['banana', 'world'],
];

//global variable to store current grey container element
let container = document.createElement('div');

// Function that creates yellow boxes, with parameter of type array

const createYellowBox = (array) => {
  // Create 1 yellow row 
  const row = document.createElement('div')
  row.innerText = '';
  row.classList.add('row');

  // get the elements from the input array and create an element for each 
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

// function to create second yellow box and append it to the container parameter
const createSecondYellowBox = () => {
  // Create the yellow row
  const row = createYellowBox(words[0]);
  //append it to container
  container.appendChild(row);
}

// // Function that adds button to container
// function addButtonToContainer() {
//     const container = document.getElementById('buttonContainer');
//     const button = document.createElement('button');
//     button.innerText = 'submit';
//     container.appendChild(button);
// }


// Function that creates grey box
const createContainer = (theEvent) => {
  console.log('Creating box');
  //Create grey container to hold row - assign it to global 
  container = document.createElement('div');
  container.innerText = '';
  container.classList.add('container');
  console.log(`created grey box`);
  //Append container to document
  document.body.appendChild(container);
  console.log(`appending grey box`);

  // Create the yellow rows using for loop and push to a new array
  const rowElements = []; //new array to store yellow rows
  for (j = 0; j < words.length; j++) {
    const row = createYellowBox(words[j])
    rowElements.push(row);
  }
  //Append rows to container
  for (k = 0; k < rowElements.length; k++) {
    container.appendChild(rowElements[k]);
  }

  //Create internal button for creating another row
  const button2 = document.createElement('button');
  button2.innerText = 'submit';
  button2.classList.add('button');
  //Add eventlistener to button2 - if this is clicked, create another yellow box and append it above the submit button
  button2.addEventListener('click', createSecondYellowBox);
  //Append button2 to container
  container.appendChild(button2);
}

//Create main button
const button = document.createElement('button');
button.innerText = 'submit';
button.classList.add('button');
//Append button to body
document.body.appendChild(button);
//Add click event listener with a callback function to it
//Other types of events that can be attached to the button: dblclick, mouseenter, mouseleave.
button.addEventListener('click', createContainer)







