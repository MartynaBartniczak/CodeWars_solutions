/**
 * Created by macbookpro on 13.09.2017.
 */
function countPositivesSumNegatives(input) {
    return (input && input.length) ? [
        input.filter(x => x > 0).length,
        input.reduce((t, c) => c < 0 ? t + c : t, 0)
] : [];
}