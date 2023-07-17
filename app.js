const buttons = document.querySelectorAll("button");
const displayBox = document.getElementById("result");
const operation = document.querySelectorAll(".operators");
console.log(operation);
//console.log(num);
let lastValue = "";
let currentValue = "";
let currentOperation = null;

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (
      e.target.innerHTML === "+" ||
      e.target.innerHTML === "-" ||
      e.target.innerHTML === "*" ||
      e.target.innerHTML === "/" ||
      e.target.innerHTML === "%"
    ) {
      if (lastValue !== null && currentOperation !== null) {
        operate(currentOperation);
      }
      lastValue = currentValue;
      currentValue = "";
      currentOperation = e.target.innerHTML;
    } else {
      currentValue += e.target.value;
      displayBox.value = currentValue;
    }
  });
});

const AC = document.getElementById("AC");

AC.addEventListener("click", () => {
  displayBox.value = "";
  currentValue = "";
  lastValue = "";
});

const sign = document.getElementById("-");

sign.addEventListener("click", () => {
  currentValue = -Number(displayBox.value);
  displayBox.value = currentValue;
});

operation.forEach((button) => {
  button.addEventListener("click", (e) => {
    currentOperation = e.target.innerHTML;
    console.log("currentOperation :", currentOperation);
  });
});

function operate(currentOperation) {
  //displayBox.value = "";
  if (currentOperation === "+") {
    //console.log(Number(lastValue) + Number(currentValue));
    currentValue = Number(lastValue) + Number(currentValue);
    currentOperation = "";
    lastValue = "";
    displayBox.value = currentValue;
    return displayBox.value;
  }
  if (currentOperation === "-") {
    //displayBox.value="";
    currentValue = Number(lastValue) - Number(currentValue);
    currentOperation = "";
    lastValue = "";
    displayBox.value = currentValue;
    return displayBox.value;
  }
  if (currentOperation === "*") {
    currentValue = Number(lastValue) * Number(currentValue);
    currentOperation = "";
    lastValue = "";
    displayBox.value = currentValue;
    return displayBox.value;
  }
  if (currentOperation === "/") {
    currentValue = Number(lastValue) / Number(currentValue);
    currentOperation = "";
    lastValue = "";
    displayBox.value = currentValue;
    return displayBox.value;
  }
  if (currentOperation === "%") {
    currentValue = (Number(lastValue) / 100) * Number(currentValue);
    currentOperation = "";
    lastValue = "";
    displayBox.value = currentValue;
    return displayBox.value;
  } else {
    return displayBox.value;
  }
}

const equals = document.getElementById("equal");

equals.addEventListener("click", () => {
  displayBox.value = operate(currentOperation);
});
