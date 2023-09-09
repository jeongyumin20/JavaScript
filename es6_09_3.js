/** 배열 디스트럭처링 */
const person = ['hong', 'gildong', 30];
const [name, sname, age] = person; // 인덱스 기준으로 들어간다

console.log('--------------> person');
console.log(name, sname, age);
console.log(`name : ${name}, sname : ${sname}, age : ${age}`);

/** person2 */
const person2 = ['hong', 'gildong', 30];
const [name2, sname2] = person2;
// 주소 값으로 할당되었기 때문에 undefined가 아닌 ReferenceError

console.log('--------------> person2');
//console.log(name2, sname2, age2); //age2는 변수로 할당되지 않아, ReferenceError 발생
console.log(`name : ${name2}, sname : ${sname2}`);

/** person3 & rest operator(레스트 연산자) */
const fruits = ['사과', '복숭아', '수박', '자두', '멜론'];
const [f1, f2, ...food] = fruits;
// 레스트 연산자 스프레드 문법과 다르다 : 나머지 값을 새로 모아서 만들어주는데 값이 3개로 배열로 만들어준다
// 마지막에 위치해야한다

console.log('--------------> fruits');
console.log(f1, f2); // 사과 복숭아
console.log(food); // [ '수박', '자두', '멜론' ]

// 배열 for문
for (fr of food) {
  console.log(fr);
}

// 0 --> 수박
// 1 --> 자두

for (frIdx in food) {
  console.log(`${frIdx} --> ${food[frIdx]}`);
}

// forEach 정리 추가하기
