// // 追加ボタン要素の読み込み
// const addBtn = document.getElementsByClassName('add-btn')[0];

// // 追加ボタンでの実行
// addBtn.addEventListener('click',event=>{
    
//     // clickするとinput.valueプロパティとulを読み込む
//     const addTodo = document.getElementById("add-area");
//     const list = document.getElementById("todo");
    
//     // todo-listを追加
//     const newTodo = document.createElement("li");

//     // 完了ボタンの追加
//     const removeButton=document.createElement('button');
//     removeButton.innerText='完了';
    
//     // HTMLへの挿入
//     newTodo.textContent = `${addTodo.value}`;
//     list.appendChild(newTodo);

//     // newTodoへの完了ボタンの子要素の追加
//     newTodo.appendChild(removeButton);

//     // removeボタンでの実行
//     removeButton.addEventListener('click',event=>{

//         // listの削除
//         list.removeChild(newTodo);
//     });
// });

// チャレンジ問題
const addBtn = document.getElementsByClassName('add-btn')[0];
addBtn.addEventListener('click',(event) => {
  const addTodo = document.getElementById("add-area");
  const list = document.getElementById("todo");
  const newTodo = document.createElement("li");
  const removeButton = document.createElement("button");
  removeButton.innerText = "完了";
  const blank = "";
  if (addTodo.value === blank) {
    alert("内容が空欄です");
    return;
  }else{
    newTodo.textContent = `${addTodo.value}`;
    addTodo.value='';
    list.appendChild(newTodo);
    newTodo.appendChild(removeButton);
    removeButton.addEventListener("click", (event) => {
      list.removeChild(newTodo);
    });
  }
});


// ＜解答＞
// const buttonClass = document.getElementsByClassName("add-btn");
// buttonClass[0].addEventListener("click", function () {
//   addElement();
//   delElement();
// });
// const addElement = function () {
//   const listText = document.getElementById("add-area");
//   const text = document.createTextNode(listText.value);
//   // チャレンジ問題
//   if (listText.value === "") {
//     alert("空です！");
//     return;
//   }
//   // チャレンジ問題 ここまで
//   const li = document.createElement("li");
//   li.appendChild(text);
//   // li要素に完了ボタンを追加
//   const trash = document.createElement("button");
//   trash.classList.add("trash");
//   trash.innerHTML = "完了";
//   li.appendChild(trash);
//   const lists = document.getElementById("todo");
//   lists.appendChild(li);
//   // チャレンジ問題
//   listText.value = "";
//   // チャレンジ問題 ここまで
// };
// // todoリスト内の削除ボタン
// const delElement = function () {
//   const trash = document.getElementsByClassName("trash");
//   // クリックしたliタグの配列数を取得
//   for (let i = 0; i < trash.length; i++) {
//     trash[i].addEventListener("click", function () {
//       // thisはtrash[i]にあたる
//       const li = this.parentNode;
//       li.remove();
//     });
//   }
// };
    