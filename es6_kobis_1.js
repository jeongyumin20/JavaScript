// kobis api 연동하여 DHTML 생성

function execKobis(sdate) {
  // $.getJSON(url, sussess function); 앞에 $ 붙어 있으니 제이쿼리 라이브러리 사용해야함
  fetch(
    `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=${sdate}`
  )
    .then(response => response.json())
    .then(kobis => {
      // 일별 박스오피스 출력 - 순위, 영화제목, 개봉일, 누적관객수, 누적매출액
      let showKobis = kobis.boxOfficeResult;
      let showKobisRankList = kobis.boxOfficeResult.dailyBoxOfficeList;
      const movieList = `
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
          movie =>
            ` 
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
    }); // kobis scope
  // .catch()
} // execKobis function

// DOM 객체 생성 후 execKobis 함수 호출
document.addEventListener('DOMContentLoaded', () => {
  execKobis('20230907'); // default

  // 검색 버튼 실행
  // search의 경우 DOMContentLoaded로 돔 객체가 모두 로드되었기 때문에 (첫번째 찾은 id를 찾는다) search 해도 바로 접근이 가능하다
  // class의 경우 오류날 수도 있다 ( 같은 이름이 또 있을 수 있어서 )
  // 밖에서 찾을 때는 document.querySelector로 찾아야한다!
  search.addEventListener('click', () => {
    let sdate = document.querySelector('#searchDate').value;
    execKobis(sdate);
  }); // 바로 출력할 거면 {} 없어도 된다
  // 공통된 것들은 우선 함수로 뽑아 놓고 호출이지만 사이즈가 크면 모듈로 빼서 파일로 따로 만드는 것
  // search.addEventListener('click', test() => {} ) // 검색 버튼에만 종속된 함수니까 굳이 이름을 주는 것은 의미가 없다 다른 곳에서 불리지 않으니까
  // search.addEventListener('click', function(){} )
});

