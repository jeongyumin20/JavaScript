/** 태그된 템플릿 리터럴 */
let person = 'hong';
let age = 25;
// `That ${person} is a ${age}!!`. : 배열로 자동 생성
function myTag(strings, personName, personAge) {
  //strings : ['That ',' is a',' !!']
  let str = strings[1]; //'is a'
  let ageStr;

  personAge > 50 ? (ageStr = 'grandPa') : (ageStr = 'youngster');

  return personName + str + ageStr;
}

// // 함수인데 () 아닌 백틱으로 넘기는 것
let sentence = myTag`That ${person} is a ${age}!!`;
console.log(sentence); //hong is a youngster
