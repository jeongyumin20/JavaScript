/** Array.of() */
const digits = Array.of(1, 2, 3, 4, 5, 6, 7);
console.log(digits); //[1,2,3,4,5,6,7]

// 11 _ 04
/** Array.find() */
const array = [1, 2, 3, 4, 5];
// e 인덱스 아니고 값,  3보다 큰 첫번째 값을 found에 넣는 것
let found = array.find(e => e > 3); //array 원소중 3보다 큰 첫번째 원소를 반환
console.log(found); // 4

// 11_05
/** Array.find() */
const greeting = ['hello', 'hi', 'byebye', 'goodbye', 'hi'];

let foundIndex = greeting.findIndex(e => e === 'hi');
console.log(foundIndex); // 1
// 첫번째 hi의 인덱스를 리턴

// 11_05
/** Array.some & Array.every() */
const array2 = [1, 2, 3, 4, 5, 6, 1, 2, 3, 1];
let arraySome = array2.some(e => e > 2); // 한개라도 조건에 충족
console.log(arraySome); //true

let arrayEvery = array2.every(e => e > 2); // 전체 기준으로 모두 조건에 충족
console.log(arrayEvery); //false
