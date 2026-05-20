import { To } from "react-router-dom";

type Person1 ={
  id:string, 
  name:string,
  salary:number
}
const person:Person1={
  id:'1234',
  name:'Oppie',
  salary:50000
}
type status = 'active'|'inactive'|'pending';
function nextActionCheck(s:status):string{
  switch(s){
    case 'active':
      return 'Continue working';
    case 'inactive':
      return 'Take a break';
    case 'pending':
      return 'Wait for approval';
  }
}
type ToMerge1={price:number}; 
type ToMerge2 = {stock:number}; 

type MergedProductInfo = Person1 &ToMerge1 & ToMerge2;
