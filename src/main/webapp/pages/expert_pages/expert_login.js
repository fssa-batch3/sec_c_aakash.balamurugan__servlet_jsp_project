const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  aakash();
});

function aakash() {
  const log_email = document.getElementById("log_email").value;
  const log_password = document.getElementById("log_password").value;

  const arr = JSON.parse(localStorage.getItem("sessioninfo"));

  //   let result = arr.find(function (value) {
  //     return value.user_email === log_email;
  //   });

  let result;
  let res;
  for (let i = 0; i < arr.length; i++) {
    if (log_email === arr[i].login) {
      result = arr[i];
      res = 1;
      console.log(result);
      break;
    } else {
      res = 0;
    }
  }
  console.log(res);
  if (res == 0) {
    alert("don't have an account ,it only for the admin");
  }
  //   let ind = arr.findIndex(value => value == result);

  if (res == 1) {
    console.log("1111");
    if (log_password == result.login_pass) {
      localStorage.setItem("expert_details", result.login);

      alert("expert login succes");

      window.location.href = "./expert_landing.html";
    } else {
      alert("incorret password");
    }
  }
}
