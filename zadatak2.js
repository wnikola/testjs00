let m = 1;
let n = 21;
let zbir = 0;
let counter = 0;
let prosek;

for (let i = m; i <= n; i++) {
    if (i % 7 === 0) {
        zbir += i;
        counter++;
    }
}

prosek = zbir / counter;

console.log(prosek);