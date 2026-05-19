"use strict";
let substring;
//void: function that deoesn't return a useful value 
function log(message) {
    console.log(message);
}
log('Hello World');
//Do Not Use Any as much as possible - it defeats the purpose of using typescript in the first place
function fail(message) {
    throw new Error(message);
}
