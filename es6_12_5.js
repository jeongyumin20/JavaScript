/** 레스트 매개변수 */
const runners = ['Tom', 'Paul', 'Mark', 'Luke'];
const [first, second, ...losers] = runners;
// 새로운 배열로 압축 : 만드는 걸 레스트 연산자

console.log(...losers);
// 그 안에 있는 요소로 만들어 펼치는건 스프레드 연산자
// 새로 만드는 것이 아닌 배열 변수 안에 있는 요소를 꺼내 펼쳐 출력
