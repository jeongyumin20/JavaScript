/** 클래스 생성 */
class Person {
  // person도 에러는 뜨지 않지만 지양
  // 프로퍼티 //  const test = 'aaa';

  //생성자
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // info 함수 : static 함수로 생성  ->  클래스멍.메소드명 형식으로 호출
  static info() {
    console.log('Person 클래스의 static 메소드');
  }

  //greet 함수
  greet() {
    console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old`);
  }

  //farewell 함수
  farewell() {
    console.log('goodbye friend');
  }
}

//Person.greet()
// 인스턴스 생성 필요
const alberto = new Person('Alberto', 30); // person도 에러는 뜨지 않지만 지양
alberto.greet();
alberto.farewell();
Person.info();
alberto.info();
