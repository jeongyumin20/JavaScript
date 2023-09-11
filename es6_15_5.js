/** 클래스 상속 */
class Person {
  //생성자 --> new Person('홍길동', 20)
  constructor(name, age) {
    // new 연산자가 호출되어 객체로 생성될 때 호출되는 함수
    this.name = name;
    this.age = age;
    console.log(`Person name : ${this.name}`);
  }

  /*     //생성자 --> new Person('홍길동', 20) : 오버로딩 지원하지 않음 
    constructor(name) {
      // new 연산자가 호출되어 객체로 생성될 때 호출되는 함수
      this.name = name;
      this.age = age;
      console.log(`Person name : ${this.name}`);
    } */

  greet() {
    console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old`);
  }
} //class Person

//Adult 클래스 : Person 자식 클래스 ( extends키워드 생기면 메모리에 Adult ﹒ Person하고 같이 생성이 되어진다  )
class Adult extends Person {
  constructor(name, age, work) {
    super(name, age); // Person의 생성자 호출
    this.name = name;
    this.work = work;
    console.log(`Adult name : ${this.name}`);
  }
}

let hong = new Person('홍길동', 20); // let
console.log(hong.name);
console.log(hong.age);

let alberto = new Adult('Alberto', 30, 'developer'); // let 하면 오류 없이 출력이 되는데 상속 개념을 더 공부해야 한다
console.log(alberto.name); // Alberto
console.log(alberto.age); // 30
console.log(alberto.work); // developer
alberto.greet(); // Hi, my name is Alberto and I'm 30 years old

// hong에다가 알베르토 값을 넣을 수 있을까?
// hong = alberto 타입만 확인하니까 둘 다 레퍼런스 변수
hong = alberto;
console.log(hong.name);
console.log(hong.work);
// 문법적으로 레퍼런스 주소니까 여기서 코드에서 문제는 없지만 ( 변수 타입만 보니까 ) 실행하게 되면 메모리 구조 타입이 다르니까 문제 발생
// 실행 했더니 구조 찾으려면 메모리까지 와야하니까 메모리까지 오면 다른걸 확인 : 런타임시에만 가서 메모리 타입과 구조 볼 수 있는 것
// 근데 const라면 당연히 값을 바꿀 수 없으니 에러난다
