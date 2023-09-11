/** 변수를 키/값으로 하는 객체 만들기 */
const name = 'Alberto';
const surname = 'Montalesi';
const age = 20;
const nationality = 'Italian';

//ES5
const person = {
  name: name,
  surname: surname,
  age: age,
  nationality: nationality,
};

//ES6
const person2 = { name, surname, age, nationality };
// 넘어온 변수를 객체화 시키겠다 , 자동으로 맵핑되는 코드로 맵핑된 변수의 이름이 프로퍼티로 넘어오는구나

console.log(person);
console.log('----------------------------------------------');
console.log(person2);
