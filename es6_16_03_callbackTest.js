// 주어진 seconds(초)가 지나면 callback 함수를 호출함
// 단 second가 0보다 작으면 에러 출력
// 에러가 없으면 console.log에 '타이머 종료!!'를 출력

/* function callTest(callback, seconds) {
  if (seconds < 0 || !seconds) {
    throw new Error('시간 설정이 잘못되었습니다');
    // console.log('시간 설정이 잘못되었습니다');
    //return;
  }

  setTimeout(callback, seconds);
}

callTest(() => {
  console.log('타이머 종료!!');
}, 3000); */

// 선생님 풀이
function exeuteTimer(callback, seconds) {
  // 1. 시간 체크 -> if문 사용
  if (!seconds || seconds < 0) {
    throw new Error('seconds가 0보다 작음');
  }
  // 2.setTimeOut 호출
  setTimeout(callback, seconds * 1000);
}

try {
  exeuteTimer(() => {
    console.log('타이머 종료!!');
  }, -3);
} catch (error) {
  // console.log(error);
  console.log('에러 발생 : seconds가 0보다 작음');
}
