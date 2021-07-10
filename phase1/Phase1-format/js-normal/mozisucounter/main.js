const input = document.getElementById("sampleForm");
const textCounter = document.getElementById("textCounter");
const reset = document.getElementById("resetBtn");

const character=400;
let textarea;

textCounter.textContent = `残り${character-input.value.length}文字`;

input.addEventListener("keyup", function () {
    textCounter.textContent=`残り${character-input.value.length}文字`;
    textarea=input.value;
});

reset.addEventListener('click',function(){
    textCounter.textContent = `残り${character}文字`;
    textarea=""
});

//追加チャレンジ問題
const iniDel=document.getElementById('iniDel');
const endDel=document.getElementById('endDel');

iniDel.addEventListener('click',function(){
    textarea=textarea.slice(1);
    input.value=textarea;
    textCounter.textContent=`残り${character-input.value.length}文字`;
});

endDel.addEventListener('click',function(){
    textarea = textarea.slice(0,-1);
    input.value = textarea;
    textCounter.textContent = `残り${character - input.value.length}文字`;
});