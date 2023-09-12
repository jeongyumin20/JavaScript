/* function exeuteTimer(seconds) {
  return new Promise((resolve, reject) => {
    if (!seconds || seconds < 0) {
      reject('seconds가 0보다 작음');
    } else {
      setTimeout(() => {
        resolve(consol.log('타이머 종료!!'));
      }, seconds);
    }
  });
}

exeuteTimer(-3); */

/* exeuteTimer(-3).then(result => {
  console.log(result);
}).catch {
  console.log('에러 발생 : seconds가 0보다 작음');
}
 */

function exeuteTimer(seconds) {
  return new Promise((resolve, reject) => {
    if (!seconds || seconds < 0) {
      reject(new Error('seconds가 0보다 작음')); // reject를 통해서 throw 던져주는 것
    }
    setTimeout(resolve, seconds * 1000);
    // setTimeout(() => { resolve() }, seconds * 1000);
  });
}

exeuteTimer(2)
  .then(() => console.log('타이머 종료!!'))
  .catch(console.error) // 생성해서 넘겨주는 err 자체라 바로 출력 가능하다 따로 객체 받지 않아도 된다
  .finally(() => console.log('프로그램 종료!!'));

// 세미콜론은 여러줄이 있을 때 여기까지 한 줄을 알리는 것이라 사용 한 줄일 때는 사용하지 않는다
