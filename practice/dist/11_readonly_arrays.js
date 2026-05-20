"use strict";
const ys = [1, 2, 3];
const nums = [4, 5, 6];
let s;
function sum(arr) {
    for (const n of nums) {
        s += n;
    }
    return s;
}
console.log(sum(nums));
