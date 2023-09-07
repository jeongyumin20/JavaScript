/** 중첩 템플릿 */
// 대괄호 people : 객체를 가지고 있는 배열 타입
const people = [
  { name: '홍길동', age: 27 },
  { name: '홍홍', age: 27 },
  { name: '홍길순', age: 31 },
];
const markup = `
<ul>
    ${people.map((person) => `<li> ${person.name} </li>`)}
</ul>
`;
console.log(markup);
