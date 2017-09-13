function distinct(a) {
    return a.filter(function(item, pos) {
        return a.indexOf(item) == pos;
    })
}