function countSheeps(arrayOfSheep) {
    var result= arrayOfSheep.filter(function(x){
            return (x === true);
        }
    )
    return result.length

}