/**
 * Created by macbookpro on 13.09.2017.
 */
function positiveSum(arr) {
    var result= arr.reduce(function(total, next) {
            return next >0 ? total+next : total;
        }, 0
    )
    return result
}