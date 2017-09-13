// var number = function(busStops){
//   // Good Luck!
// }
const number = stops =>
stops.reduce(
    (total, next)=> total+next[0] - next[1],
    0
)