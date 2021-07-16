// const cpHand = document.getElementById("cpHand");
// const log = document.getElementById("log");
// cpHand.textContent = '相手の手:';
// log.textContent = "結果:";

// const gameStart = document.getElementById("gameStart");

// gameStart.addEventListener("click", function () {
//   const myNum = document.getElementById("myHand").value;
//   const cpNum=Math.floor(Math.random()*3);

//   if(cpNum===0){
//       cpHand.textContent = "相手の手:グー";
//   }else if(cpNum===1){
//       cpHand.textContent = "相手の手:チョキ";
//   }else if(cpNum===2){
//       cpHand.textContent = "相手の手:パー";
//   }

//   switch (myNum) {
//     case "0": {
//       if (cpNum === 0) {
//         log.textContent = "結果:引き分け";
//       } else if (cpNum === 1) {
//         log.textContent = "結果:勝ち";
//       } else if (cpNum === 2) {
//         log.textContent = "結果:負け";
//       }
//       break;
//     }
//     case "1": {
//       if (cpNum === 0) {
//         log.textContent = "結果:負け";
//       } else if (cpNum === 1) {
//         log.textContent = "結果:引き分け";
//       } else if (cpNum === 2) {
//         log.textContent = "結果:勝ち";
//       }
//       break;
//     }
//     case "2": {
//       if (cpNum === 0) {
//         log.textContent = "結果:勝ち";
//       } else if (cpNum === 1) {
//         log.textContent = "結果:負け";
//       } else if (cpNum === 2) {
//         log.textContent = "結果:引き分け";
//       }
//       break;
//     }
//   };
// });

// チャレンジ問題
const setHand = document.getElementById("setHand");
const nowTurn = document.getElementById("player");
const player1Hand = document.getElementById("player1Hand");
const player2Hand = document.getElementById("player2Hand");

let player1Num;
let player2Num;
let turn=0;

setHand.addEventListener("click", function () {
  if (turn === 0) {
    player1Num = document.getElementById("playerHand").value;
    player1Hand.textContent = "player1:set完了";
    nowTurn.textContent = "player2";
    console.log(player1Num);    
  }else if(turn===1){
    player2Num = document.getElementById("playerHand").value;
    player2Hand.textContent = "player2:set完了";
    nowTurn.textContent = "両者set完了";
    console.log(player2Num);
  }else{
      alert('両者setは完了しています');
      return;
  }
  turn+=1;
});

const gameStart=document.getElementById('gameStart');
const log=document.getElementById('log');
log.textContent='結果:';

gameStart.addEventListener('click',function(){
    if(turn!==2){
        alert('2回以上押さないで下さい');
        return;
    }
    switch(player1Num){
        case '0':{
            if(player2Num==='0'){
                log.textContent='結果:引き分け';
            }else if(player2Num==='1'){
                log.textContent='結果:player2の勝ち';
            }else if(player2Num==='2'){
                log.textContent = "結果:player1の勝ち";
            }
            break;
        }

        case '1':{
            if(player2Num==='0'){
                log.textContent = "結果:player1の勝ち";
            }else if(player2Num==='1'){
                log.textContent = "結果:引き分け";
            }else if(player2Num==='2'){
                log.textContent = "結果:player2の勝ち";
            }
            break;
        };

        case '2':{
            if(player2Num==='0'){
                log.textContent = "結果:player2の勝ち";
            }else if(player2Num==='1'){
                log.textContent = "結果:palayer1の勝ち";
            }else if(player2Num==='2'){
                log.textContent = "結果:引き分け";
            }
            break;
        };
    };
    turn=0;
    nowTurn.textContent='player1';
    player1Hand.textContent='player1:';
    player2Hand.textContent='player2:';
});


