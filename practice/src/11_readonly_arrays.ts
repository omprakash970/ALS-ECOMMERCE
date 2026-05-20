const ys =[1,2,3] as const; 
const nums:readonly number[]=[4, 5, 6];


let s:number; 

function sum(arr:readonly number[]):number{
  for(const n of nums){
    s+=n; 
  }
  return s;
}

console.log(sum(nums));