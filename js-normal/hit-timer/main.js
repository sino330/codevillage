// const confirmTime = document.getElementById("confirmTime");
// const startTimer = document.getElementById("startTimer");
// // 関数定義
// let sec = 0;
// let timer;

// //startボタンを押す
// startTimer.addEventListener("click", function(){
//   clearInterval(timer);
//   timer = setInterval("countUp()", 1000);
// });

// // 確認ボタンを押す
// confirmTime.addEventListener("click", function() {
//   if (20 === sec) {
//     alert("成功です");
//   } else if (sec < 20) {
//     alert(`まだ${sec}秒、、、再スタートだ`);
//   } else {
//     alert(`もう${sec}秒だ！再挑戦せよ`);
//   }
//   clearInterval(timer);
//   sec = 0;
// });

// // 1秒毎に1を足す
// //スタートを押して40秒経ったら強制終了
// const countUp = function () {
//   sec += 1;
//   if (sec === 40) {
//     clearInterval(timer);
//     alert("終了/また挑戦しろ");
//     sec = 0;
//   }
// };

//<追加チャレンジ問題>
const confirmTime2 = document.getElementById("confirmTime2");
const startTimer2 = document.getElementById("startTimer2");

let timer;
let startTime;
let nowTime;
let diffTime = null;

confirmTime2.addEventListener("click", function () {
  nowTime = new Date();
  if (diffTime === null) {
    diffTime = Math.floor(nowTime.getTime() - startTime.getTime(), 1000);
  } else if (diffTime === 20) {
    alert("成功です");
  } else if (diffTime < 20) {
    alert(`まだ${diffTime}秒、、、再スタートだ`);
  } else {
    alert(`もう${diffTime}秒だ！再挑戦せよ`);
  }
});

startTimer2.addEventListener("click", function () {
  startTime=new Date();
  diffTime=null;
  timer = setInterval("countUp2()", 1000);
});

const countUp2=function(){
    let checkTime=new Date();
    let diffTime=Math.floor((checkTime.getTime()-startTime.getTime())/1000);
    if(diffTime===40){
        alert("終了/また挑戦しろ");
    }
};

