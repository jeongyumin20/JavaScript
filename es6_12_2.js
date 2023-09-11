/** 배열의 복사 - 기존 배열의 참조 */
// 객체가 하나 필요할 때 사용하는 방법
/* const veggie = ['tomato', 'cucumber', 'beans'];
const newVeggie = veggie; // 주소 복사

//veggie 복사본을 생성한 것처럼 보이지만, 다음을 확인
veggie.push('peas');

console.log(veggie);
console.log(newVeggie);
 */

// es6_12_02_spread_배열의복사2.js
/** ES5 및 이전 버전에서의 배열 복사 */
// 객체가 두개 필요할 때 사용하는 방법 : 메모리 효율성은 좋지 않다
// 주소가 아닌 요소 가져온다
const veggie = ['tomato', 'cucumber', 'beans'];
const newVeggie = [].concat(veggie); //빈 배열 생성, 기존 배열의 값을 새 배열에 잇기
veggie.push('peas');
console.log(veggie); //[ 'tomato', 'cucumber', 'beans', 'peas' ]
console.log(newVeggie); //[ 'tomato', 'cucumber', 'beans' ]

/** ES6 스프레드 문법으로 배열 복사 */
const veggie2 = ['tomato', 'cucumber', 'beans'];
const newVeggie2 = [...veggie2]; //빈 배열 생성, 기존 배열의 값을 새 배열에 잇기
veggie2.push('peas');
console.log('---------------------------------------------->');
console.log(veggie2); //[ 'tomato', 'cucumber', 'beans', 'peas' ]
console.log(newVeggie2); //[ 'tomato', 'cucumber', 'beans' ]
