const number = document.getElementById("number");
const setTime = document.getElementById("setTime");
const startTimer = document.getElementById("startTimer");
const stopTimer = document.getElementById("stopTimer");
const nowTime = document.getElementById("nowTime");

let sec = 1;
let leftHour;
let leftMin;
let leftSec;
let timer;

setTime.addEventListener("click", function () {
  sec = document.getElementById("inputTime").value;
  leftSec = sec % 60;
  leftMin=Math.floor((sec%3600)/60);
  leftHour = Math.floor(sec / 3600);
  nowTime.textContent = `${leftHour}時間${leftMin}分${leftSec}秒:set ok`;
});

const countDown = function () {
  sec -= 1;
  leftSec = sec % 60;
  leftMin = Math.floor((sec % 3600) / 60);
  leftHour = Math.floor(sec / 3600);
  nowTime.textContent = `残り${leftHour}時間${leftMin}分${leftSec}秒`;
  if (sec === 0) {
    alert("終了");
    clearInterval(timer);
  }
};

startTimer.addEventListener("click", function () {
  clearInterval(timer);
  timer = setInterval("countDown()", 1000);
});

stopTimer.addEventListener("click", function () {
  clearInterval(timer);
  nowTime.textContent = `残り${leftHour}時間${leftMin}分${leftSec}秒:stop`;
});
