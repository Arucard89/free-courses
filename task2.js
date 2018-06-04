/* Task 2 */
/* Put your code here */
'use strict';
var str = process.argv[2];
var k = + process.argv[3];
console.log(str.replace(/[a-z]/gi, function (c, offset, s) {
    return String.fromCharCode(s.charCodeAt(offset) + k);
}));