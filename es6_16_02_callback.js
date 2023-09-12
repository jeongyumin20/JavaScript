// 비동기식 처리
function execute(callback, seconds) {
  console.log('1');
  setTimeout(callback, seconds);
  console.log('3');
}

execute(() => {
  console.log('2');
}, 2000);
