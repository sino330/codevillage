// const startBtn=document.getElementById('diceBtn');
// const body=document.querySelector('body');
// const dice=document.createElement('img');
// dice.style.width='100px';
// dice.style.height='100px';

// let diceNum='./img/saikoro1.png';
// dice.setAttribute("src", diceNum);
// body.appendChild(dice);

// let timer;

// startBtn.addEventListener('click',function(){
//     clearInterval(timer);
//     timer=setInterval('random()',100);

//     setTimeout(()=> {
//       clearInterval(timer);
//     }, 3000);
// })

// const random = function () {
//   diceNum = `./img/saikoro${Math.floor(Math.random() * 6 + 1)}.png`;
//   dice.setAttribute("src", diceNum);
// };

// 追加チャレンジ問題

// 実行時の取り込み
const player1Btn = document.getElementById("player1Btn");
const player2Btn = document.getElementById("player2Btn");
const setPlayer1dice = document.getElementById("setPlayer1dice");
const setPlayer2dice = document.getElementById("setPlayer2dice");
const result = document.getElementById("result");

// timerの関数
let player1Timer;
let player2Timer;

// diceNumの関数
let player1Num = 1;
let player2Num = 1;

// diceのsrc属性挿入
let player1Dice = `./img/saikoro${player1Num}.png`;
setPlayer1dice.setAttribute("src", player1Dice);
let player2Dice = `./img/saikoro${player2Num}.png`;
setPlayer2dice.setAttribute("src", player2Dice);
// ボタン
player1Btn.addEventListener("click", function () {
  clearInterval(player1Timer);
  player1timer = setInterval("random1()", 100);
  setTimeout(() => {
    clearInterval(player1Timer);
  }, 3000);
});

player2Btn.addEventListener("click", function () {
  clearInterval(player2Timer);
  player2timer = setInterval("random2()", 100);
  setTimeout(() => {
    clearInterval(player2Timer);
  }, 3000);
});
// サイコロを振る
const random1 = function () {
  player1Dice = `.img/saikoro${Math.floor(Math.random() * 6 + 1)}.png`;
  player1Dice.setAttribute('src',player1Num);
};
const random2 = function () {
  player2Dice = `.img/saikoro${Math.floor(Math.random() * 6 + 1)}.png`;
  player2Dice.setAttribute('src',player2Num);
};
