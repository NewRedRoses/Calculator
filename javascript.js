// @TODO: Implement functionality to add 2 digit numbers like 10, 11, 12, etc.

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

function displayResult(displayValue) {
  const displaySelector = document.querySelector("#display");
  displaySelector.innerText = `${displayValue}`;
}

function operate(numberA, operator, numberB) {
  let value = 0;
  switch (operator) {
    case "+":
      value = add(numberA, numberB);
      displayResult(`${numberA} ${operator} ${numberB} = ${value}`);
      return value;
    case "-":
      value = subtract(numberA, numberB);
      displayResult(`${numberA} ${operator} ${numberB} = ${value}`);
      return value;
    case "*":
      value = multiply(numberA, numberB);
      displayResult(`${numberA} ${operator} ${numberB} = ${value}`);
      return value;
    case "/":
      value = divide(numberA, numberB);
      displayResult(`${numberA} ${operator} ${numberB} = ${value}`);
      return value;
  }
}
// Default value
displayResult("1+1=2");
let numberA = undefined,
  operator = undefined,
  numberB = undefined;

function valueInitializer(number) {
  if (numberA == undefined) {
    numberA = number;
  } else {
    numberB = number;
  }
}

function valuesReset() {
  numberA = undefined;
  operator = undefined;
  numberB = undefined;
}

// DOM button manipulations
const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", () => {
  displayResult("Reload the page lol");
});

const divideButton = document.querySelector("#divide");
divideButton.addEventListener("click", () => {
  operator = "/";
});

const addButton = document.querySelector("#add");
addButton.addEventListener("click", () => {
  operator = "+";
});

const subtractButton = document.querySelector("#subtract");
subtractButton.addEventListener("click", () => {
  operator = "-";
});

const multiplyButton = document.querySelector("#multiply");
multiplyButton.addEventListener("click", () => {
  operator = "*";
});

const equalButton = document.querySelector("#equals");
equalButton.addEventListener("click", () => {
  console.log({ numberA }, { operator }, { numberB });
  value = operate(numberA, operator, numberB);
  numberA = value;
});

//  Digits
const oneButton = document.querySelector("#one");
oneButton.addEventListener("click", () => {
  valueInitializer(1);
});

const twoButton = document.querySelector("#two");
twoButton.addEventListener("click", () => {
  valueInitializer(2);
});

const threeButton = document.querySelector("#three");
threeButton.addEventListener("click", () => {
  valueInitializer(3);
});

const fourButton = document.querySelector("#four");
fourButton.addEventListener("click", () => {
  valueInitializer(4);
});

const fiveButton = document.querySelector("#five");
fiveButton.addEventListener("click", () => {
  valueInitializer(5);
});

const sixButton = document.querySelector("#six");
sixButton.addEventListener("click", () => {
  valueInitializer(6);
});

const sevenButton = document.querySelector("#seven");
sevenButton.addEventListener("click", () => {
  valueInitializer(7);
});

const eightButton = document.querySelector("#eight");
eightButton.addEventListener("click", () => {
  valueInitializer(8);
});

const nineButton = document.querySelector("#nine");
nineButton.addEventListener("click", () => {
  valueInitializer(9);
});

const zeroButton = document.querySelector("#zero");
zeroButton.addEventListener("click", () => {
  valueInitializer(0);
});
