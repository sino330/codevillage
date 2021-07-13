const Form = document.getElementById("form");
const nowPassword = document.getElementById("nowPassword");
let passwordValue = "aaaaa";
nowPassword.textContent = `現在のパスワードは${passwordValue}`;
const setPassword = document.getElementById("setPassword");

setPassword.addEventListener("click", function () {
  const confirmPassword = document.getElementById("confirmPassword").value;
  const newPassword = document.getElementById("newPassword").value;
  if (passwordValue === confirmPassword) {
    if (passwordValue !== newPassword) {
      let result = newPassword.match(/[a-z]{3}-[a-z]{4}/);
      if (!result) {
        alert("xxx-yyyyの形式で入力して下さい");
      };
        if (8 <= newPassword.length) {
          passwordValue = newPassword;
          nowPassword.textContent = `現在のパスワードは${passwordValue}`;
          alert(`新しいパスワードは${passwordValue}です`);
        } else {
          alert("8文字以上にしてください。");
        }
      } else {
        alert("同じパスワードは使えません");
      }
    } else {
      alert("古いパスワードが間違っています");
    }
  }
);
