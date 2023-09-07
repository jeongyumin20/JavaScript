/** TDZ(Temporal Dead Zone) */
console.log(i); // var i; 라고 생각해서 정의와 초기화 일어남
var i = 'I am a var';

console.log(j);
let j = 'I am a let'; // ReferenceError: Cannot access 'j' before initialization
