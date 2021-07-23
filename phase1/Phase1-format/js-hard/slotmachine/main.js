// nowTimeの読み込み
const nowTime = document.getElementById("nowTime");
const nowTime2 = document.getElementById("nowTime2");
const nowTime3 = document.getElementById("nowTime3");
const nowTime4 = document.getElementById("nowTime4");
const nowTime5 = document.getElementById("nowTime5");
const nowTime6 = document.getElementById("nowTime6");
const nowTime7 = document.getElementById("nowTime7");
const nowTime8 = document.getElementById("nowTime8");
const nowTime9 = document.getElementById("nowTime");
// setTimer1の読み込み
const setTime1 = document.getElementById("setTime1");
const setTime2 = document.getElementById("setTime2");
const setTime3 = document.getElementById("setTime3");
// 定数を指定
let slotId1 = 0;
let slotId2 = 0;
let slotId3 = 0;
// nowTimeに定数を代入
nowTime.textContent = slotId1;
nowTime2.textContent = slotId2;
nowTime3.textContent = slotId3;
// startTimerの読み込み
const startTimer = document.getElementById("startTimer");
// startTimerを押すとイベントが発火
startTimer.addEventListener("click", function () {
  slot1();
  slot2();
  slot3();
  // disabledでのボタンを戻に戻す
  setTime1.disabled = false;
  setTime2.disabled = false;
  setTime3.disabled = false;
});
// timerの定義
let timer1;
let timer2;
let timer3;
// stopボタンの確認
let stop1 = 0;
let stop2 = 0;
let stop3 = 0;

// slot1
const slot1 = function () {
  // 2回buttonを押してもclearintervalで倍速にならない
  clearInterval(timer1);
  // countUp定義
  const countUp = function () {
    // 一定間隔事に1ずつ増やす
    slotId1++;
    // HTMLへの挿入
    nowTime.textContent = `${slotId1}`;
    // 10になったら0に戻す
    if (slotId1 === 9) {
      slotId1 = 0;
    }
  };
  //間隔の設定
  timer1 = setInterval(countUp, 100);
};
// setTimerを押すとイベントリスナー発火
setTime1.addEventListener("click", function () {
  // clearIntervalでsetIntervalを止める
  clearInterval(timer1);
  // buttonをdisableで2度押せなくする
  setTime1.disabled = true;
  // stopボタンの押した回数
  stop1++;
  console.log("1", stop1);
  alertReslt();
});

// slot2
const slot2 = function () {
  clearInterval(timer2);
  const countUp2 = function () {
    slotId2++;
    nowTime2.textContent = `${slotId2}`;
    if (slotId2 === 9) {
      slotId2 = 0;
    }
  };
  timer2 = setInterval(countUp2, 100);
};
setTime2.addEventListener("click", function () {
  clearInterval(timer2);
  setTime2.disabled = true;
  stop2++;
  console.log("2", stop2);
  alertReslt();
});

// slot3
const slot3 = function () {
  clearInterval(timer3);
  const countUp3 = function () {
    slotId3++;
    nowTime3.textContent = `${slotId3}`;
    if (slotId3 === 9) {
      slotId3 = 0;
    }
  };
  timer3 = setInterval(countUp3, 100);
};
setTime3.addEventListener("click", function () {
  clearInterval(timer3);
  setTime3.disabled = true;
  stop3++;
  console.log("3", stop3);
  alertReslt();
});

// 条件指定
const alertReslt = function () {
  // 全てのボタンが1回ずつ押された状態
  if (stop1 === 1 && stop2 === 1 && stop3 === 1) {
    stop1 = 0;
    stop2 = 0;
    stop3 = 0;
    console.log(stop1, stop2, stop3);
    // その中で全て7が揃った場合
    if (slotId1 === 7 && slotId2 === 7 && slotId3 === 7) {
      alert("おめでとう");
    } else {
      alert("再挑戦");
    }
  }
};
