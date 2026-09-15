(function () {
  function processNumber(num, callback) {
    const result = callback(num);
    console.log(result);
    return result;
  }
  processNumber(5, function (n) {
    return n * 2;
  });
})();


(function () {
  function createCounter() {
    let count = 0;
    return function () {
      count++;
      return count;
    };
  }
  const counter = createCounter();
  console.log(counter());
  console.log(counter());
  console.log(counter());
})();


(function () {
  let arr3 = [1, 2, 3, 4, 5];
  arr3.push(6, 7);
  arr3.pop();
  console.log(arr3);
})();


(function () {
  let arr4 = [10, 20, 30];
  arr4.unshift(5);
  arr4.shift();
  console.log(arr4);
})();


(function () {
  const numbers = [10, 20, 30];
  const newArr = [];

  for (let i = 0; i < numbers.length; i++) {
    newArr[newArr.length] = numbers[i];
  }

  newArr[newArr.length] = 40;

  console.log(newArr);
})();


(function () {
  const fruits = ["Apple", "Mango", "Orange"];
  const vegetables = ["Carrot", "Potato"];

  fruits.push("Banana");
  fruits.pop();
  fruits.unshift("Grapes");
  fruits.shift();

  console.log(fruits);
  console.log(fruits.length);

  const combined = fruits.concat(vegetables);

  console.log(combined);
})();