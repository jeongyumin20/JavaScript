/** const - block scope variable */
// const 이 파일 안에서 변경되지 않는다
const z = 'I am a constant'; // 상수 : 값이 설정되면 재설정 불가능
//z = "I can't be reassign";  // const 선언으로 재설정이 불가능 : 에러

console.log(z);

/** const - 객체 정의 */
const person = {
  name: '홍길동',
  age: 30,
};

person.age = 35; // 변수 형태로 할당되어 변경이 가능하다
console.log(person.age);
