// 함수는 선언과 초기화가 같이 이루어진다

/* function print() {
  console.log('hello ~ js!');
} */

print(); // print[0013403] 이니셜 라이징   print[] 정의
// let a; 이 상태와 같은 것
// console.log(b); // // ReferenceError: b is not defined
// console.log(obj); // // ReferenceError: Cannot access 'obj' before initialization
console.log(func); // eferenceError: Cannot access 'func' before initializatio
console.log(a); // ReferenceError: Cannot access 'a' before initialization

// 이렇게 적은 것을 선두로 올린다
function print() {
  console.log('hello ~ js!');
}

let a = 10;
let obj = {
  name: 'hong',
};

// 함수 표현식은 정의 변수처럼 사용되어 호이스팅 선언만 발생 ( 초기화 x )
let func = function () {
  console.log('test');
};
