// const editBtn = document.getElementById("edit_btn");
// editBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   editBtn.style.display = "none";
//   savebtn.style.display = "block";
//   disabled_input();
// });

// const savebtn = document.getElementById("save_btn");
// savebtn.style.display = "none";
// savebtn.addEventListener("click", () => {
//   editBtn.style.display = "block";
//   savebtn.style.display = "none";
//   editProfile();
// });
// const remove = document.getElementById("delete_btn");
// remove.addEventListener("click", (e) => {
//   e.preventDefault();
//   delete1();
// });

// const user_details = JSON.parse(localStorage.getItem("user_details"));

// const details = localStorage.getItem("details");
// const result = user_details.find((value) => value.user_email === details);

// const first_name = document.getElementById("user-firstname");
// const last_name = document.getElementById("user-lastname");
// const password_ = document.getElementById("user-password");
// const user_email = document.getElementById("user-email");
// const mobile = document.getElementById("number");
// const district = document.getElementById("district");
// const pincode = document.getElementById("pincode");

// document
//   .getElementById("profile")
//   .setAttribute("src", `https://ui-avatars.com/api/?name=${result.user_name}`);
// document.getElementById("customer").innerHTML = result.user_name;

// first_name.value = result.user_name;
// last_name.value = result.second_name;
// user_email.value = result.user_email;
// password_.value = result.user_Password;
// mobile.value = result.mobile_number;
// district.value = result.district;
// pincode.value = result.pincode;

// first_name.setAttribute("disabled", "");
// last_name.setAttribute("disabled", "");
// password_.setAttribute("disabled", "");
// mobile.setAttribute("disabled", "");
// district.setAttribute("disabled", "");
// pincode.setAttribute("disabled", "");

// function disabled_input() {
//   first_name.removeAttribute("disabled");
//   last_name.removeAttribute("disabled");
//   password_.removeAttribute("disabled");
//   mobile.removeAttribute("disabled");
//   district.removeAttribute("disabled");
//   pincode.removeAttribute("disabled");
// }

// function editProfile() {
//   for (let i = 0; i < user_details.length; i++) {
//     if (user_details[i].user_email == details) {
//       user_details[i].user_name = first_name.value;
//       user_details[i].second_name = last_name.value;
//       user_details[i].user_Password = password_.value;
//       user_details[i].mobile_number = mobile.value;
//       user_details[i].district = district.value;
//       user_details[i].pincode = pincode.value;

//       first_name.setAttribute("disabled", "");
//       last_name.setAttribute("disabled", "");
//       password_.setAttribute("disabled", "");
//       mobile.setAttribute("disabled", "");
//       district.setAttribute("disabled", "");
//       pincode.setAttribute("disabled", "");

//       localStorage.setItem("user_details", JSON.stringify(user_details));
//     }
//   }
// }

const all_divs = document.querySelectorAll(".boxes");

const my_profile_btn = document.getElementById("my_profile");
const my_profile_box = document.querySelector(".information");
my_profile_btn.addEventListener("click", () => {
  for (let i = 0; i < all_divs.length; i++) {
    all_divs[i].style.display = "none";
  }
  my_profile_box.style.display = "block";
});

my_profile_btn.click();

const my_events_btn = document.getElementById("my_events");
const my_events_box = document.getElementById("my_events_box");

my_events_btn.addEventListener("click", () => {
  for (let i = 0; i < all_divs.length; i++) {
    all_divs[i].style.display = "none";
  }
  my_events_box.style.display = "block";
});

const my_session_btn = document.getElementById("my_session");
const my_session_box = document.getElementById("my_session_page");
my_session_btn.addEventListener("click", () => {
  for (let i = 0; i < all_divs.length; i++) {
    all_divs[i].style.display = "none";
  }
  my_session_box.style.display = "block";
});

// // sessionsitems.forEach(function (value) {

// //  return value.person_name === search;
// // });

// const personal_expert = result.per_exp_id;
// const session_details = JSON.parse(localStorage.getItem("sessioninfo"));

// // let sessions = session_details.find(function (value) {
// //     return value.id === personal_expert;
// //   });

// let sessions = 0;

// for (let i = 0; i < session_details.length; i++) {
//   if (session_details[i].id == personal_expert) {
//     sessions = session_details[i];
//   }
// }

// const expert_img = document.getElementById("expert_img");
// expert_img.src = sessions.images.link;

// const expert_name = document.getElementById("expert_name");
// expert_name.innerText = sessions.person_name;

// const occupation = document.getElementById("occupation");
// occupation.innerText = sessions.occupation;

// const appoitement_list = JSON.parse(
//   localStorage.getItem("appoitement_list_srt")
// );

// for (let i = 0; i < appoitement_list.length; i++) {
//   console.log(appoitement_list[i].user_id, result.user_id);

//   if (appoitement_list[i].user_id == result.user_id) {
//     console.log(appoitement_list[i].user_id, result.user_id);
//     const upcoming_appoitment_list = document.createElement(
//       "upcoming_appoitment_list"
//     );
//     upcoming_appoitment_list.setAttribute("class", "upcoming_appoitment_list");

//     upcoming_appoitment_list.innerHTML = `  <div class="betw">
//     <div><b>Date:</b><span id="ap_date">${appoitement_list[i].appoitment_date}</span> </div>
//     <div> <b>Slot:</b><span id="ap_time">${appoitement_list[i].time_slot}</span> </div></div>

//     <div class="betw">
//         <div><b>Mode:</b><span id="mode">${appoitement_list[i].type}</span> </div>

//         <div><b>catagory:</b><span id="mode">${appoitement_list[i].catagory}</span> </div>

        
//     </div>

//     <div class="betw">
//         <div><b>Mobile_no:</b><span id="mode">${appoitement_list[i].number}</span> </div>

//         <div><b>Email:</b><span id="mode">${appoitement_list[i].user_email}</span> </div>`;
//     document
//       .querySelector(".upcoming_appoitment")
//       .append(upcoming_appoitment_list);
//   }
// }

// // user_details[ind].user_name=document.getElementById("user-firstname").value
// // user_details[ind].second_name=document.getElementById("user-lastname").value;
// // user_details[ind].district=document.getElementById("district").value;
// // user_details[ind].mobile_number=document.getElementById("number").value;
// // user_details[ind].pincode=document.getElementById("pincode").value;
// // user_details

// // document.getElementsByClassName("name");

// // // arr[ind] = user_data;

// // localStorage.setItem("user_details",JSON.stringify(user_details));

// // }

// function delete1() {
//   const ind = user_details.findIndex((value) => value.user_email === details);
//   console.log(ind);

//   if (user_details[ind].user_email == details) {
//     localStorage.setItem("details", "");
//     window.location.href = "./login.html";
//   }
// }



let user_array = JSON.parse(localStorage.getItem("user_details"));
let expert_array = JSON.parse(localStorage.getItem("sessioninfo"));
let event_array = JSON.parse(localStorage.getItem("info"));
let vido_lst_arr = JSON.parse(localStorage.getItem("saved_video_lst"));
let event_lst_arr = JSON.parse(localStorage.getItem("event_list_srt"))


let active_expert = localStorage.getItem("expert_details");
