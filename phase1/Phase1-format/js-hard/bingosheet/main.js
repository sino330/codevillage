// 行、列の数の定義
const line = 6;
const row = 5;

// tableの取得
const table = document.getElementById("view");
//B列の数字重複しない数字の作成
const sourceB = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const numB = [];
numB[0] = sourceB.splice(Math.floor(Math.random() * sourceB.length), 1)[0];
numB[1] = sourceB.splice(Math.floor(Math.random() * sourceB.length), 1)[0];
numB[2] = sourceB.splice(Math.floor(Math.random() * sourceB.length), 1)[0];
numB[3] = sourceB.splice(Math.floor(Math.random() * sourceB.length), 1)[0];
numB[4] = sourceB.splice(Math.floor(Math.random() * sourceB.length), 1)[0];
//I列
const sourceI = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
const numI = [];
numI[0] = sourceI.splice(Math.floor(Math.random() * sourceI.length), 1)[0];
numI[1] = sourceI.splice(Math.floor(Math.random() * sourceI.length), 1)[0];
numI[2] = sourceI.splice(Math.floor(Math.random() * sourceI.length), 1)[0];
numI[3] = sourceI.splice(Math.floor(Math.random() * sourceI.length), 1)[0];
numI[4] = sourceI.splice(Math.floor(Math.random() * sourceI.length), 1)[0];
console.log(numI);
//N列
const sourceN = [31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45];
const numN = [];
numN[0] = sourceN.splice(Math.floor(Math.random() * sourceN.length), 1)[0];
numN[1] = sourceN.splice(Math.floor(Math.random() * sourceN.length), 1)[0];
numN[2] = sourceN.splice(Math.floor(Math.random() * sourceN.length), 1)[0];
numN[3] = sourceN.splice(Math.floor(Math.random() * sourceN.length), 1)[0];
//G列
const sourceG = [46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60];
const numG = [];
numG[0] = sourceG.splice(Math.floor(Math.random() * sourceG.length), 1)[0];
numG[1] = sourceG.splice(Math.floor(Math.random() * sourceG.length), 1)[0];
numG[2] = sourceG.splice(Math.floor(Math.random() * sourceG.length), 1)[0];
numG[3] = sourceG.splice(Math.floor(Math.random() * sourceG.length), 1)[0];
numG[4] = sourceG.splice(Math.floor(Math.random() * sourceG.length), 1)[0];
//O列
const sourceO = [61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75];
const numO = [];
numO[0] = sourceO.splice(Math.floor(Math.random() * sourceO.length), 1)[0];
numO[1] = sourceO.splice(Math.floor(Math.random() * sourceO.length), 1)[0];
numO[2] = sourceO.splice(Math.floor(Math.random() * sourceO.length), 1)[0];
numO[3] = sourceO.splice(Math.floor(Math.random() * sourceO.length), 1)[0];
numO[4] = sourceO.splice(Math.floor(Math.random() * sourceO.length), 1)[0];

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
          //1列目の場合
          case 0:
            console.log(n, td);
            if (1 === i) {
              td.textContent = numB[0];
              td.setAttribute("id", "0");
            } else if (2 === i) {
              td.textContent = numB[1];
              td.setAttribute("id", "1");
            } else if (3 === i) {
              td.textContent = numB[2];
              td.setAttribute("id", "2");
            } else if (4 === i) {
              td.textContent = numB[3];
              td.setAttribute("id", "3");
            } else if (5 === i) {
              td.textContent = numB[4];
              td.setAttribute("id", "4");
            }
            break;
          case 1:
            if (1 === i) {
              td.textContent = numI[0];
              td.setAttribute("id", "5");
            } else if (2 === i) {
              td.textContent = numI[1];
              td.setAttribute("id", "6");
            } else if (3 === i) {
              td.textContent = numI[2];
              td.setAttribute("id", "7");
            } else if (4 === i) {
              td.textContent = numI[3];
              td.setAttribute("id", "8");
            } else if (5 === i) {
              td.textContent = numI[4];
              td.setAttribute("id", "9");
            }
            break;
          //3行目、3列目はfree
          case 2:
            if (1 === i) {
              td.textContent = numN[0];
              td.setAttribute("id", "10");
            } else if (2 === i) {
              td.textContent = numN[1];
              td.setAttribute("id", "11");
            } else if (4 === i) {
              td.textContent = numN[2];
              td.setAttribute("id", "12");
            } else if (5 === i) {
              td.textContent = numN[3];
              td.setAttribute("id", "13");
            }
            if (3 === i) {
              td.textContent = "free";
              td.setAttribute("class", "hit-num");
              break;
            }
            break;
          case 3:
            if (1 === i) {
              td.textContent = numG[0];
              td.setAttribute("id", "14");
            } else if (2 === i) {
              td.textContent = numG[1];
              td.setAttribute("id", "15");
            } else if (3 === i) {
              td.textContent = numG[2];
              td.setAttribute("id", "16");
            } else if (4 === i) {
              td.textContent = numG[3];
              td.setAttribute("id", "17");
            } else if (5 === i) {
              td.textContent = numG[4];
              td.setAttribute("id", "18");
            }
            break;
          case 4:
            if (1 === i) {
              td.textContent = numO[0];
              td.setAttribute("id", "19");
            } else if (2 === i) {
              td.textContent = numO[1];
              td.setAttribute("id", "20");
            } else if (3 === i) {
              td.textContent = numO[2];
              td.setAttribute("id", "21");
            } else if (4 === i) {
              td.textContent = numO[3];
              td.setAttribute("id", "22");
            } else if (5 === i) {
              td.textContent = numO[4];
              td.setAttribute("id", "23");
            }
            break;
        }
      tr.appendChild(td);
    }
  }
}
newSheet();

