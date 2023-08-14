function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(numberA, operator, numberB) {
  switch (operator) {
    case "+":
      console.log(add(numberA, numberB));
      break;
    case "-":
      console.log(subtract(numberA, numberB));
      break;
    case "*":
      console.log(multiply(numberA, numberB));
      break;
    case "/":
      console.log(divide(numberA, numberB));
      break;
  }
}

operate(1, "/", 2);
