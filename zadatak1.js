let n = 10;
let k = 5;
let zbir = 0;

for (let j = 0; j <= n; j++) {
    zbir += Math.pow(-1, j) * ((j + 1) / (k + j))
}

console.log(zbir);

// alternativno (ako ovo gore nije tacno <3)
// zbir = 0;

// for (let i = 0; i <= n; i++) {
//     zbir += (i + 1) / (k + i);
// }

// console.log(zbir);