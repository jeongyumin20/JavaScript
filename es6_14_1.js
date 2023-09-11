/** 심벌의 고유성 */
const me = Symbol('Alberto');
console.log(me);

/** 같은 값을 가진 새로운 심벌을 만들면 어떻게 될까? */
const clone = Symbol('Alberto');
console.log(clone);

//심벌 비교
console.log(me == clone); //false
console.log(me === clone); //false

const symObj = Object(me);
console.log(symObj);
