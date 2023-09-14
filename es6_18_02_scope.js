// 안에서는 밖을 참조할 수 있다
const a = 200;
{
  // const a = 100;
  console.log(a); // 지역변수 주석시 200 , 주석 아닐 때 100
  // 블럭 안에 없다면 그 블럭을 빠져나가서 그 블럭을 포함하는 부모 범위로 넘어가서 찾는다
  // 블럭 안에서는 외부에 있는 변수를 참조할 수 있다
}
console.log(a);

// 밖에서는 안을 참조할 수 없다
//const a = 200;
{
  const a = 100;
  // console.log(a);
}
console.log(a);

/* 실제론 이렇게 블럭이 있다고 생각하면 된다  
{ const a = 200;
{
  const a = 100;
  console.log(a);
}
console.log(a);
} 
*/

// 결과는 동일하지만 조금이나마 메모리 고려한다면
// 메모리 효율성 방법으로 보면 d의 선언은 해당 블럭 안에서 선언해야 좋다
const c = 200;
const d = 100;
{
  // const d = 100;
  console.log(d); // 쉽게 빨리 찾을 수 있고
}
// 블럭 끝나고 나면 d는 밖에서 참조하지 않기 때문에 가비지컬렉터 대상이 되어져 삭제가 가능하다
console.log(c);

// 함수 -------------------
function print() {
  const message = 'Hello! Javascript!';
  console.log(message);
}
print();
// console.log(message); // ReferenceError: message is not defined

function sum(c, d) {
  console.log(c + d);
}
sum(1, 2); // 3
console.log(c + d); // ReferenceError: a is not defined

for (let i = 0; i < 10; i++) {
  console.log(i); // 0 ~ 9
}
console.log(i); // ReferenceError: i is not defined
// 메모리에 갔더니 없다 메모리 참조의 에러 : ReferenceError ( scope 범위부터 확인해봐야한다 )
