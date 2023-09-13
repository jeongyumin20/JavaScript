function showDailyList(kobis) {
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
        <td class="movieName" id="${movie.movieCd}" >${movie.movieNm}</td>
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

  document.querySelectorAll('.movieName').forEach(movieTd => {
    movieTd.addEventListener('click', e => {
      DetailMovie(e.target.getAttribute('id'));
      // document.querySelector('table').style.display = 'none';
      document.querySelector('table').remove();
    });
  });
}

function kobis(date) {
  fetch(
    `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=${date}`
  )
    .then(response => response.json())
    .then(showDailyList)
    .catch(() => {
      console.log('fetch 실패');
    });
}

function DetailMovie(movieTd) {
  fetch(
    `http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=f5eef3421c602c6cb7ea224104795888&movieCd=${movieTd}`
  )
    .then(response => response.json())
    .then(showDetailMovie);
}

function showDetailMovie(movieDetail) {
  let showInfo = movieDetail.movieInfoResult.movieInfo;
  let { actors, directors, genres } = showInfo;
  let director = directors ? directors.map(director => director.peopleNm) : '감독 정보가 없습니다';
  let genre = genres ? genres.map(genre => genre.genreNm) : '장르 정보가 없습니다';
  let actorArr = actors.slice(0, 10).map(actor => actor.peopleNm);
  // 배열 안에 데이터만 있기 때문에 바로 안 데이터를 문자열로 변경하지 않아도 출력된다

  document.querySelector('#kobisContent').insertAdjacentHTML(
    'beforeend',
    `
    <table border=1>
      <tr>
        <td>제목</td>
        <td>장르</td>
        <td>상영시간</td>
        <td>감독</td>
        <td>출연진</td>
      </tr>
      <tr>
        <td>${showInfo.movieNm}</td>
        <td>${genre}</td>
        <td>${showInfo.showTm}분</td>
        <td>${director}</td>
        <td>${actorArr}</td>
      </tr>
    </table>
  `
  );
}

document.addEventListener('DOMContentLoaded', () => {
  kobis('20230901'); // , 이 아니다. 파라미터 안이라고 착각해버림!
  search.addEventListener('click', () => {
    let date = document.querySelector('#searchDate').value;
    kobis(date);
  });
});
