function largestAdjacent(arr){
  var max = arr[0] * arr[1];
  for (var i = 1; i<arr.length-1; i++){
    if (arr[i] * arr[i+1] > max){
      max = arr[i] * arr[i+1]
    } 
  }
  return max;
}


console.log(largestAdjacent([3,5,-2,-5,7,3]))
console.log(largestAdjacent([2,4,1,5,3,2,4,3]))
