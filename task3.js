/* Task 3 */

/* Put your code here */
'use strict';
var t1 = + process.argv[2];
var t2 = + process.argv[3];
var sum = t1 + t2;
process.stdout.write(getResultString(sum / 3600|0, (sum % 3600)/60|0, sum % 60));

function getResultString(h,m,s) {
    var str;
    switch (ComputeEnding(h)){
        case 0:
            str = h + " часов ";
            break;
        case 1:
            str = h + " час ";
            break;
        case 2:
            str = h + " часа ";
            break;
        default:
            str = '';
    };
    switch (ComputeEnding(m)){
        case 0:
            str += m + " минут ";
            break;
        case 1:
            str += m + " минута ";
            break;
        case 2:
            str += m + " минуты ";
            break;
    };
    switch (ComputeEnding(s)){
        case 0:
            str += s + " секунд ";
            break;
        case 1:
            str += s + " секунда ";
            break;
        case 2:
            str += s + " секунды ";
            break;    
    };
    return str.trim();
};

function ComputeEnding(n) {
    var res = '';
    if (n === 0) {
        res = -1;
    }
    else {
        var num = n % 100;
        var num_mod = n % 10;
        if ((num >= 11) && (num <= 14) || (num_mod >= 5) || (num_mod === 0)) {
            res = 0;
        }
        else {
            if (num_mod === 1) {
                res = 1;
            }
            else {
                if (num_mod >= 2 && num_mod <= 4) {
                    res = 2;
                };
            };
        };
    };
return res;
};
