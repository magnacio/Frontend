
let hasId = true;

let check1 = (age >= 18) && hasId;
let check2 = (age < 18) || hasId;
let check3 = !hasId;

console.log("1. Age is 18 or above AND has ID:", check1);
console.log("2. Age is below 18 OR has ID:", check2);
console.log("3. NOT hasId:", check3);

