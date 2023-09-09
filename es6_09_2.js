/** 객체 디스트럭처링 - 중첩된 객체 형태 */
const person = {
  name: 'hong',
  last: 'gildong',
  links: {
    social: {
      facebook: 'https://www.facebook.com/alberto.montalesi',
      google: 'https://www.google.com',
      naver: 'https://www.naver.com',
    },
    website: 'https://albertomontalesi.github.io/',
  },
};

const { facebook, google, naver } = person.links.social; // 값을 facebook으로 부르겠다
const { facebook: fb, google: ge, naver: na } = person.links.social; // facebook의 value를 fb로 부르겠다

console.log(`facebook : ${facebook}`);
console.log(`facebook : ${fb}`);
console.log(`google : ${google}`);
console.log(`naver : ${naver}`);

// 코드 내부 로직 중복, 반복 되지 않아야한다
