/** var - function scope variable */

for (var i = 0; i < 10; i++) {
  var leak = 'I am available outside of the loop';
}
console.log(i);
console.log(leak);

var fscope = 'I am available inside this function';
var gname = '';
function myfunction(name) {
  gname = name;
  console.log(name);
  console.log(fscope);
}
console.log(fscope);
console.log(gname);

myfunction('홍길동');

/* 
var fscope = 'I am available inside this function';

function myfunction() {
  console.log(fscope);
}
console.log(fscope); 
*/
