const title = document.getElementById("title");
console.log(`<h1>タグの中身のテキストは${title.textContent}です。`);

const list = document.querySelector(".list");
console.log(
  `<ul>タグの2つ目の子要素のテキストは${list.children[1].textContent}です`
);

const newItem = document.createElement("li");
newItem.textContent = "もも";
list.appendChild(newItem);

const button = document.getElementById("button");

// ボタンを押したときに確認画面を出す。
// イベントリスナー(イベントハンドラー)⁼＞何かイベントが起こった際に実行したい処理を記述できる機能
button.addEventListener("click", (event) => {
  confirm("削除してよろしいですか？");
});
