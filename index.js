(function() {
  'use strict';
  const stopButton = document.querySelector('#stopButton')
  function turnRed() {
    const stopLight = document.querySelector('#stopLight')
    stopLight.classList.add('stop')
  }
  stopButton.addEventListener ('click', turnRed)
  
  const slowButton = document.querySelector('#slowButton')
  function turnYellow() {
    document.querySelector('#slowLight').classList.add('slow')
  }
  slowButton.addEventListener('click', turnYellow)

  const goButton = document.querySelector('#goButton')
  function turnGreen() {
    document.querySelector('#goLight').classList.add('go')
  }
  goButton.addEventListener('click', turnGreen)
})();
