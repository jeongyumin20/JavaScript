/** 디스트럭처링을 이용하여 변수 교체하기 */
let hungry = 'yes';
let full = 'no';

// 식후에는 배고프지 않고 배가 부를 것이다. 값을 교체하자.
// 변수로 다시 담아주지 않는다
// 배열 생성이 아니라 값을 잠시동안 바꾸려고 임시배열을 생성해 담기 위해 사용하는 것!
[hungry, full] = [full, hungry];

console.log(hungry, full);
