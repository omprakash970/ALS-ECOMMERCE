

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
const user2:User={
  id:2400033019,
  name:'Nancy', 
  createdAt:new Date(),
  email:'2400033019@kluniversity.in'
}

type Count = {
  [k:string]: number, 
}
type Count1 = Record<"likes"|"views"|"shares",number>
const c1 :Count={whatever:1}
const c2:Count1={likes:100, views:1000, shares:500} //error because random is not in the keys of Count1


