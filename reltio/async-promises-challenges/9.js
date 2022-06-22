function createAsyncTask() {
    const value = Math.floor(Math.random() * 10);
    return function(callback) {
      setTimeout(() => {
        callback(value);
      }, value * 1000);
    };
  }