// Please implement exercise logic here
// for loop to generate 6 grey containers
for (i = 0; i < 6; i++) {
  //Create grey container to hold row
  const container = document.createElement('div');
  container.innerText = '';
  container.classList.add('container');

  // Create 2 yellow rows
  const row1 = document.createElement('div')
  row1.innerText = '';
  row1.classList.add('row');

  const row2 = document.createElement('div')
  row2.innerText = '';
  row2.classList.add('row');

  //Create pink words for row 1
  const word_hello = document.createElement('span');
  word_hello.innerText = 'hello';
  word_hello.classList.add('word');

  const word_papaya = document.createElement('span');
  word_papaya.innerText = 'papaya';
  word_papaya.classList.add('word');

  //Create pink words for row 2
  const word_banana = document.createElement('span');
  word_banana.innerText = 'banana';
  word_banana.classList.add('word');

  const word_world = document.createElement('span');
  word_world.innerText = 'world';
  word_world.classList.add('word');

  //Append container to document
  document.body.appendChild(container);
  //Append row1 and row2 to container
  container.appendChild(row1);
  container.appendChild(row2)
  //Append words to row1
  row1.appendChild(word_hello);
  row1.appendChild(word_papaya);
  //Append words to row2
  row2.appendChild(word_banana);
  row2.appendChild(word_world);
}
