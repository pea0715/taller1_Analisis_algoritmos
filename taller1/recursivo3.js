var n=10000 
var array=[];
function down(n)
{
	if (!n) return array; 
	array.push(n);
	down(n-1);
		
}
console.time("down");
down(n);
console.log(array);
console.timeEnd("down");
