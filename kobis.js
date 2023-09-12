function kobis(date) {
  fetch(
    `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=${date}`
  )
    .then(response => response.json())
    .then(kobis => {
      let showKobis = kobis.boxOfficeResult; // 일별 박스오피스
      let showKobisRankList = kobis.boxOfficeResult.dailyBoxOfficeList; // 박스오피스 랭크 10개
      let movieList = `
        <ul>
          <li>박스 오피스 타입 - ${showKobis.boxofficeType}</li>
          <li>박스 오피스 일자 - ${showKobis.showRange}</li>
        </ul>
        <table border=1>
          <tr>
            <td>순위</td>
            <td>제목</td>
            <td>개봉일</td>
            <td>누적관객수</td>
            <td>누적매출액</td>
          </tr>
          ${showKobisRankList
            .map(
              movie => `
          <tr>
            <td>${movie.rank}</td>
            <td>${movie.movieNm}</td>
            <td>${movie.openDt}</td>
            <td>${movie.audiAcc}</td>
            <td>${movie.salesAcc}</td>
          </tr>
          `
            )
            .join('\n')}
        </table>
      `;
      document.querySelector('#kobisContent').innerHTML = movieList;
      // console.log(movieList);
    });
}

document.addEventListener('DOMContentLoaded', () => {
  kobis('20230908'); // , 이 아니다. 파라미터 안이라고 착각해버림!
  search.addEventListener('click', () => {
    let date = document.querySelector('#searchDate').value;
    kobis(date);
  });
});
