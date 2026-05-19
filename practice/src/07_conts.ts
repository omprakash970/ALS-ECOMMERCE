const ROLES = ['admin', 'user', 'guest'] as const; 

type Role = (typeof ROLES)[number];

function setRole(r:Role){
  console.log(r); 
}
setRole('admin')