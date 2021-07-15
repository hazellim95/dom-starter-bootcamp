const words = [
  ['hello', 'papaya'],
  ['banana', 'world'],
];

//global variable to store current grey container element
let container = document.createElement('div');
//global variable to store current yellow box element
let row = document.createElement('div');

// Function that gets the text from input element and returns it as a string
const getInput = () => {
  //Get the value from input field
  const text = document.getElementById('input-text').value;
  //const text = document.getElementsByClassName('input').value;
  console.log('input value');
  console.log(text);
  return text;
}

// Function that creates pink boxes with words and returns the pink box element
const createPinkBox = (string) => {
  const word = document.createElement('span');
  word.innerText = string;
  word.classList.add('word');
  return word;
}

// Function that creates yellow boxes
const createYellowBox = () => {
  // Create 1 yellow row 
  row = document.createElement('div')
  row.innerText = '';
  row.classList.add('row');

  //get input from this input field
  const input = getInput()

  //Create the word
  const word = createPinkBox(input);

  //append word to row
  row.append(word);
  
  //append row to the container
  container.appendChild(row);
}


// Function that creates grey box
const createContainer = (theEvent) => {
  console.log('Creating box');
  //Create grey container to hold row - assign it to global 
  //const container = document.createElement('div');
  container = document.createElement('div');
  container.innerText = '';
  container.classList.add('container');
  console.log(`created grey box`);
  //Append container to document
  document.body.appendChild(container);
  console.log(`appending grey box`);

  // // Create the yellow rows using for loop and push to a new array
  // const rowElements = []; //new array to store yellow rows
  // for (j = 0; j < words.length; j++) {
  //   const row = createYellowBox(words[j])
  //   rowElements.push(row);
  // }
  // //Append rows to container
  // for (k = 0; k < rowElements.length; k++) {
  //   container.appendChild(rowElements[k]);
  // }

  //create input field
  const input = document.createElement('input');
  input.innerText = '';
  input.classList.add('input');
  input.setAttribute('id', 'input-text')
  //append input field to container
  container.appendChild(input);

  //create internal button
  const button2 = document.createElement('button');
  button2.innerText = 'submit';
  button2.classList.add('button');

  //Add eventlistener to button2 - if this is clicked, create another yellow box and append it above the submit button
  button2.addEventListener('click', createYellowBox);
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







