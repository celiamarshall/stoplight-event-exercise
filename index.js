(function() {
  'use strict';
  const stopButton = document.querySelector('#stopButton')
  function turnRed() {
    const stopLight = document.querySelector('#stopLight')
    stopLight.classList.toggle('stop')
  }
  stopButton.addEventListener ('click', turnRed)
  //stopButton.removeEventListener('click', turnRed)

  
  const slowButton = document.querySelector('#slowButton')
  function turnYellow() {
    document.querySelector('#slowLight').classList.toggle('slow')
  }
  slowButton.addEventListener('click', turnYellow)

  const goButton = document.querySelector('#goButton')
  function turnGreen() {
    document.querySelector('#goLight').classList.toggle('go')
  }
  goButton.addEventListener('click', turnGreen)

  stopButton.addEventListener ('mouseenter', () => {
    console.log('Entered stop button')
  })
  
  stopButton.addEventListener ('mouseleave', () => {
    console.log('Left stop button')
  })

  slowButton.addEventListener ('mouseenter', () => {
    console.log('Entered slow button')
  })

  slowButton.addEventListener ('mouseleave', () => {
    console.log('Left slow button')
  })

  goButton.addEventListener ('mouseenter', () => {
    console.log('Entered go button')
  })

  goButton.addEventListener ('mouseleave', () => {
    console.log('Left go button')
  })
})();
