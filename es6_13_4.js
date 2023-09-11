/** 객체의 속성을 동적으로 정의하기 */
//ES5
var name = 'myname';
var person = {}; //빈객체 생성
person[name] = 'Alberto'; //객체 업데이트 person = {nyname : 'Alberto'}
console.log(person.myname); //Alberto

// ⏫ 메모리 효율성 떨어진다
// 4번 {} 메모리 힙에 빈 객체 만들고 와서
// 5번 값을 추가하러 또 가야한다! ->  두번 간다

//ES6
const name2 = 'myname';
const person2 = {
  [name2]: 'Alberto2',
};
console.log(person2.myname); //Alberto2

// 값을 가지고 한 번만 가서 생성하고 값을 넣는다
