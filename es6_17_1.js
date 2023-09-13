// iterable protocol ﹒ iterator protocol 포함하여 생성된 내장객체는
// 순환 참조가 가능하다 ->  spread 연산자 , for..of를 사용할 수 있다
// MSDN API에서 prototype을 확인

// 이걸 가지고 만든 api를 주로 사용하기 때문에 해당 요소가 스프레드와 for of 사용 가능한지 보는 습관을 들여야한다

const strArray = ['바나나', '오렌지', '복숭아'];
for (str of strArray) {
  console.log(str);
}

const charArray = 'hello,javascript';
for (char of charArray) {
  console.log(char);
}

const tmap = new Map();
tmap.set(0, 'test1'); // 하나를 배열 객체로
tmap.set(1, 'test2'); // 하나를 배열 객체로 만들어야 for of 가능

// [Symbol.iterator] : iterator 프로토콜을 적용 했을 때만 사용 가능  ( 표준을 따랐을 때 )
const tmapArray = tmap[Symbol.iterator]();

console.log(tmap);
// Map(2) { 0 => 'test1', 1 => 'test2' }
// Map 데이터 2개가 들어있고 0은 test를 가르키고 있고 1 키워드는 test2 가르키고 있다

console.log(tmap.get(1));
// test2

for (const ta of tmapArray) {
  console.log(ta);
}

// [ 0, 'test1' ]
// [ 1, 'test2' ]

// tObj 오브젝트로 만들어졌다 : 사용이 가능한지 msdn에서 Object 찾아본다 : 따로 보이지 않으니 확인해보자
const tObj = {
  name: '홍길동',
  age: 20,
};

const tArray = tObj[Symbol.iterator]();
for (const obj of tArray) {
  console.log(obj);
}
