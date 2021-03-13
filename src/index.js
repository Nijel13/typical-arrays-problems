
exports.min = function min (array) {
  if(array === undefined || array.length === 0) {
    return 0
  }
  let minimum = 0
  for (let i = 0; i < array.length; i += 1){
      if (minimum > array[i]){
        minimum = array[i]
      }
  }
  return minimum
}

exports.max = function max (array) {
  if(array === undefined || array.length === 0) {
    return 0
  }
  let maximum = 1
  for (let j = 0; j < array.length; j += 1){
      if (array[j] > maximum ){
        maximum = array[j]
      } 
    } 
    return maximum
}

exports.avg = function avg (array) {
  if(array === undefined || array.length === 0) {
    return 0
  }
  let average, sum = 0
    for (let k = 0; k < array.length; k += 1){
      sum = sum + array[k]
    }
    average = sum / array.length
      return average
  }