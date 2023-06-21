//Value from user to variables is JS
let suhuCelcius = document.getElementById("inputCelcius");
let suhuFahrenheit = document.getElementById("inputFahrenheit");
let calcFahrenheit;
//Calculate Celcius to Fahrenheit
function calculateFahrenheit(suhuFahrenheit) {
  calcFahrenheit = suhuCelcius * 1.8 + 32;

  document.getElementsByName("inputFahrenheit")[0].placeholder = calcFahrenheit;
}
