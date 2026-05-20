"use strict";
function sumAllNumbers(...xs) {
    return xs.reduce((s, n) => s + n, 0);
}
console.log(sumAllNumbers(1, 2, 3)); //6
