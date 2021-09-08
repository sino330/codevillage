const confirmTime = document.getElementById("confirmTime");
const startTimer = document.getElementById("startTimer");

let sec=0;
startTimer.addEventListener('click',function(){
    sec=setInterval('cntUp()',1000)
});

confirmTime.addEventListener("click", function () {
  if (sec === 0) {
    alert("大正解^‐^");
  } else if (sec < 20) {
    alert(`まだ${sec}秒、、、再スタートだ`);
  } else {
    alert(`もう${sec}秒だ！再挑戦`);
  }
});
//<チャレンジ問題>