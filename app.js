let calculatorScreen = document.querySelector(".calculator-screen");
let key = document.querySelectorAll(".key");

let allKeys = Array.from(key);
let keyValues = "";

allKeys.forEach((keys) => {
  function calculateResult() {
    if (keys.innerHTML == "AC") {
      keyValues = "";
      calculatorScreen.value = "";
    } else if (keys.innerHTML == "=") {
      try {
        keyValues = eval(keyValues);
        calculatorScreen.value = keyValues;
      } catch (error) {
        calculatorScreen.value = "Error";
      }
    } else {
      keyValues += keys.innerHTML;
      calculatorScreen.value = keyValues;
    }
  }

  keys.addEventListener("click", calculateResult);
});
