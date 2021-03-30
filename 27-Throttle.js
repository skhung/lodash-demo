// Throttle

const tHandler = (event) => {
  console.log('we sent request');
};

document.getElementById('go').addEventListener('click', _.throttle(tHandler, 2000));
