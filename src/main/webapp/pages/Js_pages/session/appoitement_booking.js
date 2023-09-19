const sessionsitems = JSON.parse(localStorage.getItem("sessioninfo"));

const url = window.location.search;
const urlparams = new URLSearchParams(url);
const search = urlparams.get("selected_expert");

let result;
// sessionsitems.forEach(function (value) {

//  return value.person_name === search;
// });

sessionsitems.forEach((e) => {
  if (e.id == search) {
    return (result = e);
  }
});

const expert_img = document.getElementById("expert_img");
expert_img.src = result.images.link;

const expert_name = document.getElementById("expert_name");
expert_name.innerText = result.person_name;

const occupation = document.getElementById("occupation");
occupation.innerText = result.occupation;

const select_btn = document.querySelectorAll(".app_select");

const extend_div = document.querySelectorAll(".extend");

select_btn[0].addEventListener("click", () => {
  window.location.href = `./review_booking.html?expertname=${search}&mode=voice`;
});

select_btn[1].addEventListener("click", () => {
  window.location.href = `./review_booking.html?expertname=${search}&mode=video`;
});

select_btn[2].addEventListener("click", () => {
  window.location.href = `./review_booking.html?expertname=${search}&mode=chat`;
});
