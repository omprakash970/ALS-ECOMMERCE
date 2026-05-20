function func1(a:number, b: number):number{
  return a+b;
}
const nums12=[1, 2, 3];

const doubled = nums12.map((n:number)=>n*2);

function func2(a:number, b:number):number{
  return a*b;
}
console.log(func1(2, 3));
console.log(doubled);
console.log(func2(4, 5));
type Point={
  x:number, 
  y:number
}
function DistanceFromOrigin(p:Point):number{
  return Math.sqrt(p.x**2 + p.y**2);
}
console.log(DistanceFromOrigin({x:3, y:4}));