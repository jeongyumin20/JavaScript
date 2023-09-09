/** 일반적인 for 루프 */
var fruits = ['apple', 'banana', 'orange'];
console.log('----------------->> 일반적인 for 루프');
for (var i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// 인덱스나 길이 생각하지 않아도 값을 알아서 체크
/** for of 루프 */
var fruits2 = ['apple', 'banana', 'orange'];
console.log('----------------->> for of 루프');
for (const fruit of fruits2) {
  console.log(fruit);
}

// 자바스크립트에서는 [] 배열 {} 객체지만 자바에서는 {} 배열
// 자바스크립트에서의 배열은 [] : 모든 언어와 공통이라고 생각하지 않기

// 10_02
/** 객체에 대한 반복 */
const car = {
  maker: 'BMW',
  color: 'red',
  year: '2010',
};

// 객체 car의 프로퍼티를 가져온다
for (const prop of Object.keys(car)) {
  const value = car[prop]; // 프로퍼티의 값을 가져오고 싶다 //  Object.keys(car) 배열로 반환되니까 [] 사용 가능
  console.log(prop, value);
}

// 10_03
/** for in */
const car2 = {
  maker: 'BMW',
  color: 'red',
  year: '2010',
};

for (const prop in car2) {
  console.log(prop, car[prop]);
  // car.prop 왜 못하나? car 객체의 프로퍼티 이름 prop를 찾아버린다
  // car.maker로 들어가는 것이 아니라
}
