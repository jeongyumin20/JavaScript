/** 클래스를 활용하여 배열 확장하기 */
class ClassRoom extends Array {
  constructor(name, ...students) {
    // 여기서의 ...은 레스트 연산자
    super(...students); // 여기서는 스프레드 연산자
    this.name = name;
  }
  add(student) {
    this.push(student);
  }
}

const myClass = new ClassRoom(
  '1A',
  { name: 'Tom', mark: 6 },
  { name: 'Tim', mark: 5 },
  { name: 'Jon', mark: 8 },
  { name: 'Jim', mark: 10 }
);
console.log('---------------------->> myClass');
console.log(myClass);

console.log('---------------------->> myClass add ');
myClass.add({ name: 'Jimmy', mark: 10 });
console.log(myClass);
console.log('---------------------->> myClass[4]');
console.log(myClass[4]); //인덱스 4번지 출력

console.log('---------------------->> myClass 배열 출력');
for (const student of myClass) {
  console.log(student);
}
