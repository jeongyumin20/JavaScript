/*
  // Submit 전 폼체크 validation check(유효성 체크) : 데이터 있는지 없는지만
  // 서버 부하 줄일려고 정확한 데이터 아닐지라도 빈값 넘기지 않도록 역할 분담위해 자바스크립트 처믕 나왔다
  */
function form_check() {
  // 나중에 focus 진행해야하는데 .value까지 써버리면 다시 또 해당 요소 찾아야하니까 호출사용 되도록 객체형태로 진행
  let u_name = document.getElementById('u_name'); // 데이터 아이디 입력하는 텍스트 창 텍스트 객체 object
  let u_id = document.getElementById('u_id');
  let pwd = document.getElementById('pwd');
  let pwd_check = document.getElementById('pwd_check');
  let date = document.getElementById('date');
  let tel = document.getElementById('tel');
  let agree_check = document.getElementById('agree_check');
  let email_sel = document.getElementById('email_sel');
  let email_dns = document.getElementById('email_dns');

  function text_color_change() {
    err_text.style.color = 'red';
  } // 받아오는 이름은 err_text 통일이고 if 안에서 var로 선언해야 찾아서 줄 수 있다

  document.querySelector('#join_form span').style.color = 'black';

  // 체크 하려고 하니까 if문
  if (u_name.value == '') {
    // 전역으로 받지 않는 것은 이 안에 하는 건 해당 err마다 다 해야하니까
    var err_text = document.querySelector('.err_name'); // $('.err_name)  es6되면서 라이브러리 없이 사용하고 싶은데 제이쿼리형식 쓰고 싶어서 생긴게 뭐리셀렉터 : 그래서 안에 찾는게 제이쿼리처럼
    err_text.textContent = '*이름을 입력해주세요';
    text_color_change();
    u_name.focus();
    // form으로 넘어가는데 코드상으로 보면 정확하게 마무리가 되지 않았으니 여기에서 에러가떠서 이 코드에서 리턴을 빠져나간다고 직관적으로 주는게 좋은 것
    return false; // false이기 때문에 focus있는 form으로 가는 것 if else로 이어나가도 되고 항목마다 if 사용해도 된다
  }

  if (u_id.value == '') {
    var err_text = document.querySelector('.err_id');
    err_text.textContent = '*아이디를 입력해주세요';
    text_color_change();
    u_id.focus();
    return false;
  }

  // 아이디 길이
  let uid_length = u_id.value.length; // 객체니까 value 필요!

  if (uid_length < 4 || uid_length > 12) {
    var err_text = document.querySelector('.err_id');
    err_text.textContent = '*4~12글자까지 입력해주세요';
    text_color_change();
    u_id.focus();
    return false;
  }

  // 비밀번호
  if (pwd.value == '') {
    var err_text = document.querySelector('.err_pwd');
    err_text.textContent = '*비밀번호를 입력해주세요';
    text_color_change();
    pwd.focus();
    return false;
  }

  // 비밀번호 길이
  let pwd_length = pwd.value.length; // 객체니까 value 필요!

  if (pwd_length < 4 || pwd_length > 12) {
    var err_text = document.querySelector('.err_pwd');
    err_text.textContent = '*4~12글자까지 입력해주세요';
    text_color_change();
    u_id.focus();
    return false;
  }

  // 비밀번호 일치 체크
  if (!(pwd.value === pwd_check.value)) {
    var err_text = document.querySelector('.err_pwd_check');
    err_text.textContent = '*비밀번호가 일치하지 않습니다';
    text_color_change();
    pwd_check.focus();
    return false;
  }

  // 생년월일
  if (date.value == '') {
    var err_text = document.querySelector('.err_date');
    err_text.textContent = '*생년월일을 입력해주세요';
    text_color_change();
    date.focus();
    return false;
  }

  // 생년월일 길이
  let date_length = date.value.length; // 객체니까 value 필요!

  if (!(date_length == 8)) {
    var err_text = document.querySelector('.err_date');
    err_text.textContent = '*8글자로 입력해주세요';
    text_color_change();
    date.focus();
    return false;
  }

  // 전화번호 : 선생님은 이 부분 하지 않았다
  if (tel.value == '') {
    var err_text = document.querySelector('.err_tel');
    err_text.textContent = '*전화번호를 입력해주세요';
    text_color_change();
    tel.focus();
    return false;
  }

  // 전화번호 - 포함 유무 체크
  if (tel.value.includes('-')) {
    var err_text = document.querySelector('.err_tel');
    err_text.textContent = "* '-' 없이 숫자만 입력해주세요";
    text_color_change();
    tel.focus();
    return false;
  }

  // 약관 동의
  if (!agree_check.checked) {
    /*     var err_text = document.querySelector('.err_check');
      err_text.textContent = '*약관 동의를 체크해주세요';
      text_color_change();
      agree_check.focus(); */
    alert('약관에 동의해주세요!');
    return false;
  }

  if (email_dns.value === '' && email_sel.value === 'self') {
    alert('이메일 주소를 입력해주세요');
    email_dns.focus();
    return false;
  }

  join_form.submit(); // 서버전송 : get 방식으로 주소 보는 식으로 본다
  // 노드로는 추후 객체화 시켜서 submit아니라 전송 형태로 보내보는 것 해본다
}

function email_check() {
  let email_sel = document.getElementById('email_sel');
  let email_dns = document.getElementById('email_dns');

  if (email_sel.value == 'self') {
    email_dns.value = '';
  } else {
    email_dns.value = email_sel.value;
  }
}

// 주소 검색 - daum API
function searchAddr() {
  new daum.Postcode({
    oncomplete: function (data) {
      // alert(data.zonecode + data.address);
      document.getElementById('postalCode').value = data.zonecode;
      document.getElementById('addr1').value = data.address;
    },
  }).open();
}

// 모두 로딩이 되면 함수 호출해서 사용
document.addEventListener('DOMContentLoaded', () => {
  // 회원가입 클릭 이벤트 호출
  btnJoin.addEventListener('click', form_check); // 받는 매개인자와 주는 함수 인자도 없으니 생략
  email_sel.addEventListener('change', email_check);
  addr_search.addEventListener('click', searchAddr);

  /*   email_address.addEventListener('change', e => {
      let select_email = e.target.value;
      email_text.value = select_email;
    }); */

  // btnJoin.addEventListener('click', () => form_check());
});
