/**
 * Created by macbookpro on 13.09.2017.
 */
class SmallestIntegerFinder {
    findSmallestInt(args) {
        return args.reduce(function (first,next) {
                return first < next? first :next
            }
        )
    }
}