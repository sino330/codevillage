// nowTimeの読み込み
const nowTime = document.getElementById("nowTime");
const nowTime2 = document.getElementById("nowTime2");
const nowTime3 = document.getElementById("nowTime3");
// 定数を指定
let slotId1= 0;
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
});

// slot1
const slot1 = function () {
  const countUp=function(){
    slotId++;
  };
  setInterval(countUp(), 1000);
  // 一定間隔事に1ずつ増やす
  console.log(slotId);
  //間隔の設定

  //　7になったら0に戻す
  //if(slotId<10){
  //   slotId=0;
  // }

  // HTMLへの挿入
  nowTime.textContent = `${slotId1}`;

  // setTimer1の読み込み
  const setTimer1 = document.getElementById("setTimer1");
};;

// slot2
const slot2 = function () {
  nowTime2.textContent = `${slotId2}`;
  const setTimer2 = document.getElementById("setTimer2");
};

// slot3
const slot3 = function () {
  nowTime3.textContent = `${slotId3}`;
  const setTimer3 = document.getElementById("setTimer3");
};




// 条件指定
// if (slotId1 === 7 && slotId2 === 7 && slotId3 === 7) {
//   alert("おめでとう");
// } else {
//   alert("再挑戦");
// };
