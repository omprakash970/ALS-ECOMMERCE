"use strict";
function greetPersonOptional(name) {
    const upperRes = name?.toUpperCase() ?? 'GUEST';
    return `Hello, ${upperRes}!`;
}
