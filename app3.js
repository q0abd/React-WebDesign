let a = [1, 3]
let b = [2, 4]
let ab = [...a, ...b].sort((a, b) => a - b)
// 1,2,3,4,6,11
if (ab.length % 2 !== 0) {
  var middle = [...ab].reverse().reduce((c, v, i) => {
    if (v === ab[i]) c = v
    return c
  })
  console.log(middle);
} else {
  var middleIndex = ab.length / 2
  var fHalf = ab.splice(middleIndex, 1)
  var sHalf = ab.splice(-middleIndex, 1)
  var total = [...fHalf, ...sHalf].reduce((item, value) => {
    return item += value / 2
  }, 0)
  console.log(fHalf);
}