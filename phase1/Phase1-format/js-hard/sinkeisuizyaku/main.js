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
let count = 0;

//buttonが押された時、数字を表示
function push(e) {
  if (timer) {
    clearTimeout(timer);
    judge();
  }
  let div = e.target;
  if (div.innerHTML === "") {
    //div要素のinnerHTMLをnumberに変更
    div.innerHTML = div.number;
    //classNameをcardに変更
    div.className = "card";
  } else {
    return;
  }
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
        count += 2;

        if (cardNum.length == count) {
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

// //解答
// let cards = [];
// let flgFirst = true;
// let cardFirst;
// let count = 0;

// //裏返す関数だけ時間セットする
// let setTimer;

// window.onload = function load() {
//   let arr = [];

//   for (let i = 1; i < 5; i++) {
//     arr.push(i);
//     arr.push(i);
//   }

//   shuffle(arr);

//   const panel = document.getElementById("panel");

//   for (i = 0; i < 8; i++) {
//     const div = document.createElement("div");
//     div.className = "card back";
//     div.index = i;
//     div.number = arr[i];
//     div.innerHTML = "";
//     div.onclick = turn;
//     panel.appendChild(div);
//     cards.push(div);
//   }
// };
// // });

// const shuffle = function (arr) {
//   for (let i = arr.length - 1; 0 < i; i--) {
//     //フィッシャーイェーツのシャッフル
//     const j = Math.floor(Math.random() * (i + 1));
//     [arr[i], arr[j]] = [arr[j], arr[i]]; //分割代入構文
//   }
// };

// let div;

// const turn = function (e) {
//   div = e.target;

//   if (div.innerHTML === "") {
//     div.className = "card";
//     div.innerHTML = div.number;
//   } else {
//     return;
//   }

//   if (flgFirst) {
//     cardFirst = div;
//     flgFirst = false;
//   } else {
//     if (cardFirst.number === div.number) {
//       count++;
//       timer = setInterval("cardClear(div)", 500);
//       if (count === 4) {
//         setTimeout(function () {
//           alert("終了です");
//           document.location.reload();
//         }, 500);
//       }
//     } else {
//       timer = setInterval("cardBack(div)", 500);
//     }
//     flgFirst = true;
//   }
// };

// const cardBack = function (div) {
//   div.className = "card back";
//   div.innerHTML = "";
//   cardFirst.className = "card back";
//   cardFirst.innerHTML = "";
//   cardFirst = null;
//   backTimer = NaN;
//   clearInterval(timer);
// };

// const cardClear = function (div) {
//   div.className = "card finish";
//   cardFirst.className = "card finish";
//   clearInterval(timer);
// };

//<チャレンジ問題>
let player1Point=0;
let player2Point=0;
let playerturn = 1;

function check(){
  
}

const nextplayer = document.getElementById("nextPlayer");
nextplayer.textContent = `次はの番です`;
const player1 = document.getElementById("player1Point");
player1.textContent=`player1:${player1Point}`;
const player2 =document.getElementById("player2Point");
player2.textContent = `player2:${player2Point}`;