//※二次元配列例
// const numbers = [
//   [1, 2, 3, 4, 5],
//   [11, 12, 13, 14, 15],
//   [21, 22, null, 24, 25],
//   [31, 32, 33, 34, 35],
//   [41, 42, 43, 44, 45],
// ];
// console.log(numbers[2][0]);

//チャレンジ問題
//hitNumの読み込み
const button = document.getElementById("hitNum");
//空配列作成
delNum = [];

//hitNumを押したらイベントリスナー発火
button.addEventListener("click", function () {
  let e;
  //繰り返し処理
  while (true) {
    //randomで1~75までの数字を生成
    e = Math.floor(75* Math.random() + 1);
    //重複しない
    if (!delNum.includes(e)) {
      delNum.push(e);
      alert(`数字は${e}番です`);
      break;
    }
  }
  console.log(delNum);

  // delNumが配列Bに含まれている場合
  let findindex = numB.indexOf(e);
  if (-1 === findindex) {
    findindex= numI.indexOf(e)+5;
    if(4===findindex){
      findindex = numN.indexOf(e)+10;
      if(9===findindex){
        findindex = numG.indexOf(e)+14;
        if(13===findindex){
          findindex = numO.indexOf(e)+19;
          if(18===findindex){
            return;
          }
        }
      }
    }
  }
  console.log(findindex)
  let td = document.getElementById(findindex);
  td.setAttribute("class", "hit-num");
});



//解答


// const sheet = document.getElementById('view');
// const sheetContent = [];

// const newSheet = function() {
//   for (let x = 0; x < 6; x++) {
//     const tr = document.createElement('tr');
//     sheet.appendChild(tr);
//     for (let y = 0; y < 5; y++) {
//       let td = document.createElement('td');
//       if (x === 0) {
//         switch (y) {
//           case 0: {
//             td.textContent = 'B';
//             break;
//           }
//           case 1: {
//             td.textContent = 'I';
//             break;
//           }
//           case 2: {
//             td.textContent = 'N';
//             break;
//           }
//           case 3: {
//             td.textContent = 'G';
//             break;
//           }
//           case 4: {
//             td.textContent = 'O';
//             break;
//           }
//         }
//       } else {
//         switch (y) {
//           case 0: {
//             check(y, td);
//             break;
//           }
//           case 1: {
//             check(y, td);
//             break;
//           }
//           case 2: {
//             if (x === 3) {
//               td.textContent = 'free';
//               td.setAttribute('class', 'hit-num');
//               break;
//             }
//             check(y, td);
//             break;
//           }
//           case 3: {
//             check(y, td);
//             break;
//           }
//           case 4: {
//             check(y, td);
//             break;
//           }
//         }
//       }
//       tr.appendChild(td);
//     }
//   }
// };

// const check = function(y, td) {
//   while (true) {
//     let calc = Math.floor(Math.random() * 15 + 15 * y + 1);

//     if (!sheetContent.includes(calc)) {
//       sheetContent.push(calc);
//       td.textContent = calc;
//       td.setAttribute('id', sheetContent.length - 1);
//       break;
//     }
//   }
// };

// console.log(sheetContent);

// newSheet();

// // チャレンジ問題

// const numLog = [];

// const hitNum = document.getElementById('hitNum');

// hitNum.addEventListener('click', function() {
//   while (true) {
//     let randomNum = Math.floor(Math.random() * 75 + 1);

//     if (!numLog.includes(randomNum)) {
//       alert(`数字は${randomNum}番です！`);
//       numLog.push(randomNum);
//       let result = sheetContent.indexOf(randomNum);
//       if (result === -1) {
//         return;
//       }
//       const target = document.getElementById(result);
//       target.setAttribute('class', 'hit-num');
//       break;
//     }
//   }
// });

// // チャレンジ問題 ここまで
