// // body要素を取得
// const body = document.querySelector("body");
// // pタグ要素追加
// const item = document.createElement("p");
// body.appendChild(item);

// const count = function () {
//   // 現在時間
//   const nowTime = moment();
//   // ドラえもん誕生日(2112/9/3)
//   const endTime = moment("2112-9-03 00:00:00");
//   // 現在時間と誕生日の差
//   let rest = endTime.diff(nowTime, "s", true);
//   // 差分を日、分、秒換算
//   const sec = Math.floor(rest) % 60;
//   const min = Math.floor(rest / 60) % 60;
//   const hours = Math.floor(rest / 60 / 60) % 24;
//   const days = Math.floor(rest / 60 / 60 / 24);
//   // pタグのtextcontent追加
//   item.textContent = `ドラえもんが生まれるまで後${days}日${hours}時間${min}分${sec}秒です。`;
// };
//   //1秒ごとに書き換える
// setInterval(count, 1000);

//<チャレンジ問題>

//dateSet、dateSerchの読み込み
const dateSet = document.getElementById("dateSet");
const dateSerch = document.getElementById("dateSearch");
//p要素の読み込み
const diffTime = document.getElementById("diffTime");

//dateSerchをclickするとイベント発火
dateSearch.addEventListener("click", function () {
  // count functionの作成
  const count = function () {
    //指定時間の取得
    const endTime =moment(dateSet.value);
    //現在時間の指定
    const nowTime = moment();
    //時間の差
    let rest = endTime.diff(nowTime, "s", true);
    //差分を日、分、秒換算
    const sec = Math.floor(rest) % 60;
    const min = Math.floor(rest / 60) % 60;
    const hours = Math.floor(rest / 60 / 60) % 24;
    const days = Math.floor(rest / 60 / 60 / 24);
    diffTime.textContent = `${dateSet.value}まで後${days}日${hours}時間${min}分${sec}秒`;
  };
  //1秒ごとに書き換える
  setInterval(count, 1000);
});

// 解答
// const doraemon = document.createElement("p"); //要素作成
// const body = document.querySelector("body"); //親ノード取得
// body.appendChild(doraemon); //子ノード追加

// let timer; //タイマー設定

// const birthdayDoremon = moment("2112-09-03 12:00"); //日付選択

// const count = function () {
//   const date = moment();
//   const secondLeft = birthdayDoremon.diff(date, "second") % 60;
//   const minuteLeft = birthdayDoremon.diff(date, "minute") % 60;
//   const hourLeft = birthdayDoremon.diff(date, "hour") % 24;
//   const dayLeft = birthdayDoremon.diff(date, "days");

//   doraemon.textContent = `ドラえもんが生まれるまで後${dayLeft}日${hourLeft}時間${minuteLeft}分${secondLeft}秒`;
// };

// count();

// timer = setInterval("count()", 1000);

// チャレンジ問題

// let timer3;

// const startSearch = document.getElementById('dateSearch');

// const diffTime = document.getElementById('diffTime');

// startSearch.addEventListener('click', function() {
//   timer3 = setInterval('count3()', 1000);
// });

// const count3 = function() {
//   const date = moment();
//   const setTime = document.getElementById('dateSet').value;
//   const time = moment(setTime);
//   const secondLeft = time.diff(date, 'second') % 60;
//   const minuteLeft = time.diff(date, 'minute') % 60;
//   const hourLeft = time.diff(date, 'hour') % 24;
//   const dayLeft = time.diff(date, 'days');
//   diffTime.textContent = `${setTime}まで後${dayLeft}日${hourLeft}時間${minuteLeft}分${secondLeft}秒`;
// };
