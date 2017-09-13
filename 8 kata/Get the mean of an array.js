/**
 * Created by macbookpro on 13.09.2017.
 */
function getAverage(marks){
    return Math.floor(marks.reduce((sum, x) => sum + x) / marks.length);
}



// przed refaktoringiem:
function getAverage(marks){
    const result = marks.reduce(function(total,next){
                return total+= next;
            },0
        )/ marks.length;
    return Math.floor(result);
}