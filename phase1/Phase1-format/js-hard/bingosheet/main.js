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
            console.log(n,td);
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

//※重複しない数字を列毎に入力
// setNum = function (i) {
//   //1～15までの数字を作成
//   const n = Math.floor(15 * Math.random() * i + 1);
//   //入力する空配列の作成
//   let sheet = [];
//   //numBにrandomで取得したbの配列からindex数字にあった数字を取り出す
//   //sheetに作成したnが含まれない場合
//   if (!sheet.includes(n)) {
//     //nをpush
//     sheet.push(n);
//     //nをtextcontentに表示
//     td.textContent = n;
//     //sheetに入れた配列の-1をidに表示
//     td.setAttribute("id", sheet.length - 1);
//   }
// };

//n列毎に1～15*arr.lengthの数字を作成
// let makeCol=function(base){
//   //1～15の数字の配列を作成
//   var arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
//   var list=[];
//   for(let i=1;i<line;i++){
//     //1~15の乱数を生成
//     var a=Math.floor(Math.random()*arr.length);
//     list.push(arr[a]+base);
//       //数字が重複しないように配列から削除
//       arr.splice(a,1);
//   }
// }

// let arrayB=array(5);
//             arrayB[0]=Math.floor(Math.random()*15+1);
//             td.textContent=arrayB[0];
//             do{
//               arrayB[1]=Math.floor(Math.random()*15+1);
//             }while(arrayB[0]===arrayB[1]);
//             do{
//               arrayB[2]=Math.floor(Math.random()*15+1);
//             while(arrayB[0]===arrayB[1]||arrayB[])
//             }

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
  //繰り返し処理
  while(true){
    //randomで1~75までの数字を生成
    let e = Math.floor(15 * Math.random() + 1);
    //重複しない
    if(!delNum.includes(e)){
      delNum.push(e);
      break;
    }
    
  }
  alert(e);

  
    
    if (!numB.includes(e)) {
      //alertで表示
      alert(e);
      //空配列にrandomの数字を格納
      delNum.push(e);
      if (numB.indexOf(e)) {
        let td = document.querySelector("td");
        td.setAttribute("class", "hit-num");
      }
    };
  
　console.log(delNum);
});

// td.setAttribute("class", "hit-num");
