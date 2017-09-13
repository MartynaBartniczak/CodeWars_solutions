const squareSum = numbers =>numbers.reduce((total,next)=> total + next * next,0)


//przed refaktoringiem
function squareSum(numbers){
    return numbers.reduce(function(sum, n){
        return (n*n) + sum;
    }, 0)
}