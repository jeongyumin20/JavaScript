'use strict';

const i = 100;
for (let i = 0; i < 5; i++) {}
console.log(i);

// var person = '홍길동'; 과 같이 동작된다
// person = '홍길동'; // 키워드가 없이 선언한 경우에도 출력이 된다
var person = '홍길동';
var person = '홍길순';

console.log(person); // 홍길순 인터프리터 방식으로 가장 마지막 선언의 데이터가 들어간다

// 3) 예시
var fruit = 'apple'; // 전역
// var 키워드는 {} 의 의미가 없다
{
  var fruit = 'orange'; // 로컬 ?
  console.log(fruit); // orange
}
console.log(fruit); // orange

// 4) 예시
var test = 'test';
function varTest() {
  var test = 'test2';
  // console.log(test);
}
console.log(test);
varTest();
