/* Task 1 */

/* Put your code here */
'use strict';
var n = + process.argv[2];
var e = + process.argv[3];
process.stdout.write(SumOfPower(n, e));

function SumOfPower(n, e) {
    //return e > 1 ?  (Math.pow(n,e) + SumOfPower(n,e - 1)) : 1;  
    var res;
    if (e > 1) {
        res = Math.pow(n, e) + SumOfPower(n, e - 1);
    }
    else {
        res = 1;
    };
    return res;
}