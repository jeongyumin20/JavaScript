// 처음 시도

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();
    let inputName = document.querySelector('#u_name').value;
    if (!inputName) {
      document.querySelector('.name-text').innerText = '항목을 입력해주세요';
      return false;
    }
    // inputName && (document.querySelector('.name-text').innerText = '항목을 입력해주세요');

    let inputId = document.querySelector('#id').value;
    if (!inputId || inputId.length < 4 || inputId.length > 12) {
      document.querySelector('.id-text').style.color = 'red';
      return false; // 여기 if문 실행된다는 이야기는 조건이 맞지 않는다는 이야기니까 return false
    }

    let inputPw = document.querySelector('#password').value;
    if (!inputPw || inputPw.length < 4 || inputPw.length > 12) {
      document.querySelector('.password-text').style.color = 'red';
      return false;
    }

    let inputDate = document.querySelector('#date').value;
    if (!inputDate || !inputDate.length === 8) {
      document.querySelector('.date-text').style.color = 'red';
      return false;
    }

    let inputTel = document.querySelector('#tel').value;
    if (inputTel.includes('-')) {
      document.querySelector('.tel-text').style.color = 'red';
      return false;
    }

    let inputCb = document.querySelector('#agree').checked;
    if (!inputCb) {
      document.querySelector('.checkbox-text').style.color = 'red';
      return false;
    }
  });
});

/* document.querySelector('.check').addEventListener('click', e => {
  e.preventDefault();
  let inputName = document.querySelector('#name').value;
  if (!inputName) {
    document.querySelector('.name-text').innerText = '항목을 입력해주세요';
    return false;
  }

  let inputId = document.querySelector('#id').value;
  if (!inputId || inputId.length < 4 || inputId.length > 12) {
    document.querySelector('.id-text').style.color = 'red';
    return false; // 여기 if문 실행된다는 이야기는 조건이 맞지 않는다는 이야기니까 return false
  }

  let inputPw = document.querySelector('#password').value;
  if (!inputPw || inputPw.length < 4 || inputPw.length > 12) {
    document.querySelector('.password-text').style.color = 'red';
    return false;
  }

  let inputDate = document.querySelector('#date').value;
  if (!inputDate || !inputDate.length === 8) {
    document.querySelector('.date-text').style.color = 'red';
    return false;
  }

  let inputTel = document.querySelector('#tel').value;
  if (inputTel.includes('-')) {
    document.querySelector('.tel-text').style.color = 'red';
    return false;
  }

  let inputCb = document.querySelector('#agree').checked;
  inputCb ? inputCb : (document.querySelector('.checkbox-text').style.color = 'red');
});
 */
