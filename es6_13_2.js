/** 객체에 함수 추가하기 */
//ES5
const person = {
  name: 'hong',
  greet: function () {
    console.log('Hello~~');
  },
};

person.greet();

//ES6
const person2 = {
  name: '홍길동',
  greet() {
    console.log('Hello2~~');
  },
};

person2.greet();

// es6_13_03_ 객체리터럴업그레이드_객체함수_화살표함수불가.js
/** 객체에 함수 추가하기 - 화살표 함수 정의 시 반드시 키 정의!! */
const person3 = {
  name: 'hong',
  //() => console.log("Hello~"),  //문법 오류 : 키 정의안되어 있음
};

const person4 = {
  name: 'hong',
  greet2: () => console.log('Hello~arrow'),
};

person4.greet2();
