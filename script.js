// Calculate Celsius from Fahrenheit
function calculateCelsius() {
  let suhuFahrenheit = document.getElementById("inputFahrenheit").value;
  let suhuCelcius = (suhuFahrenheit - 32) / 1.8;
  document.getElementById("inputCelcius").value = suhuFahrenheit;
}

// Calculate Fahrenheit from Celsius
function calculateFahrenheit() {
  let suhuCelcius = document.getElementById("inputCelcius").value;
  let suhuFahrenheit = suhuCelcius * 1.8 + 32;
  document.getElementById("inputFahrenheit").value = suhuFahrenheit;
}

//Button Clicked
function convertButtonClick() {
  if (document.getElementById("inputCelcius").value !== "") {
    calculateFahrenheit();
  } else if (document.getElementById("inputFahrenheit").value !== "") {
    calculateCelsius();
  } else {
    alert("Hello! I am an alert box!!");
  }
}
