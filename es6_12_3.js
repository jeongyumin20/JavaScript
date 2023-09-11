/** 함수와 스프레드 연산자 */
//기존 방식
/* function doSuff(x, y, z) {
  console.log(x + y + z);
}
var args = [0, 1, 2];
doSuff.apply(null, args); //함수 호출, 인수 전달 : //3(0+1+2)

//스프레드 문법
// 함수 호출하는데 매개변수 넘겨줄 때 args 배열 찾아서 그 배열 요소를 하나씩 가져와서 넣어준다
doSuff(...args); //3(0+1+2)
console.log(args);
 */

// es6_12_03_spread_함수와스프레드연산자2.j
/** 함수와 스프레드 연산자 */
const name = ['Alberto', 'Montalesi'];
function greet(first, last) {
  console.log(`Hello~ ${first} ${last}`);
}

greet(...name); //Hello~ Alberto Montalesi
greet.apply(this, name);

//지정된 인수보다 더 많은 값을 제공하면 어떻게 될까?
// 보통 다른 언어에서는 개수보다 적거나 많다면 특히 적을 때는 ~~리셉션? 발생..
const name2 = ['Jon', 'Paul', 'Jones'];
function greet2(first, last) {
  console.log(`Hello~ ${first} ${last}`);
}

greet2(...name2); //Hello~ Jon Paul

/* 
사용 될 때?

회원가입 사용할 때 form에서 취미를 선택하는 걸 만들고

한꺼번에 여러개 선택하는 체크박스 만들 때 여러가지 취미 선택하고 버튼 누르면 체크박스로 선택한 데이터는 서버에 자동으로 배열 형태로 넘어간다

이름이 하나고 데이터가 서로 다른 형태로 배열로 넘어간다

함수에서 맵핑할 때 스프레드로 바로 사용할 수 있다
*/
