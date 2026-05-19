type Direction = 'left'|'right'|'up'|'down';
function move(d:Direction){
  console.log(`Moving in direction ${d}`);
}
const d1="left" 
move(d1) //ts infers d1 as string, not Direction
let d3:Direction = "up";
move(d3)