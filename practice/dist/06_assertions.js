"use strict";
const raw = '{"id":1, "name":"John", "age":30}';
const riskyUser = JSON.parse(raw);

  
console.log(riskyUser.name.toUpperCase());
function isUser(v) {
    return (typeof v === 'object' && v !== null && "id" in v &&
        typeof v.id === "number" && "name" in v &&
        typeof v.name === "string");
}
const maybe = JSON.parse(raw);
if (isUser(maybe)) {
    console.log(maybe.name.toUpperCase());
}
