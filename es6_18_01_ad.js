/*
// 다른 회사들과 표준 규약을 만들어 정의하기 위해 
1. JavaScript : ES6(ECMA Script 6) // es5는 없나요, ECMA는 뭔가요, 차이는 뭔가요
1) Basic(문법) -  let, const
                  function, class, iterator, ..
2) Advance(내부구현) - Scope, Hoisting, Closer, Prototype.. ( global , local 차이 스코프 체이닝 어떻게 하는지)

2. Scope란?
- 식별자 ( 변수, 함수, 클래스.. 참조하는 범위 )의 유효한 범위 ﹒ 영역
- 변수를 참조할 수 있는 유효한 범위 ﹒ 영역

스코프 정의 - { }(블럭) 단위로 정의됨
블럭 :  블럭({}}, 함수(function(){}), 제어문(for {}, if {})

**
블럭 내부에서 블럭 외부의 변수를 참조 가능
블럭 외부에서 블럭 내부의 변수는 참조 불가능

블럭을 이용하여 식별자의 Scope를 정의
-> 이름 충돌 방지, 메모리 절약 (효율성)

**
식별자 (변수)는 최대한 필요한 블럭에서 정의해서 사용하도록 한다
코딩 컨벤션 식별자 선언은 기능에 따라서 최대한 블럭 안에서 정의하도록 한다 

function test {} : test 함수 블럭  
class test {} : test 클래스 블럭  


scope.js
---------------------
const a = 200;  // 글로벌(전역) 변수 정의 : 현재 scope.js 파일 끝날 때까지 살아있다. 범위는 메모리에 살아있는 기준 ( 메모리에 있어야 참조 되니까 , scope.js 실행되면 엔진이 이 a를 메모리에 가장 먼저 넣고 오래 살아있다 파일이 끝나야만 메모리에서 삭제되니까 )
{ 
  const a = 100;  // 로컬(멤버) 변수 정의  : 블락 안에서 누군가가 참조 했을 거고 블럭 빠져나오면 밖에서 참조 안된다
  // 가비지 컬렉터가 삭제를 해준다  : 가비지 컬렉터는 어떻게 만들어지고 무슨 일을 수행하는지
  console.log(a)  // 100  가장 근거리에 있는 해당 변수를 찾는다
}
console.log(a)  // 200 두번째 큰 넓이의 스코프를 기준으로 찾는다 

자바스크립트는 스코프 별로 정의된 정보를 저장하는 객체 환경들이 있다 : 렉시컬 환경
이 객체들의 체이닝을 이용해서 검색을 하는 것 ( 그래서 지역변수 100 예제 보면 이 안에서 정의된 변수를 먼저 찾아주는 것 )


3. 가비지 컬렉터(Gabage Collector)
* C언어 - 개발자가 메모리 선언, 할당, 데이터처리, 메모리 반환(삭제)
* JAVA, C#, JS - 메모리 관리 해주는 GC(Gabage Collector를 가지고 있다

// c언어 개발자가 데이터 처리만 생각해서 나온거 생각하고 삭제 안하면 메모리 반환이 되지 않아 부족해서 스택오버플로어나 어플리케이션이 중단하거나 블루스크린뜨는 상황 발생

발전: 객체 지향언어는 jvm을 활용하여 데이터처리까지 하고 가비지컬렉터가 메모리 삭제하는 부분을 맡는 것
C#은 자바 거의 흡사하게 따라 만든 것 ( 90프로 이상? )

4. 실행 컨텍스트 (Execution Context)
- 실행 순서와 스코프를 기억하고 있다 ( 실행순서 : 콜스택에 쌓인다 )
- 실행 컨텍스트는 스코프 정보를 가지고 있는 (Lexical Environment Object)
  렉시컬 환경 오브젝트를 생성하여 관리하며 
  렉시컬 환경 오브젝트는 각각의 스코프 체이닝으로 연결됨
- 코드 맨 안쪽의 블럭이 맨 먼저 생성됨

*/

// [스코프란?]
/* 
식별자(변수, 함수)의 유효한 범위를 의미하며, 블럭 단위로 정의됩니다 
블럭 안에서 정의된 식별자는 블러기 종료되면 GC의 대상이 됩니다   
스코프 외부에서 스코프 내부의 식별자는 참조가 불가능하지만 내부에서 외부 스코프의 식별자는 참조가 가능합니다

참조가 가능한 이유는
실행 컨텍스트에 있는 렉시컬 환경 오브젝트가 스코프 단위로 정보를 기억하고 있으며 
맨 안쪽에 생성되는 스코프부터 체이닝을 이용하여 연결되어 있기 때문입니다

이렇게 생성된 LEO를 통해 스코프의 참조가 가능해집니다

즉, 스코프를 사용할 때 메모리 절약과 성능을 고려한다면
식별자 선언과 사용은 필요한 블럭에서 정의하고 호출하도록 하는 것이 좋다고 생각합니다
*/

// {} 블럭 단위로 나뉘어진 식별자로
// 실행 컨텍스트에 렉시컬 환경 오브젝트로 안쪽 스코프부터 생성 관리되며 생성된 오브젝트는 체이닝으로 스코프 연결이 되어 한방향으로 안쪽에서 위로 참조가 가능하다
// 해당 블럭 스코프 영역의 기준으로 블럭이 끝나면 가비지 컬렉터 대상이 된다 ( 함수는 호출이 끝난 뒤 대상 )

/* 
Hoisting, Closer, Prototype 정의
*/