// Create a function which receives a function as argument and executes it after 2 seconds 

function callbackExec(callback) {
    if (typeof callback === 'function') {
        setTimeout(() => {
            callback();
            console.log('Callback is executed after 2 seconds');
      }, 2000);
    }
  }
  
  function displayHello() {
      console.log('Hello');
  }
  
  callbackExec(displayHello);