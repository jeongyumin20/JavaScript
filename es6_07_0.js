/** ES5 template literal */
var name = '홍길동5';
var greeting = 'Hello my name is ' + name;

console.log(greeting);

/** ES6 template literal */
let name6 = '홍길동6';
let greeting6 = `Hello my name is ${name6}`; //백틱(backtick) 사용

console.log(greeting6);

// es6_07_02
/** ES5 template literal */
var a = 1;
var b = 10;
console.log('1 * 10 = ' + a * b); //1 * 10 = 10

/** ES6 template literal */
let a6 = 1;
let b6 = 10;
console.log(`1 * 10 = ${a6 * b6}`); //1 * 10 = 10

// es6_07_03
/** ES5 template literal */
var text =
  'hello, \
my name is 홍길동 \
how ar you? ';
console.log(text);

/** ES6 template literal */
const text6 = `hello,
my name is 홍길동
how are you? `;
console.log(text6);
