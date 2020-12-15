document.querySelector('h1').style.cssText = "font-size: 36px; font-weight: bold; font-variant: small-caps; text-align: center; text-decoration: underline; text-shadow: 3px 3px 0px #7f8c8d;";

function celciusToFahrenheit(){
    let celcius = document.getElementById('celcius').value;
    let fahrenheit = (celcius* 9/5) + 32;
    document.getElementById('fahrenheit').value = fahrenheit;
}

function fahrenheitToCelcius(){
    let fahrenheit = document.getElementById('fahrenheit').value;
    let celcius = (fahrenheit - 32) * 5/9;
    document.getElementById('celcius').value = celcius;
}