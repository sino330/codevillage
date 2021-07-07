const input = document.getElementById("sampleForm");
const textCounter = document.getElementById("textCounter");
const reset = document.getElementById("resetBtn");

const character=400;
textCounter.textContent = `残り${character-input.value.length}文字`;

input.addEventListener("keyup", function () {
    textCounter.textContent=`残り${character-input.value.length}文字`;
});

reset.addEventListener('click',function(){
    textCounter.textContent = `残り${character}文字`;
});

//追加チャレンジ問題
const iniDel=document.getElementById('iniDel');
const endDel=document.getElementById('endDel');

iniDel.addEventListener('click',function(){});

endDel.addEventListener('click',function(){});