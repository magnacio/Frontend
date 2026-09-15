
const doSomething = (callback) => {

  callback();
};

doSomething(() => {
  console.log("Task 1 - Callback executed");
});



const myPromise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Task 2 - Operation successful");
  } else {
    reject("Task 2 - Operation failed");
  }
});



myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("Task 3 - Promise handling complete");
  });



const fetchData = async () => {
  try {
    const result = await myPromise;
    console.log("Task 4 -", result);
  } catch (error) {
    console.error("Task 4 -", error);
  }
};

fetchData();


fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((data) => {
    console.log("Task 5 -", data);
  })
  .catch((error) => {
    console.error("Task 5 - Error:", error);
  });
