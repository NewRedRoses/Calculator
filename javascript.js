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

const displaySelector = document.querySelector("#display");
function displayResult(displayValue) {
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
displayResult("Press any numbers & operations");
let numberA = "",
  operator = undefined,
  numberB = "";

function valueInitializer(number) {
  if (operator == undefined) {
    numberA += number;
  } else {
    numberB += number;
  }
}

function valuesReset() {
  numberA = "";
  operator = undefined;
  numberB = "";
}

// function isCompleteOperation() {
//   let conditional = false;
//   if (numberA != "" && operator != undefined && numberB != "") {
//     conditional = true;
//   }
//   return "Complete operation: " + conditional;
// }

// DOM button manipulations
const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", () => {
  displayResult("");
  valuesReset();
});

const divideButton = document.querySelector("#divide");
divideButton.addEventListener("click", () => {
  operator = "/";
  displayResult("/");
});

const addButton = document.querySelector("#add");
addButton.addEventListener("click", () => {
  operator = "+";
  displayResult("+");
});

const subtractButton = document.querySelector("#subtract");
subtractButton.addEventListener("click", () => {
  operator = "-";
  displayResult("-");
});

const multiplyButton = document.querySelector("#multiply");
multiplyButton.addEventListener("click", () => {
  operator = "*";
  displayResult("*");
});

const equalButton = document.querySelector("#equals");
equalButton.addEventListener("click", () => {
  console.log({ numberA }, { operator }, { numberB });
  value = operate(Number(numberA), operator, Number(numberB));
  if (isNaN(value)) {
    displayResult("Not a Number, press C");
  }
  numberA = String(value);
  numberB = "";
});

//  Digits
const oneButton = document.querySelector("#one");
oneButton.addEventListener("click", () => {
  valueInitializer("1");
  displayResult("1");
});

const twoButton = document.querySelector("#two");
twoButton.addEventListener("click", () => {
  valueInitializer("2");
  displayResult("2");
});

const threeButton = document.querySelector("#three");
threeButton.addEventListener("click", () => {
  valueInitializer("3");
  displayResult("3");
});

const fourButton = document.querySelector("#four");
fourButton.addEventListener("click", () => {
  valueInitializer("4");
  displayResult("4");
});

const fiveButton = document.querySelector("#five");
fiveButton.addEventListener("click", () => {
  valueInitializer("5");
  displayResult("5");
});

const sixButton = document.querySelector("#six");
sixButton.addEventListener("click", () => {
  valueInitializer("6");
  displayResult("6");
});

const sevenButton = document.querySelector("#seven");
sevenButton.addEventListener("click", () => {
  valueInitializer("7");
  displayResult("7");
});

const eightButton = document.querySelector("#eight");
eightButton.addEventListener("click", () => {
  valueInitializer("8");
  displayResult("8");
});

const nineButton = document.querySelector("#nine");
nineButton.addEventListener("click", () => {
  valueInitializer("9");
  displayResult("9");
});

const zeroButton = document.querySelector("#zero");
zeroButton.addEventListener("click", () => {
  valueInitializer("0");
  displayResult("0");
});
