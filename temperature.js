function celsiusToFahrenheit (celsius) {
    let celsiusInF = (celsius *9)/5+32;
    console.log(celsius + "C is " + celsiusInF + "F");
}

function fahrenheitToCelsius(fahrenheit) {
  let fahrenheitInC = ((fahrenheit - 32)*5)/9;
  console.log(fahrenheit + "F is" + fahrenheitInC + "C");
}

celsiusToFahrenheit(32);
fahrenheitToCelsius(60);