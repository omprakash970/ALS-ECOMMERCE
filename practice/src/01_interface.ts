//goal - understand when to let typescript infer types 
//ts - js very well 
//when ts will write the types / u r going to write 

let count=0; //ts sees it as number
const site = 'imoppie.tech' //ts sees it as string
const scores = [100, 98, 95] //ts sees it as number[]
 

//Over annotation isn't bad 
export function add(a:number, b:number):number{
  return a+b; 
}
console.log(add(5, 10))


//you should also annotate when the type is not obvious 
let maybe:String|number; 
maybe = Math.random()>0.5?"test":10; 