/* function execKobis() {
  const kobis = {
    boxOfficeResult: {
      boxofficeType: '일별 박스오피스', // kobis.boxOfficeResult.boxofficeType
      showRange: '20230906~20230906', // kobis.boxOfficeResult.showRange
      dailyBoxOfficeList: [
        {
          rnum: '1',
          rank: '1',
          rankInten: '25',
          rankOldAndNew: 'OLD',
          movieCd: '20224667',
          movieNm: '잠', // kobis.boxOfficeResult.dailyBoxOfficeList[0].movieNm // 배열 짝 for문으로 나머지 사용!
          openDt: '2023-09-06',
          salesAmt: '735086507',
          salesShare: '44.9',
          salesInten: '733556507',
          salesChange: '47944.9',
          salesAcc: '814820407',
          audiCnt: '79435',
          audiInten: '79265',
          audiChange: '46626.5',
          audiAcc: '87543',
          scrnCnt: '1072',
          showCnt: '4947',
        },
        {
          rnum: '2',
          rank: '2',
          rankInten: '-1',
          rankOldAndNew: 'OLD',
          movieCd: '20226431',
          movieNm: '오펜하이머',
          openDt: '2023-08-15',
          salesAmt: '209727019',
          salesShare: '12.8',
          salesInten: '-21184712',
          salesChange: '-9.2',
          salesAcc: '30316354087',
          audiCnt: '19831',
          audiInten: '-2577',
          audiChange: '-11.5',
          audiAcc: '2841435',
          scrnCnt: '879',
          showCnt: '2367',
        },
        {
          rnum: '3',
          rank: '3',
          rankInten: '0',
          rankOldAndNew: 'OLD',
          movieCd: '20226500',
          movieNm: '달짝지근해: 7510',
          openDt: '2023-08-15',
          salesAmt: '125541095',
          salesShare: '7.7',
          salesInten: '-27331297',
          salesChange: '-17.9',
          salesAcc: '11338836912',
          audiCnt: '13662',
          audiInten: '-2967',
          audiChange: '-17.8',
          audiAcc: '1165302',
          scrnCnt: '697',
          showCnt: '1841',
        },
        {
          rnum: '4',
          rank: '4',
          rankInten: '-2',
          rankOldAndNew: 'OLD',
          movieCd: '20233014',
          movieNm: '타겟',
          openDt: '2023-08-30',
          salesAmt: '118797823',
          salesShare: '7.3',
          salesInten: '-67443709',
          salesChange: '-36.2',
          salesAcc: '2963671983',
          audiCnt: '12990',
          audiInten: '-7053',
          audiChange: '-35.2',
          audiAcc: '314638',
          scrnCnt: '766',
          showCnt: '2125',
        },
        {
          rnum: '5',
          rank: '5',
          rankInten: '-1',
          rankOldAndNew: 'OLD',
          movieCd: '20204264',
          movieNm: '콘크리트 유토피아',
          openDt: '2023-08-09',
          salesAmt: '114860158',
          salesShare: '7.0',
          salesInten: '-28954320',
          salesChange: '-20.1',
          salesAcc: '35719917721',
          audiCnt: '12362',
          audiInten: '-3041',
          audiChange: '-19.7',
          audiAcc: '3657632',
          scrnCnt: '717',
          showCnt: '2012',
        },
        {
          rnum: '6',
          rank: '6',
          rankInten: '0',
          rankOldAndNew: 'NEW',
          movieCd: '20090379',
          movieNm: '해리 포터와 혼혈 왕자',
          openDt: '2009-07-15',
          salesAmt: '70743500',
          salesShare: '4.3',
          salesInten: '70743500',
          salesChange: '100',
          salesAcc: '20338227500',
          audiCnt: '6339',
          audiInten: '6339',
          audiChange: '100',
          audiAcc: '2964075',
          scrnCnt: '41',
          showCnt: '214',
        },
        {
          rnum: '7',
          rank: '7',
          rankInten: '-2',
          rankOldAndNew: 'OLD',
          movieCd: '20218541',
          movieNm: '밀수',
          openDt: '2023-07-26',
          salesAmt: '37207927',
          salesShare: '2.3',
          salesInten: '-25159483',
          salesChange: '-40.3',
          salesAcc: '49166017434',
          audiCnt: '3991',
          audiInten: '-2698',
          audiChange: '-40.3',
          audiAcc: '5089666',
          scrnCnt: '420',
          showCnt: '626',
        },
        {
          rnum: '8',
          rank: '8',
          rankInten: '0',
          rankOldAndNew: 'NEW',
          movieCd: '20211540',
          movieNm: '듣보인간의 생존신고',
          openDt: '2023-09-06',
          salesAmt: '32409900',
          salesShare: '2.0',
          salesInten: '32409900',
          salesChange: '100',
          salesAcc: '42978900',
          audiCnt: '3503',
          audiInten: '3503',
          audiChange: '100',
          audiAcc: '4788',
          scrnCnt: '72',
          showCnt: '97',
        },
        {
          rnum: '9',
          rank: '9',
          rankInten: '-3',
          rankOldAndNew: 'OLD',
          movieCd: '20228930',
          movieNm: '엘리멘탈',
          openDt: '2023-06-14',
          salesAmt: '20281885',
          salesShare: '1.2',
          salesInten: '-10305296',
          salesChange: '-33.7',
          salesAcc: '70145608677',
          audiCnt: '2202',
          audiInten: '-1026',
          audiChange: '-31.8',
          audiAcc: '7138995',
          scrnCnt: '247',
          showCnt: '317',
        },
        {
          rnum: '10',
          rank: '10',
          rankInten: '5',
          rankOldAndNew: 'OLD',
          movieCd: '20231253',
          movieNm: '일주일간 친구',
          openDt: '2023-09-06',
          salesAmt: '17372250',
          salesShare: '1.1',
          salesInten: '15230250',
          salesChange: '711',
          salesAcc: '98192250',
          audiCnt: '1936',
          audiInten: '1630',
          audiChange: '532.7',
          audiAcc: '8009',
          scrnCnt: '133',
          showCnt: '321',
        },
      ],
    },
  };

  // 일별 박스오피스 출력 - 순위, 영화제목, 개봉일, 누적관객수, 누적매출액
  let showKobis = kobis.boxOfficeResult;
  let showKobisRankList = kobis.boxOfficeResult.dailyBoxOfficeList;
  const movieList = `
  <h1>KOBIS 박스 오피스</h1>
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
      movie =>
        ` 
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
  // document.getElementById('kobisContent');  예전 버전
  // $('#kovisContent).append(movieList);  제이쿼리 형식
  document.querySelector('#kobisContent').innerHTML = movieList;
} // execKobis function

// DOM 객체 생성 후 execKobis 함수 호출
document.addEventListener('DOMContentLoaded', execKobis);
 */
