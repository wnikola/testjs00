let n = 4;
let lineMiddle = '*' + ' '.repeat(n) + '*';
let line;

for (let i = 1; i <= n; i++) {
    line = '';
    if (i === 1) {
        line = '';
        line = ' '.repeat(n - i) + '*' + ' '.repeat(n - i);
        console.log(line);
    }else if (i === n - 2) {
        line = '';
        line = ' '.repeat(n - i) + '*' + ' '.repeat(i - 1) + '*';
        console.log(line);
    }
    else if (i === n - 1) {
        line = '';
        line = ' '.repeat(n - i) + '*' + ' '.repeat(i) + '*';
        console.log(line);
    }
    else {
        line = '';
        line = ' '.repeat(n - i) + '*' + ' '.repeat(i + 1) + '*';
        console.log(line);
    }
}

for (let j = n; j >= 1; j--) {
    if (j === 1) {
        line = '';
        line = ' '.repeat(n - j) + '*' + ' '.repeat(n - j);
        console.log(line);
    } else if (j === n - 1) {
        line = '';
        line = ' '.repeat(n - j) + '*' + ' '.repeat(j) + '*';
        console.log(line);
    } else if (j === n - 2) {
        line = '';
        line = ' '.repeat(n - j) + '*' + ' '.repeat(j - 1) + '*';
        console.log(line);
    }
}

// console.log();

// for (let i = 1; i <= n; i++) {
//     if (i === 1) {
//         line = '';
//         line = ' '.repeat(n - i) + '*' + ' '.repeat(n - i);
//         console.log(line);
//     } else {
//         line = '';
//         line = ' '.repeat(n - i) + '*' + ' '.repeat(i) + '*';
//         console.log(line);
//     }
// }
