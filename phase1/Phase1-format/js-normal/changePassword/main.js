const Form = document.getElementById("form");
const nowPassword = document.getElementById("nowPassword");
let PasswordValue = "aaaaa";
nowPassword.textContent = `現在のパスワードは${PasswordValue}`;
const setPassword = document.getElementById("setPassword");

// setPassword.addEventListener("click", function () {
//   const confirmPassword = document.getElementById("confirmPassword").value;
//   const newPassword = document.getElementById("newPassword").value;
//   if (PasswordValue === confirmPassword) {
//     if (PasswordValue !== newPassword) {
//       if (8 <= newPassword.length) {
//         PasswordValue = newPassword;
//         PasswordValue.textContent = PasswordValue;
//         nowPassword.textContent = `現在のパスワードは ${PasswordValue}`;
//         alert(`新しいパスワードは ${PasswordValue}です`);
//       } else {
//         alert("8文字以上にして下さい。");
//       }
//     } else {
//       alert("同じパスワードはつかえません！");
//     }
//   } else {
//     alert("古いパスワードが間違っています！");
//   }
// });

// 追加チャレンジ1
// setPassword.addEventListener("click", function () {
//   const confirmPassword = document.getElementById("confirmPassword").value;
//   const newPassword = document.getElementById("newPassword").value;
//   if (PasswordValue !== newPassword) {
//     let result = newPassword.match(/^\d{3}-?\d{4}$/g);
//     if (!result) {
//       alert("xxx-yyyyの形式で入力してください");
//     } else {
//       PasswordValue = newPassword;
//       PasswordValue.textContent = PasswordValue;
//       nowPassword.textContent = `現在のパスワードは ${PasswordValue}`;
//       alert(`新しいパスワードは ${PasswordValue}です`);
//     }
//   }
// });

// 追加チャレンジ2
// setPassword.addEventListener("click", function () {
//   const confirmPassword = document.getElementById("confirmPassword").value;
//   const newPassword = document.getElementById("newPassword").value;
//   if (PasswordValue !== newPassword) {
//     const check = /(.)\1/;
//     let result = check.test(newPassword);
//     if (!result) {
//       PasswordValue = newPassword;
//       PasswordValue.textContent = PasswordValue;
//       nowPassword.textContent = `現在のパスワードは ${PasswordValue}`;
//       alert(`新しいパスワードは ${PasswordValue}です`);
//     } else {
//       alert("同じ文字を連続で使うことは出来ません");
//     }
//   }
// });

// 追加チャレンジ3

// 追加チャレンジ総合