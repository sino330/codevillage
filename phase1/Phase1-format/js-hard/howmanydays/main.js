// 現在時間
const nowTime=moment();
// ドラえもん誕生日(2112/9/3)
const endTime=moment('2112-9-03 00:00:00');
// 現在時間と誕生日の差
let diffDay=endTime.diff(nowTime,'days',true);
console.log(diffDay);


// body要素を取得
const body=document.querySelector('body');
// pタグ要素追加
const item=document.createElement('p');
body.appendChild(item);
// pタグのtextcontent追加
item.textContent=`ドラえもんが生まれるまで後${diffDay}日です。`;

