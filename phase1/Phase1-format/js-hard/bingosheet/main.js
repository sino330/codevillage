// 行、列の数の定義
const line = 6;
const row = 5;

// tableの取得
const table = document.getElementById("view");
// 空の配列を作成
tableSheet = [];
//n列毎に1～15*nの数字を作成
let setNum1 = Math.floor(15 * Math.random() + 1);
let setNum2 = Math.floor(15 * Math.random() + 16);
let setNum3 = Math.floor(15 * Math.random() + 31);
let setNum4 = Math.floor(15 * Math.random() + 46);
let setNum5 = Math.floor(15 * Math.random() + 61);

// 関数指定
function newSheet() {
  //line(行)の作成
  for (let i = 0; i < line; i++) {
    const tr = document.createElement("tr");
    table.appendChild(tr);
    //row列の作成
    for (let n = 0; n < row; n++) {
      let td = document.createElement("td");
      //1行目の文字を入力(i=0の場合)
      if (0 === i)
        //それぞれの文字をマス毎に入力
        switch (n) {
          case 0:
            td.textContent = "B";
            break;
          case 1:
            td.textContent = "I";
            break;
          case 2:
            td.textContent = "N";
            break;
          case 3:
            td.textContent = "G";
            break;
          case 4:
            td.textContent = "O";
            break;
        }
      //0行以外の場合
      //それぞれのマスを配列
      else
        switch (n) {
          case 0:
            //td内にtextContent追加
            td.textContent = setNum1;
            break;
          case 1:
            td.textContent = setNum2;
            break;
          //3行目、3列目はfree
          case 2:
            if (3 === i) {
              td.textContent = "free";
              td.setAttribute("class", "hit-num");
              break;
            }
            td.textContent = setNum3;
            break;
          case 3:
            td.textContent = setNum4;
            break;
          case 4:
            td.textContent = setNum5;
            break;
        }
      tr.appendChild(td);
    }
  }
}
console.log(tableSheet);
newSheet();

//  tdそれぞれにidを指定
// td.setAttribute("id",);

//tdの中に数字を入力
//td.textContent="";

//チャレンジ問題
//hitNumの読み込み
const button = document.getElementById("hitNum");
//hitNumを押したらイベントリスナー発火
button.addEventListener("click", function () {});
