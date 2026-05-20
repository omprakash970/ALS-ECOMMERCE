function sumAllNumbers(...xs:number[]):number{
return xs.reduce((s, n)=>s+n, 0);
}
console.log(sumAllNumbers(1, 2, 3)); //6
function makeRange(...args:[start:number, end:number, step?:number]):number[]{
  const [start, end, step=1] = args;
  const result:number[] = [];
  for(let n=start; n<=end; n+=step){
    result.push(n);
  }
  return result;
}