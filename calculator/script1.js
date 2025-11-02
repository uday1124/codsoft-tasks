let display = document.getElementById("display");

function appendNumber(number) {
  display.value += number;
}

function appendOperator(operator) {
  const lastChar = display.value.slice(-1);
  if ("+-*/%".includes(lastChar)) {
    // prevent duplicate operators
    display.value = display.value.slice(0, -1);
  }
  display.value += operator;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}
