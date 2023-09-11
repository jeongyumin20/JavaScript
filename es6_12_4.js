/** 객체 리터럴과 스프레드 */
let person = {
  name: 'Alberto',
  surname: 'Montalesi',
  age: 30,
};

// let clone = person 같은 주소
let clone = { ...person }; // 다른 주소 담긴다,  {} 시작했으니 새로운 객체 만들겠다라는 의미
console.log(clone);

//person 속성 추가
person.addr = 'gangnam';

console.log(person);
console.log(clone);
