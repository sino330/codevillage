// 解答の3桁数字配列を作成
const setNum = new Array(3);

//解答を生成する関数の定義
function initSetNum() {
  // 重複しない3桁の数字を作成(do-while文)
  // randomで数字を作成
  setNum[0] = Math.floor(Math.random() * 10);
  do {
    setNum[1] = Math.floor(Math.random() * 10);
  } while (setNum[0] === setNum[1]);
  do {
    setNum[2] = Math.floor(Math.random() * 10);
  } while (setNum[0] === setNum[2] || setNum[1] === setNum[2]);
}

initSetNum();
// 解答をconsoleに出力(動作確認用)
console.log(setNum[0], setNum[1], setNum[2]);

// inputタグの読み込み
const ansNum = document.getElementById("answerNum");
const numCheck = document.getElementById("numCheck");
// clearをtueになるまで繰り返しをさせるためfalseで設定
let clear = false;
// 3桁の数字が入力されているか確認(正規表現)
const pat = /^\d{3}$/;
// numCheckを押すとイベントリスナー発火
numCheck.addEventListener("click", function () {
  console.log(ansNum.value);
  if(!pat===ansNum.length){
      alert('3桁の数字を入力して下さい');
  }
});

// 繰り返し処理(trueになるまで)
// while(!clear){

// };
