"use strict";
function func1(a, b) {
    return a + b;
}
const nums12 = [1, 2, 3];
const doubled = nums12.map((n) => n * 2);
function func2(a, b) {
    return a * b;
}
console.log(func1(2, 3));
console.log(doubled);
console.log(func2(4, 5));
function DistanceFromOrigin(p) {
    return Math.sqrt(p.x ** 2 + p.y ** 2);
}
console.log(DistanceFromOrigin({ x: 3, y: 4 }));
