window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
 return Math.floor(Math.random() * 5000) + 1000; // Random time between 1 and 5 seconds
}

function createPromiseWithRandomTime() {
  return new Promise((resolve) => {
    const randomTime = getRandomTime();
    setTimeout(() => {
      resolve(`Resolved after ${randomTime} milliseconds`);
    }, randomTime);
  });
}

const promises = [
  createPromiseWithRandomTime(),
  createPromiseWithRandomTime(),
  createPromiseWithRandomTime()
];

Promise.any(promises)
  .then((result) => {
    // Print the result to the div with the id "output"
    document.getElementById('output').innerText = result;
  })
  .catch((error) => {
    console.error("All promises were rejected:", error);
  });
document.getElementById('btn').addEventListener('click', delayAndShowMessage);