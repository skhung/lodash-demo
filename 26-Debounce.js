// Debounce

// document.getElementById('name').addEventListener('keydown', (event) => {
//   console.log('we sent request', event.target.value);
// })

let dbHandler = (event) => {
  console.log('we sent request', event.target.value);
};

document.getElementById('name').addEventListener('keydown', _.debounce(dbHandler, 2000));
