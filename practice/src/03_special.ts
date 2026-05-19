let substring:string|undefined; 
//void: function that deoesn't return a useful value 

function log(message:string):void{
  console.log(message); 
}
log('Hello World')

//Do Not Use Any as much as possible - it defeats the purpose of using typescript in the first place



function fail(message: string):never{
  throw new Error(message); 
}