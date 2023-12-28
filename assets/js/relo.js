//验证码
// 得出两个 1 到 10 之间的随机数，并赋值给randomNumber1/2
let randomNumber1 = Math.floor(Math.random() * 10) + 1;
let randomNumber2 = Math.floor(Math.random() * 10) + 1;
var btnlogin = document.getElementById("login");
var a = document.getElementById("runto");
var username = document.getElementById("InputEmail");
var pwd = document.getElementById("InputPassword");
//计算结果为
let resultNum = Number(randomNumber1 * randomNumber2);
//在验证框显示的算式
document.getElementById("verify").innerHTML =
  randomNumber1 + "*" + randomNumber2 + "=";
btnlogin.onclick = function res() {
  const InputCode = document.querySelector(".inputField");
  const userinput = Number(InputCode.value);
  if (username.value == "admin@qq.com" && pwd.value == "1228") {
    if (userinput === resultNum) {
      alert("登录成功");
      a.href = "cover.html";
    } else {
      document.getElementById("verifyres").innerHTML = "验证不通过";
      alert("验证码不对！请重新验证");
    }
  }
  else {
    alert("用户名或密码不正确！")
  }
};