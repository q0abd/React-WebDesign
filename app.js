// const arr1 = [1,3]
// const arr2 = [2,4,5]
// const arr3 = arr1.concat(arr2).sort()
// let val = arr3.length
// if (val%2===0) {
//     console.log(((val/2)+(val/2)+1)/2);
// }else if(val%2!==0){
//     console.log(val/2+0.5);
// }

var S = 2;
var A = [1, 4, 2, 5]
function getValue(A, S) {
    var res = 0
    var sum = 0
    A.map((item, index) => {
        // console.log((sum = sum + item), index + 1);
        (sum += item) / (index + 1) === S && res++;
        var j = 1;
        var cnt = 0;
        for (let i = index + 1; i < A.length; i++) {
            (cnt += A[i]) / j === S && res++;
            j++;
        }
    })
    console.log(`res`,res);
}
getValue(A,S)