const convertToCelsius = function(f) 
{
  let celcius = (f-32)*(5/9);
  let roundedC = Math.round(celcius*10)/10;
  return roundedC;
};

const convertToFahrenheit = function(c) 
{
  let fahrenheit = (c*9/5)+32;
  let roundedF = Math.round(fahrenheit*10)/10;
  return roundedF;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
