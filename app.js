const arr1 = [8, 9]
const arr2 = [10, 1, 3]
const arr3 = [...arr1, ...arr2].sort((a, b) => a - b)
// [1,8,9,10]
console.log(arr3);


let orta = arr3.length / 2
if (orta % 2 !== 0) {
    var middle = [...arr3].reverse().reduce((c, v, i) => {
        if (v === arr3[i]) c = v
        return c
    })
    console.log(middle);
} else {
    let ong = arr3.splice(orta, 1)
    let chap = arr3.splice(-orta, 1)

    let ortaQiymat = [...ong, ...chap]
    let a = ortaQiymat.reduce((item, val) => {
        return item += val / 2
    }, 0)
    console.log(a);
}



// if (val%2===0) {
//     console.log();
// }

// var S = 2;
// var A = [1, 4, 2, 5]
// function getValue(A, S) {
//     var res = 0
//     var sum = 0
//     A.map((item, index) => {
//         // console.log((sum = sum + item), index + 1);
//         (sum += item) / (index + 1) === S && res++;
//         var j = 1;
//         var cnt = 0;
//         for (let i = index + 1; i < A.length; i++) {
//             (cnt += A[i]) / j === S && res++;
//             j++;
//         }
//     })
//     console.log(`res`,res);
// }
// getValue(A,S)