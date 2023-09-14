const text = 'global';
{
  // console.log(text);  initialization 초기화 에러
  // 해당 블럭 안에서 정의가 되어져야하는데 위에 아무것도 되어져있지 않은 상태에서 찍으려고 진행해서 에러 발생
  const text = 'local';
  {
    // console.log(text);
  }
}
console.log(text);
