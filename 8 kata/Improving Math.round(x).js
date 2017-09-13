Math.roundTo = function (number, precision) {
    return Number(number.toFixed(precision));
}

//przed refaktoringiem
Math.roundTo = function (a, b) {
//   return a.toFixed(b);
// } {
    var multiplier = Math.pow(10, b);

    return (Math.round(a * multiplier) / multiplier);
}