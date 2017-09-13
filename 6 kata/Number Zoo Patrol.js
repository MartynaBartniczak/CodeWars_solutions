function findNumber(array) {
    var sorted = array.sort((x,y) => x-y)
    var count = array[array.length - 1];
    var missing = [];
    for ( var i = 1; i <= count; i++ ) {
        if (sorted.indexOf(i) == -1) {
            missing.push(i);
        }
    }
    return missing.toString()
}