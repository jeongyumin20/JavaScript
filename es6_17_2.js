// Generator
const foo = function* () {
  // foo는 제너레이터 오브젝트
  yield 'a';
  yield 'b';
  yield 'c';
};

let str = '';
for (const val of foo()) {
  str = str + val;
}

console.log(str);
// Expected output: "abc"

// next() 메서드
const foo_gen = foo();
foo_gen.return();
console.log(foo_gen.next());
console.log(foo_gen.next());
console.log(foo_gen.next());
console.log(foo_gen.next());

/* while (true) {
  const data = foo_gen.next(); // {value:a, done:false}
  // next 이 안에서는 한 번만 두번 적으면 두번 커서 내려간다

  if (!data.done) {
    console.log(data.value);
  } else {
    break;
  }
} */

// { value: 'a', done: false } 객체로 감싸진다
// foo_gen.next() 가르키는 주소는 이 것 -> { value: 'a', done: false }
// 객체 타입이기 때문에 . 으로 접근
// done은 데이터가 있으면 종료하면 안되기 때문에 다음에 데이터가 있는지 확인해서 끝날지 아닐지의 여부 의미

// console.log(foo_gen.next().value);
// b : next 누를 때마다 커서가 하나씩 이동
