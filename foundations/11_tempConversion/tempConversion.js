const convertToCelsius = function(temp) {
  const tempCelsius = (temp - 32) * (5/9);
  return Number.isInteger(tempCelsius) ? tempCelsius : Number(tempCelsius.toFixed(1));
};

const convertToFahrenheit = function(temp) {
  const tempFahrenheit = (temp * (9/5) + 32);
  return Number.isInteger(tempFahrenheit) ? tempFahrenheit : Number(tempFahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
