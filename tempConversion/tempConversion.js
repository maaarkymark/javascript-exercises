const ftoc = function (fahrenheitTemp) {
  let celsiusTemp = (fahrenheitTemp - 32) * (5 / 9);
  let roundedCelsiusTemp = Math.round(celsiusTemp * 10) / 10;
  return roundedCelsiusTemp;
}

const ctof = function (celsiusTemp) {
  let fahrenheitTemp = celsiusTemp * (9 / 5) + 32;
  let roundedFahrenheitTemp = Math.round(fahrenheitTemp * 10) / 10;
  return roundedFahrenheitTemp;
}

ftoc(32);
ftoc(100);
ftoc(-100);

ctof(0);
ctof(73.2);
ctof(-10);

module.exports = {
  ftoc,
  ctof
}