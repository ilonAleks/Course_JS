// const temperatureInCelsius = prompt('Enter the temperature in degrees Celsius');

// if (temperatureInCelsius === 0) {
// 	debugger
// 	alert('0 Celsius degrees - this is the temperature of freezing water')
// } else if (temperatureInCelsius > 0) {
// 	debugger
// 	alert('To freeze water, the temperature should be 0 degrees Celsius or below');
// }

// const temperatureInFahrenheit = (temperatureIncelsius) * 9 / 5 + 32;
// debugger
// alert(`%{temperatureInCelsius} Celsius degrees is %{temperatureInFahrenheit} to Fahrenheit.`);

const temperatureInCelsius = prompt('Enter the temperature in degrees Celsius');

if (temperatureInCelsius == 0) {
	alert('0 Celsius degrees - this is the temperature of freezing water')
} else if (temperatureInCelsius > 0) {
	alert('To freeze water, the temperature should be 0 degrees Celsius or below');
}

const temperatureInFahrenheit = (temperatureInCelsius) * 9 / 5 + 32;
alert(`${temperatureInCelsius} Celsius degrees is ${temperatureInFahrenheit} to Fahrenheit.`);

