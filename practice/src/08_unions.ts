function printId(id:number|string){
  if(typeof id==="string"){
   id.toLocaleLowerCase();
  }else{
   id.toFixed(2);
  }
}
//object union 
type Admin = {
  role: 'Admin';
  permissions:string[]; 
}
type Customer={
  role:'Customer';
  loyalityPoints:number;
}
function DescribeUser(user:Admin|Customer){
  if(user.role==='Admin'){
    console.log(user.permissions.join(', '));
  }
  else{
    console.log(user.loyalityPoints);
  }
}
function describeUserwithInOperator(user:Admin|Customer){
  if('persmissions' in user){
    console.log(user.role, 'Admin User'); 
  }
  if('loyalityPoints' in user){
    console.log(user.role, 'Customer User'); 
  }

}

const arrofUnion:(string|number)[]=["a", 1, "b", "2"]; 
const unionOfArrays:string[]|number[]=Math.random()>0.1?["a", "b", "c"]:[1, 2, 3];
