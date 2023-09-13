/** 제너레이터를 사용하여 배열 반복하기 */
const fruitList = ['바나나', '사과', '오렌지', '멜론', '복숭아'];
// 배열은 iterator 상속 받았으니 for of 사용 가능

function* loop(arr) {
  // iterator 프로토콜을 가진 파라미터를 받아야한다
  for (const item of arr) {
    yield `I like to eat ${item}`;
  }
}

const fruitGenerator = loop(fruitList);
// fruitList : iterator 표준을 포함하고 있어서 보낼 수 있다
// object 등을 보내면 에러
console.log(fruitGenerator.next());
console.log(fruitGenerator.next());
console.log(fruitGenerator.next());
console.log(fruitGenerator.next().value);
