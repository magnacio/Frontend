
function sum(a, b) {
  return a + b;
}
console.log(sum(4, 7));


function printEvens(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}
printEvens(10);



const factorial = (n) => {
  return n <= 1 ? 1 : n * factorial(n - 1);
};
console.log(factorial(5));



var globalVar = "I am global";

function scopeDemo() {
  var functionScoped = "I am function scoped";
  let alsoFunctionScoped = "I am also function scoped (block-limited)";
  console.log(globalVar);
  console.log(functionScoped);

  if (true) {
    var innerVar = "var ignores block scope";
    let innerLet = "let respects block scope";
    const innerConst = "const respects block scope";
    console.log(innerVar);
    console.log(innerLet);
    console.log(innerConst);
  }

  console.log(innerVar);
}
scopeDemo();



console.log(hoistedVar);
var hoistedVar = "initialized var";

try {
  console.log(hoistedLet);
  let hoistedLet = "initialized let";
} catch (e) {
  console.log(e.message);
}

try {
  console.log(hoistedConst);
  const hoistedConst = "initialized const";
} catch (e) {
  console.log(e.message);
}

hoistedFunction();
function hoistedFunction() {
  console.log("Function declaration is fully hoisted");
}