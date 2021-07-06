const number=document.getElementById('number');
const setTime=document.getElementById('setTime');
const startTimer=document.getElementById('startTimer');
const stopTimer=document.getElementById('stopTimer');

const nowTime=document.getElementById('nowTime')
let sec=10;

setTime.addEventListener('click',function(){
    sec=document.getElementById('inputTime').value;
    nowTime.textContent=`${sec}:set ok`;
});



