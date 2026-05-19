

type User={
  id:number; 
  name:string;
  email?:string; 
  readonly createdAt:Date; //cannot be changed after initialization
}
const user1:User={
  id:2400032058,
  name:'Oppie', 
  createdAt:new Date(), 
  email:'2400032058@kluniversity.in'
}

