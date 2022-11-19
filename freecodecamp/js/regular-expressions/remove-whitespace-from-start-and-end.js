let hello = "   Hello, World!  ";
let wsRegex = /[\s+]*[^\w,!][\s+]/g; // Change this line
let result = hello.replace(wsRegex, ''); // Change this line