function getHTML() {
  // 1초 후에 HTML 문자를 리턴하는 프로미스 생성

  return new Promise(resolve => {
    setTimeout(() => {
      resolve('HTML');
    }, 1000);
  });
}

function getCSS() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('CSS');
    }, 1000);
  });
}

function getJS() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('JS');
    }, 1000);
  });
}

// 안이 모두 비동기 구문이니까 async 붙여서 비동기임을 알림
async function getResult() {
  // 나중에 할 일로 다 담기지만 이 중에서도 순서가 필요하다!
  const html = await getHTML(); // await 사용해서 순서 지키면서 실행되도록 한다
  const css = await getCSS();
  const js = await getJS();

  // 여기서 바로 실행하거나 아니면 외부에서 사용한다면 return 타입으로 사용
  return [html, css, js];

  // console.log([html, css, js]);
}

// getResult();

getResult().then(result => {
  console.log(result);
});

/* getHTML().then(html => {
  getCSS().then(css => {
    getJS().then(js => {
      console.log([html, css, js]);
    });
  });
}); */
