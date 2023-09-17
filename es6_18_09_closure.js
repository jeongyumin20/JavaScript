function outer(num) {
  const a = 1;
  function inner() {
    // 처리해야하는 비지니스 로직을 여기에 넣어 감춘다
    console.log(num - a);
  }
  inner();
}
outer(100); // 결과값 : 입력값 -1

/* 
8. 클로저 (Closure)
- 함수에서 사용되는 중첩 함수 정의로 생성되는 블럭 스코프를 
  통해 내부의 함수 스코프에서 외부의 함수 스코프에 접근 가능하도록 허용하는 것을 의미함
  
  function outer() {
    const a = 1;
    function inner() {
      console.log(a);
    }
    inner();
  }
  outer();
  // 이 외부환경에서 inner() 호출 불가능하므로 inner() 폐쇄적 환경 
*/
