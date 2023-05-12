export function toFahrenheit(celsius) {
    var res = (celsius * 1.8) + 32.0;
    return parseFloat(res.toFixed(3));
}
  
export function sgRatio(tempFahrenheit) {
    var ratio = 1.00130346 - 0.000134722124 * tempFahrenheit + 0.00000204052596 * Math.pow(tempFahrenheit, 2) - 2.32820948E-9 * Math.pow(tempFahrenheit, 3);
    return ratio;
}

export function correctReading(calibration, density, temp) {
    var ratio = (sgRatio(toFahrenheit(temp)) / sgRatio(toFahrenheit(calibration)));
    var corrigido = density * ratio;
    return Math.floor(corrigido);
}