/**
 * Created by macbookpro on 13.09.2017.
 */
function last(list){
    return arguments.length > 1 ? arguments[arguments.length - 1] :
        (list.length !== undefined ? list[list.length - 1] : list)
}