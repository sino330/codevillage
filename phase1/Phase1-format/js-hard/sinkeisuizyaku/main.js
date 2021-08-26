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
  card.index=i;
  //card番号を入力
  card.number=cardNum[i];
  card.innerHTML="";
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
let count = 0;

//buttonが押された時、数字を表示
function hide(e) {
  div = e.target;
}
count += 1;
console.log(count);

//数字が合っていればclassをfinish、そうでなければ再度裏返す
// if(true){

// }else{

// }

//2つの数字が合っていればclassを"finish"、そうでなければ"back"で裏側に戻す

//全て"finish"になればalertで終了を表示
