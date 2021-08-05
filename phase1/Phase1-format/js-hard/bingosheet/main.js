// 行、列の数の定義
const line = 6;
const row = 5;

// tableの取得
const table = document.getElementById("view");
// 空の配列を作成
tableSheet = [];
// 関数指定
function newSheet() {
  //line(行)の作成
  for (let i = 0; i < line; i++) {
    const tr = document.createElement("tr");
    table.appendChild(tr);
    //row列の作成
    for (let n = 0; n < row; n++) {
      let td = document.createElement("td");
      if (0 === i)
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
      else
        switch (n) {
          case 0:
            (n, td);
            break;
          case 1:
            (n, td);
            break;
          case 2:
            if (3 === i) {
              td.textContent = "free";
              td.setAttribute("class", "hit-num");
              break;
            }
            (n, td);
            break;
          case 3:
            (n, td);
            break;
          case 4:
            (n, td);
            break;
        }
      tr.appendChild(td);
    }
  }
}
console.log(tableSheet);
newline();
// rowの追加
// trの中にtdの追加
// // idを設定
// cell6.setAttribute("id", "0");
// cell7.setAttribute("id", "1");
// cell8.setAttribute("id", "2");
// cell9.setAttribute("id", "3");
// cell10.setAttribute("id", "4");
// cell11.setAttribute("id", "5");
// cell12.setAttribute("id", "6");
// cell13.setAttribute("id", "7");
// cell14.setAttribute("id", "8");
// cell15.setAttribute("id", "9");
// cell17.setAttribute("id", "10");
// cell18.setAttribute("id", "11");
// cell19.setAttribute("id", "12");
// cell20.setAttribute("id", "13");
// cell21.setAttribute("id", "14");
// cell22.setAttribute("id", "15");
// cell23.setAttribute("id", "16");
// cell24.setAttribute("id", "17");
// cell25.setAttribute("id", "18");
// cell26.setAttribute("id", "19");
// cell27.setAttribute("id", "20");
// cell28.setAttribute("id", "21");
// cell29.setAttribute("id", "22");
// cell30.setAttribute("id", "23");
// 1列目の文字入力
// cell1.innerHTML = "B";
// cell2.innerHTML = "I";
// cell3.innerHTML = "N";
// cell4.innerHTML = "G";
// cell5.innerHTML = "O";

// const souce1 =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// const b=[];
// b[0] = Souce.splice(math.floor(math.random() * souce1.length),1);
// b[1] = Souce.splice(math.floor(math.random() * souce1.length), 1);
// b[2] = Souce.splice(math.floor(math.random() * souce1.length), 1);
// b[3] = Souce.splice(math.floor(math.random() * souce1.length), 1);
// b[4] = Souce.splice(math.floor(math.random() * souce1.length), 1);
// console.log(b);
