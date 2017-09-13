function invert(array) {
    return array.map(function(x) {
        return x === 0 ? x : -x;
    });
}