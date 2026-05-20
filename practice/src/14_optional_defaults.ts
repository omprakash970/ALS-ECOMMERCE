function greetPersonOptional(name?:string):string{
 const upperRes = name?.toUpperCase() ?? 'GUEST';
  return `Hello, ${upperRes}!`;
}