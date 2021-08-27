const arr = [2, 3, 8, 6, 4]
const num = 9

var find = function(arr, num) {
  const lookup = {};
  let j;
  for (let i = 0; i < arr.length; i++) {
      j = num - arr[i];
      if (lookup.hasOwnProperty(j)) {
          return [lookup[j], i];
      }
      lookup[arr[i]] = i;
  }
  // return output;
}
console.log(find(arr, num));