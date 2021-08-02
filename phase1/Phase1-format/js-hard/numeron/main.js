//解答を生成する関数の定義
function initSetNum() {
  // 解答の3桁数字配列を作成
  let setNum = new Array(3);

  // 重複しない3桁の数字を作成(do-while文)
  // randomで数字を作成
  setNum[0] = Math.floor(Math.random() * 10);
  do {
    setNum[1] = Math.floor(Math.random() * 10);
  } while (setNum[0] === setNum[1]);
  do {
    setNum[2] = Math.floor(Math.random() * 10);
  } while (setNum[0] === setNum[2] || setNum[1] === setNum[2]);

  return setNum;
}

let setNum = initSetNum();
// 解答をconsoleに出力(動作確認用)
console.log(setNum);

// inputタグの読み込み
const numCheck = document.getElementById("numCheck");
// clearをtueになるまで繰り返しをさせるためfalseで設定
let clear = false;
// countを定義
let count =0;


// numCheckを押すとイベントリスナー発火
numCheck.addEventListener("click", function () {
  // bottonを押すとcountを追加
  count+=1;
  console.log(`count:${count}`);

  // inputのvalue取得
  const ansNum = document.getElementById("answerNum").value;
  // 3桁の数字が入力されているか確認(正規表現)
  const result = ansNum.match(/^\d{3}$/);
  // 3桁以外の数字が入力された場合はalertを表示
  if (!result) {
    alert("3桁の数字を入力して下さい");
  }
  //異なる3桁以外の数字を入力された場合のalert
  if (
    ansNum[0] === ansNum[1] ||
    ansNum[0] === ansNum[2] ||
    ansNum[1] === ansNum[2]
  ) {
    alert("異なる3桁の数字を入力してください");
  }

  // eatとbiteの定義
  let eat = 0;
  let bite = 0;

  
  // 配列をi,jに代入
  for (let i = 0; i < setNum.length; i++) {
    for (let j = 0; j < ansNum.length; j++) {
      // 配列数字が1個合えばeatに1を足す、違えばbiteに1を足す
      if (setNum[i] == ansNum[j]) {
        if (j == i) {
          eat += 1;
        } else {
          bite += 1;
        }
      }
    }
  }
  // eatとbiteのalert
  alert(`eat:${eat}、bite:${bite}`);
    // eatが3だった場合clear
    if (eat === 3) {
      alert("正解");
      initSetNum();
    }
    if(count===10){
      alert('game over');
      initSetNum();
    }
});

// // 繰り返し処理(trueになるまで)
//     while (!clear) {}