/**
 * Created by macbookpro on 13.09.2017.
 */
function find_average(marks) {
    const result = marks.reduce(function(total,next){
                return total+= next;
            },0
        )/ marks.length;
    return result;
}