/**
 * Created by macbookpro on 13.09.2017.
 */
function sumArray(array) {
    return !array ? 0 : array.sort((a, b) => a - b).slice(1, -1).reduce((total, next) => total + next, 0)
}

