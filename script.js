// Function to calculate celcius from fahrenheit
function calculateCelsius() {
  var suhuFahrenheit = document.getElementById("inputFahrenheit").value;
  var suhuCelcius = (suhuFahrenheit - 32) / 1.8;
  document.getElementById("inputCelcius").value = suhuFahrenheit;
}

// Function to calculate fahrenheit from celcius
function calculateFahrenheit() {
  var suhuCelcius = document.getElementById("inputCelcius").value;
  var suhuFahrenheit = suhuCelcius * 1.8 + 32;
  document.getElementById("inputFahrenheit").value = suhuFahrenheit;
}

// Convert Button Clicked
function convertButtonClick() {
  if (document.getElementById("inputCelcius").value !== "") {
    calculateFahrenheit();
  } else if (document.getElementById("inputFahrenheit").value !== "") {
    calculateCelsius();
  } else {
    alert("Masukkan Suhu!");
  }
}

// Reset Button Clicked
function resetBtnClick() {
  document.getElementById("inputCelcius").value = "";
  document.getElementById("inputFahrenheit").value = "";
  document.getElementById("tempEquation").value = "";
}

// Reverse Button
function reverseBtn() {
  resetBtnClick();
  for (i = 0; i < document.styleSheets.length; i++) {
    void (document.styleSheets.item(i).disabled = true);
  }
}

// Display the formula used in the converter.
function displayEquation() {
  var suhuFahrenheit = document.getElementById("inputFahrenheit").value;
  var suhuCelcius = document.getElementById("inputCelcius").value;
  document.getElementById(
    "tempEquation"
  ).value = `${suhuCelcius.toString()} * 1,8 + 32`;
}
