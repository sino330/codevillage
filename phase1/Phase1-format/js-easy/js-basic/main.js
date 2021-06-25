// こんにちわ、世界！
console.log("Hello,world!");

// 値
100;
1.5 - 1;

// 数値
console.log(100);
console.log(1.5);

// 文字
console.log("Hello");
console.log("ありがとう");

// 配列
console.log(1, 2, 3, 4);

// 真偽値
console.log(true);
console.log(false);

// オブジェクト

console.log({ one: 1, two: 2 });

// 変数

const myName = "Bbepu";

console.log(myName);

// 変数myNameに'名前'を代入する

const number = 100;
const isValid = true;
const userIds = [1, 3, 10];

console.log(number);
console.log(isValid);
console.log(userIds);

let leaning;
// constは変数を初期化する必要がある
// constは再代入できない
// letは再代入できる
leaning = "Ruby";
console.log(leaning);

// 文字列
const breakfast = "トースト";

// テンプレート文字列
console.log(`今日のご飯は${breakfast}です。
美味しかった。`);

console.log("今日のご飯は" + breakfast + "です。\n美味しかった。");

// 配列

const days = ["日", "月", "火", "水", "木", "金", "土"];

console.log(days[3]);
// []配列の中インデックという

console.log(["日", "月", "火", "水", "木", "金", "土"].length);

const nengou = ["明治", "大正", "昭和", "平成"];
// 要素の追加
nengou.push("令和");
console.log(nengou);

nengou.splice(3, 1);

console.log(nengou);

nengou[2] = "syouwa";

console.log(nengou);

const num = Math.random();

if (num >= 0.5) {
  console.log("大きめ");
} else {
  console.log("小さめ");
}

console.log(`数:${num}`);

if (true) {
  console.log("if文はtrueです！");
}

const a = 2;
const b = 3;
const c = 10;
const d = 10;

console.log(a === b);
console.log(c === d);

console.log(a === b && c === d);
console.log(a === b || c === d);

console.log(!(a === b));

for (let i = 0; i < 10; i++) {
  console.log(i);
}

// for (初期化処理; 継続条件; 更新処理) {
//   処理したい処理;
// }

let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}
// 関数定義
function cook(food) {
  console.log(`${food}が出来上がりました`);
}
// 実行
cook();
cook("生姜焼き");

function cook(food1, food2) {
  console.log(`${food1}が出来上がりました`);
  console.log(`${food2}が出来上がりました`);
}

cook("生姜焼き", "カレー")

function applyTax(price) {
  console.log(price * 1.1)
  return price * 1.1
}
applyTax(1000)
applyTax(580)

console.log(applyTax(1000)+applyTax(580))

const result1=applyTax(1000)
const result2=applyTax(580)

console.log(result1+result2)
// 関数式

// const applyTax=function(price){
//   return price*1.1
// }

// アロー関数
// const applyTax= (price)=>{
//   return price+1.1
// }

// 引数が一つの場合()を省略できる
// const applyTax=price=>{
//   return price*1.1
// }

// 処理が1行の場合、returnとブロックが省略できる
// const applyTax=price=>price*1.1

