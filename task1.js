/* Task 1 */
/* Put your code here */
'use strict';
var n = + process.argv[2];
var e = + process.argv[3];
process.stdout.write(sumOfPower(n, e).toString());

function sumOfPower(n, e) {
//return e > 1 ? (Math.pow(n,e) + SumOfPower(n,e - 1)) : 1;
var res;
if (n > 1) {
res = power(n, e) + sumOfPower(n - 1, e);
}
else {
res = 1;
};
return res;
};

function power(n,e){
	var res = 1;
	var p;
	e > 0 ? p = e: p = ~e + 1; //abs
	for (var i = 0;i < p; i++) {
		res *= n;
	};
	
	if (e < 0){
	    res= 1 / res;
	};
	return res;
};
