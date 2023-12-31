/** 기본적인 문자열 메소드 */

//1. indexOf() : 공백이 포함된다
const str = 'this is a short sentence';
console.log(str.indexOf('short')); //10

//2. slice() : 캐릭터 기준으로 인덱스가 잡힌다
const strSlice = 'pizza, orange, apple';
console.log(strSlice.slice(0, 5)); //pizza

//3. toUpperCase()
const strToUpperCase = 'i ate an apple';
console.log(strToUpperCase.toUpperCase()); //I ATE AN APPLE

//4. toLowerCase()
const strtoLowerCase = 'I ATE AN APPLE';
console.log(strtoLowerCase.toLowerCase()); //i ate an apple
