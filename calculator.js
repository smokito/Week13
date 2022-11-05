let firstcount;
let secondcount;
let result;

function addNumbers() {
  firstcount = prompt("Enter the first number");
  secondcount = prompt("Enter the second number");
  result = +firstcount + +secondcount;
  alert(`Your result is: ${result}`);
}

function subtractNumbers() {
  firstcount = prompt("Enter the first number");
  secondcount = prompt("Enter the second number");
  result = +firstcount - +secondcount;
  alert(`Your result is: ${result}`);
}

function multiplyNumbers() {
  firstcount = prompt("Enter the first number");
  secondcount = prompt("Enter the second number");
  result = +firstcount * +secondcount;
  alert(`Your result is: ${result}`);
}

function divideNumbers() {
  firstcount = prompt("Enter the first number");
  secondcount = prompt("Enter the second number");
  result = +firstcount / +secondcount;
  alert(`Your result is: ${result}`);
}
