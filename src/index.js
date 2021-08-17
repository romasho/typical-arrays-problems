
exports.min = function min (array) {
  return (array.sort(function(a,b) {return a-b})[0])
}

exports.max = function max (array) {
  return (array.sort(function(a,b) {return b - a})[0])
}

exports.avg = function avg (array) {
  let sum = 0
  for (let i = 0; i <array.length; i++) {
    sum += array[i]
  }
 return  (sum / array.length)
}
