//value must be everything - intersection of all types
 
type Inter1 = {id:string}
type Inter2 = {createdAt:Date}; 

type Entity = Inter1 & Inter2;
const e:Entity={
  id:'1234',
  createdAt:new Date()
}

type NumberHolderUnique = {a:string}; 
type StringHolderUnique = {a:number};

type Product = {id:string; 
  title: string; 
}
type Priced = {price:number};
type PricedProduct = Product & Priced 
