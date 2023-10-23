let miPromesa = new Promise((resolved,rejected) =>  {
    let expression = true;
    if (expression) {
        resolved('something');
    }else {
        rejected('something else..');
    }
});

miPromesa.then(
  valor => console.log(valor), 
  error => console.log(error)
);




//miPromesa.then((valor => console.log(valor)).catch( error => console.log(error)));
/* let x = 0;

const myPromise = new Promise((resolve, reject) => {
  // giAsynchronous code here
  if (x>0) {
    let result = 'x is greater than 0'
    resolve(result);
  } else {
    let error = 'x is equal to or less than 0'
    reject(error);
  }
});

myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    // Handle error
    console.error(error);
  }); 
  
  //Another example

  // Function that returns a promise to simulate an asynchronous operation
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { message: "Data has been fetched!" };
      resolve(data); // Simulate a successful response
      // If there was an error, you could use reject(error) instead
    }, 2000); // Simulate a 2-second delay
  });
}

// Using the promise
console.log("Fetching data...");

fetchData()
  .then((result) => {
    console.log("Success:", result.message);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
  
  
  */