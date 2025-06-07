const fs = require('fs');
const letters = 'abcdefghijklmnopqrstuvwxyz';

function getRepeatedVarName(index) {
    let n = index;
    let length = 1;
    while (n > Math.pow(26, length)) {
        n -= Math.pow(26, length);
        length++;
    }
    n--;
    let name = '';
    for (let i = 0; i < length; i++) {
        name = letters[n % 26] + name;
        n = Math.floor(n / 26);
    }
    return name.padStart(length, letters[0]);
}

const obj = {};
for (let i = 1; i <= 1000; i++) {
    obj[getRepeatedVarName(i)] = i;
}
fs.writeFileSync('variables.json', JSON.stringify(obj, null, 2));
