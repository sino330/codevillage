//cardの空配列定義
let cardNum = [];
//1～4がpareとなるよう2回push
for (var i = 1; i <= 4; i++) {
  cardNum.push(i);
  cardNum.push(i);
}
//cardNumをshuffle
arrayShuffle(cardNum);
console.log(arrayShuffle(cardNum));

//panel div要素を取得
const panel = document.getElementById("panel");
//panelを8枚生成
for (i = 0; i < 8; i++) {
  //card作成
  const card = document.createElement("div");
  //cardにclass属性追加("card""back"で指定)
  card.className = "card back";
  //panelにcardを追加
  panel.appendChild(card);
  //cardにindex番号を持たせる(個別にcardをclick可能とする)
  card.index = i;
  //card番号を入力
  card.number = cardNum[i];
  //card backの時点ではinnerHTMLは空に指定
  card.innerHTML = "";
  //cardがclickされた時にイベントリスナー発火
  card.addEventListener("click", push);
}

//panelに入力するrandomな順番の配置を作成
function arrayShuffle(array) {
  for (var i = array.length - 1; 0 < i; i--) {
    var r = Math.floor(Math.random() * (i + 1));
    var tmp = array[i];
    array[i] = array[r];
    array[r] = tmp;
  }
  return array;
}

//turnの定義
let turn = 0;
//1枚目、2枚目のcard
let first = null;
let second = null;
//cardのtimeout
let timer = null;
//捲った数のcount
let count=0;

//buttonが押された時、数字を表示
function push(e) {
  if(timer){
    clearTimeout(timer);
    judge();
  }
  let div = e.target;
  //div要素のinnerHTMLをnumberに変更
  div.innerHTML = div.number;
  //classNameをcardに変更
  div.className = "card";
  //firstに数字をセット
    if (!first) {
      first = div;
      //同じ数字が押されないよう処理
    } else if (first.index == div.index) {
      return;
      //firstがsetされていたらsecondを設置
    } else {
      second = div;
      //firstとsecondが一致しているか関数を定義
      timer = setTimeout(judge, 500);
      function judge() {
        if (first.number == second.number) {
          first.className = "card finish";
          second.className = "card finish";
          count+=2;

          if(cardNum.length==count){
            alert("終了です");
            window.location.reload();
          }
        } else {
          first.innerHTML = "";
          second.innerHTML = "";
          first.className = "card back";
          second.className = "card back";
        }
        first = null;
        second = null;
        timer = null;
      }
  }
}

//数字が合っていればclassをfinish、そうでなければ再度裏返す


//2つの数字が合っていればclassを"finish"、そうでなければ"back"で裏側に戻す

//全て"finish"になればalertで終了を表示
