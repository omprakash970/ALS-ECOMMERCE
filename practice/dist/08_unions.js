"use strict";
function printId(id) {
    if (typeof id === "string") {
        id.toLocaleLowerCase();
    }
    else {
        id.toFixed(2);
    }
}
function DescribeUser(user) {
    if (user.role === 'Admin') {
        console.log(user.permissions.join(', '));
    }
    else {
        console.log(user.loyalityPoints);
    }
}
function describeUserwithInOperator(user) {
    if ('persmissions' in user) {
        console.log(user.role, 'Admin User');
    }
    if ('loyalityPoints' in user) {
        console.log(user.role, 'Customer User');
    }
}
const arrofUnion = ["a", 1, "b", "2"];
const unionOfArrays = Math.random() > 0.1 ? ["a", "b", "c"] : [1, 2, 3];
