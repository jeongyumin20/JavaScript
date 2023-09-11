/** 클래스 정적 메소드 */
class Person {
  //생성자
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  //정적메소드 info
  static info() {
    console.log('I am a Person, nice to meet you');
  }

  //greet 함수
  greet() {
    console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old`);
  }
}

const alberto = new Person('Alberto', 30);
alberto.greet();
Person.info();
alberto.info();
