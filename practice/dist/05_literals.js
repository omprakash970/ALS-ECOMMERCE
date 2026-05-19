"use strict";
function move(d) {
    console.log(`Moving in direction ${d}`);
}
const d1 = "left";
move(d1); //ts infers d1 as string, not Direction
let d3 = "up";
move(d3);
