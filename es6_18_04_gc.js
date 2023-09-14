let apple = {
  name: 'apple',
};

let orange = apple;
apple = null;
orange = null;

// 어떤 요소가 가비지 컬렉터의 대상일까?
// 아무도 참조하지 않는 객체로 메모리 힙에 생성되는 아이인 apple

// 변수는 스코프 기준으로 사라지고
// 가비지 컬렉터는 참조하지 않는 객체가 대상이 되어 찾아 사라지게 한다

// null은 아무도 참조 하지 않는 것을 나타내고
// undefined는 값이 없다는 것이다
