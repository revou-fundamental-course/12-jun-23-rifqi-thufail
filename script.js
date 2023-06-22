// Function to calculate celcius from fahrenheit
function calculateCelsius() {
  var celcSuhuFahrenheit = document.getElementById("inputFahrenheit").value;
  var celcSuhuCelcius = (celcSuhuFahrenheit - 32) / 1.8;
  document.getElementById("inputCelcius").value = celcSuhuCelcius;
}

// Function to calculate fahrenheit from celcius
function calculateFahrenheit() {
  var fahrSuhuCelcius = document.getElementById("inputCelcius").value;
  var fahrSuhuFahrenheit = fahrSuhuCelcius * 1.8 + 32;
  document.getElementById("inputFahrenheit").value = fahrSuhuFahrenheit;
}

// Convert Button Clicked
function convertButtonClick() {
  if (
    document.getElementById("inputFahrenheit").value == "" &&
    document.getElementById("inputCelcius").value == ""
  ) {
    alert("Mohon isi suhu!");
  } else if (
    document.getElementById("tempRow").classList.contains("tempRowReverse")
  ) {
    calculateCelsius();
  } else if (document.getElementById("tempRow").classList.contains("tempRow")) {
    calculateFahrenheit();
  } else {
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
  if (document.getElementById("tempRow").classList.contains("tempRowReverse")) {
    document.getElementById("tempRow").className = "tempRow";
  } else {
    document.getElementById("tempRow").className = "tempRowReverse";
  }
}

// Display the formula used in the converter.
function displayEquation() {
  var suhuFahrenheit = document.getElementById("inputFahrenheit").value;
  var suhuCelcius = document.getElementById("inputCelcius").value;
  if (document.getElementById("tempRow").classList.contains("tempRowReverse")) {
    var suhuCelcius = (suhuFahrenheit - 32) / 1.8;
    document.getElementById(
      "tempEquation"
    ).value = `(${suhuFahrenheit} - 32) / 1.8 = ${suhuCelcius}`;
  } else {
    var suhuFahrenheit = suhuCelcius * 1.8 + 32;
    document.getElementById(
      "tempEquation"
    ).value = `${suhuCelcius} * 1.8 + 32 = ${suhuFahrenheit}`;
  }
}
