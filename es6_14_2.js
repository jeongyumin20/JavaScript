/** 객체 속성에 대한 식별자 */
const office = {
  Tom: 'CEO',
  Mark: 'CTO',
  Mark: 'CIO',
};

// 문자 배열로 만들어져서 tom / mark 만들어진다 : 문자라 출력이 되어진것
for (person in office) {
  console.log(person);
}

/* for (person of office) {
  console.log(person);
} */

const office2 = {
  [Symbol('Tom')]: 'CEO', // 심볼 객체로 만들어서 그 안에 배열로 저장하겠다 : [ ] 안쓰면 일반 심볼 객체가 만들어지는 것
  [Symbol('Mark')]: 'CTO', // 심볼 리스트로 만들려고 [ ] 로 만드는 것 같다
  [Symbol('Mark')]: 'CIO',
};

// 주소를 가지고 있는 배열 구조라 별도로 배열 객체를 얻어와서 출력해야한다
const symList = Object.getOwnPropertySymbols(office2);
console.log(symList.length);

// 심볼 객체를 가지고 있는 배열이라 메소드를 이용해 return 받아야 실행해야한다
for (person in symList) {
  console.log(person);
}

for (person of symList) {
  console.log(person);
}

// 우리가 생각한 배열의 인덱스로 생각하면 안된다
// symList의 경우 person이 담겨 있는 객체가 아니고 syjmList는 심볼 자체의 주소값이 담겨있는 것
console.log(symList[2]);
// 다음 14_3번 파일처럼 map 함수를 이용하는 등 객체화 시켜야한다?

/* const office3 = {
  Symbol('Tom'): 'CEO',
  Symbol('Mark'): 'CTO', 
  Symbol('Mark'): 'CIO',
  // 객체로 생성되어 져야하는데 constS ymbol('Tom')]: 'CEO' 해서 생성할 순 없어서 [ ]  필요  
  // 심볼 값을 객체로 쓰려고 [ ] 대괄호 사용하는 것 
  // Object("Tom") 여도
  // 객체가 들어가려고 하면 리스트화 시켜야한다
}; */
