// 객체(오브젝트)의 타입 비교 : Object.prototype.__proto__
const obj1 = new Object(); // 주소값 당연히 다르니 두개 값 비교하면 false
const obj2 = new Object();

// 메모리에 잡힌 구조 비교 확인
console.log(obj1.__proto__ == obj2.__proto__);

// const array1 = new Array()
// const array1 = ['hone', 'kim', 'park']; // Array > object
// console.log(array1.values()); // MDN의 API를 통해 상속구조 이해하기

// 클래스(붕어빵 틀) 정의 -> 여러개의 객체(붕어빵)를 생성하는 틀
// 클래스는 추상적인 것, 객체는 gong, son, song 머릿속에 정확하게 떠올려지는 것을 객체로 보면 된다
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  //function eat() 의 function 생략가능 : 키워드 생략 되어도 모두 메서드로 인식 ES6
  // 이부분 function 기준이니까 얘도 메모리에 잡히는데 100명 생성하면 이게 다 들어간다
  // : 같은 기능인데 반복 되는 중 : 모든 사람 가지는 공통적 ->  객체의 프로퍼티로 정의해서 사용
  /*   eat() {
    console.log('밥을 먹어요');
  } */
}

//  배우도 이름과 나이 가지니까 상속
class Actor extends Person {
  // 2. 생성자가 호출할 때 나이와 이름 받아야하니까 매개변수
  constructor(name, age, movieName) {
    // Actor 객체가 생성되기 전에 Person 생성되어야 하므로
    // Person의 생성자를 반드시!! 맨처음 호출해야한다
    super(name, age); // 1. 자식이 부모쪽으로 나이와 이름을 넘겨줘야 한다 부모가 매개변수 받으니까
    this.movieName = movieName;
  }
}

// eat() 함수를 프로토타입으로 정의함 : person이라는 calss에만 정의
Person.prototype.eat = function () {
  // 별도의 객체로 형성된다 function () {} 화살표 함수로 하면 별도의 변수형태로 정의되어 실행 ( 메모리에 잡혀버림 ) : 전역 변수? 함수?로 설정
  // 자기 메모리에 가지고 있는게 아니라 호출할 때 여기로 gong에 갔더니 없고 person이랑 연결된 프로토타입 찾아 eat 호출
  console.log(`${this.name} 밥을 먹어요 :)`);
};

// act() 함수를 프로토타입으로 정의함
Actor.prototype.act = function () {
  console.log(`${this.name} 배우가 연기를 해요 💁🏻‍♀️`);
};

// 메모리 올리는 작업 new : 메모리에 3명이 쇽 만들어진다
// 사람 한사람이여야하니까 const
// const gong = new Person('공유', 30);
const gong = new Actor('공유', 30);
const son = new Person('손석구', 20);
const song = new Person('송혜교', 25);

gong.act();
// son.act();
// song.act();

// 화살표 함수는 어노미 함수 이름 없는 함수로 정확하게 누구의 뭐라고 지정 불가능
// 호출이 되어질때 별도의 객체가 아니라 프로토타입에 별도로 잡히지 않아서..? 화살표 함수 자체 구성이 메소드 표현식이라서 그렇다
// Person.prototype.eat = () => {} 이렇게 적용했을 때

// 화살표 함수는 정확한 클래스 데이터 표현할 때 출력용으로 사용하는게 좋다
// ( 지금처럼 할당하는 용도 x )
