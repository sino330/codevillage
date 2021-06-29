const startBtn=document.getElementById('btn');
const body=document.querySelector('body');
const dice=document.createElement('img');
// diceBtnCss 
body.appendChild(dice);
dice.style.width='100px';
dice.style.height='100px';
let diceNum='./img/saikoro1.png';
const random=function(){
    diceNum=`./img/saikoro${Math.floor(Math.random()*6+1)}.png`;
    dice.setAttribute('src',diceNum);
}
var timer;
timer=setInterval('random()',100);
startBtn.addEventListener('click',function(){
    timer=setInterval('random()',100);
    setTimeout(function () {
      clearInterval(timer);
    }, 3000);
})

