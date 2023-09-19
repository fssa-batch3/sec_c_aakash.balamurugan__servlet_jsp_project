


const editBtn = document.getElementById("edit_btn");


editBtn.addEventListener("click", (e) => {
  e.preventDefault();
  editBtn.style.display = "none";
  savebtn.style.display = "block";
  enabled_input();
});

const savebtn = document.getElementById("save_btn");
savebtn.style.display = "none";
savebtn.addEventListener("click", () => {
  editBtn.style.display = "block";
  savebtn.style.display = "none";
  disable_inputs();
 // editProfile();
});
const remove = document.getElementById("delete_btn");
remove.addEventListener("click", (e) => {
  e.preventDefault();
  logout();
});

//const user_details = JSON.parse(localStorage.getItem("user_details"));

//const details = localStorage.getItem("details");
//const result = user_details.find((value) => value.user_email === details);
let first_name = document.getElementById("user-firstname");
const last_name = document.getElementById("user-lastname");
let password_ = document.getElementById("user-password");
let user_email = document.getElementById("user-email");
let mobile = document.getElementById("number");
const district = document.getElementById("district");
const pincode = document.getElementById("pincode");


function displayUser(user){
	first_name.value = user.username;
	password_.value = user.password;
	mobile.value = user.phoneNumber;
	user_email.value = user.email;
	document
  .getElementById("profile")
  .setAttribute("src", `https://ui-avatars.com/api/?name=${user.username}`);
document.getElementById("customer").innerHTML = user.username;
}





disable_inputs();

function disable_inputs(){
	
first_name.setAttribute("disabled", "");
last_name.setAttribute("disabled", "");
password_.setAttribute("disabled", "");
mobile.setAttribute("disabled", "");
district.setAttribute("disabled", "");
pincode.setAttribute("disabled", "");
}

function enabled_input() {
  first_name.removeAttribute("disabled");
  last_name.removeAttribute("disabled");
  password_.removeAttribute("disabled");
  password_.type = "text";
  mobile.removeAttribute("disabled");
  district.removeAttribute("disabled");
  pincode.removeAttribute("disabled");
}
/*
function editProfile() {
  for (let i = 0; i < user_details.length; i++) {
    if (user_details[i].user_email == details) {
      user_details[i].user_name = first_name.value;
      user_details[i].second_name = last_name.value;
      user_details[i].user_Password = password_.value;
      user_details[i].mobile_number = mobile.value;
      user_details[i].district = district.value;
      user_details[i].pincode = pincode.value;

    disable_inputs();

      localStorage.setItem("user_details", JSON.stringify(user_details));
    }
  }
}
*/
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

const vid_show = document.getElementById("show_vid");
const vid_btn = document.getElementById("video_list");
vid_btn.addEventListener("click", () => {
  for (let i = 0; i < all_divs.length; i++) {
    all_divs[i].style.display = "none";
  }
  vid_show.style.display = "block";
});

// sessionsitems.forEach(function (value) {

//  return value.person_name === search;
// });

//const personal_expert = result.per_exp_id;
const session_details = JSON.parse(localStorage.getItem("sessioninfo"));

// let sessions = session_details.find(function (value) {
//     return value.id === personal_expert;
//   });
/*
let sessions = 0;

for (let i = 0; i < session_details.length; i++) {
  if (session_details[i].id == personal_expert) {
    sessions = session_details[i];
    const expert_img = document.getElementById("expert_img");
    expert_img.src = sessions.images.link;
    
    const expert_name = document.getElementById("expert_name");
    expert_name.innerText = sessions.person_name;
    
    const occupation = document.getElementById("occupation");
    occupation.innerText = sessions.occupation;
  }
}

*/
/*
const appoitement_list = JSON.parse(
  localStorage.getItem("appoitement_list_srt")
);

for (let i = 0; i < appoitement_list.length; i++) {



  if (appoitement_list[i].user_id == result.user_id) {
 
    const upcoming_appoitment_list = document.createElement(
      "upcoming_appoitment_list"
    );
    upcoming_appoitment_list.setAttribute("class", "upcoming_appoitment_list");

    upcoming_appoitment_list.innerHTML = `  <div class="betw">
    <div><b>Date:</b><span id="ap_date">${appoitement_list[i].appoitment_date}</span> </div>
    <div> <b>Slot:</b><span id="ap_time">${appoitement_list[i].time_slot}</span> </div></div>

    <div class="betw">
        <div><b>Mode:</b><span id="mode">${appoitement_list[i].type}</span> </div>

        <div><b>catagory:</b><span id="mode">${appoitement_list[i].catagory}</span> </div>

        
    </div>

    <div class="betw">
        <div><b>Mobile_no:</b><span id="mode">${appoitement_list[i].number}</span> </div>

        <div><b>Email:</b><span id="mode">${appoitement_list[i].user_email}</span> </div>`;
    document
      .querySelector(".upcoming_appoitment")
      .append(upcoming_appoitment_list);
  }
}

// user_details[ind].user_name=document.getElementById("user-firstname").value
// user_details[ind].second_name=document.getElementById("user-lastname").value;
// user_details[ind].district=document.getElementById("district").value;
// user_details[ind].mobile_number=document.getElementById("number").value;
// user_details[ind].pincode=document.getElementById("pincode").value;
// user_details

// document.getElementsByClassName("name");

// // arr[ind] = user_data;

// localStorage.setItem("user_details",JSON.stringify(user_details));

// }


//let info = JSON.parse(localStorage.getItem("info"));

//let event_list = JSON.parse(localStorage.getItem("event_list_srt"));

	  */
	function displayEvents(events) {
  const myEventsBox = document.querySelector("#my_events_box");

  events.forEach((event) => {
	  console.log(event);
    const redirect = document.createElement("a");
    redirect.setAttribute( "href","#" );

    const divEvent = document.createElement("div");
    divEvent.setAttribute("class", "event");
    redirect.appendChild(divEvent);

    const divEventBox = document.createElement("div");
    
    if (event.active) {
  
        divEventBox.classList.add("activeEvent"); 

    
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-button");

        
        deleteButton.addEventListener("click", () => {
          deactiveEventbook(event.id);
        });

   
        divEventBox.appendChild(deleteButton);
    } else {
    
        divEventBox.classList.add("deactiveEvent");
    }

    divEventBox.classList.add( "eventbox");
    divEvent.appendChild(divEventBox);

    const divOnuila = document.createElement("div");
    divOnuila.setAttribute("class", "");
    divEventBox.appendChild(divOnuila);

    const imgPhoto = document.createElement("img");
    imgPhoto.setAttribute("src", event.imageUrl);
    imgPhoto.setAttribute("alt", event.eventName);
    divOnuila.appendChild(imgPhoto);

    const divNone = document.createElement("div");
    divNone.setAttribute("class", "title_para");
    divEventBox.appendChild(divNone);

    const h2Title = document.createElement("h2");
    h2Title.innerHTML = event.eventName;
    divNone.appendChild(h2Title);

    const pPara = document.createElement("p");
    pPara.innerText = event.eventDescription;
    divNone.appendChild(pPara);

    const divNothing = document.createElement("div");
    divNothing.setAttribute("class", "");
    divEventBox.appendChild(divNothing);

    const venue = document.createElement("h4");
    venue.innerHTML = `Date: ${event.eventDate} <br><br>
    Time: ${event.eventTime}<br><br>
    Venue: ${event.eventAddress}`;
    divNothing.appendChild(venue);

    myEventsBox.appendChild(redirect);
  });
}



 function deactiveEventbook(event) {
	
			const url =location.origin + "/betterme-web/DeleteBook?event="+event;
    axios.post(url)
            .then(function(response){
            	console.log(response);
            	if(response.data==true){
                	 alert("Susccessfully booking cancelled", "success");
                	 window.location.href="./profile.html";
                 }
                 else{
                	 alert( "failed registerd", "error"); 
                 }
            })
	
}

// Function to fetch event data from the server;

async function fetchBooking() {
	try {
		const response = await fetch(location.origin + "/betterme-web/BookingForUserJSON");

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		// Assuming the response is JSON data
		const info = await response.json();

		// Now you can work with 'info'
	
		displayEvents(info); 
	} catch (error) {
		// Handle any errors that occurred during the fetch
		console.error("Fetch error:", error);
	}
}

async function fetchUser() {
	try {
		const response = await fetch(location.origin + "/betterme-web/GetUserJson");

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		// Assuming the response is JSON data
		const user = await response.json();

		// Now you can work with 'info'
	console.log(user)
		displayUser(user[0]); 
	} catch (error) {
		// Handle any errors that occurred during the fetch
		console.error("Fetch error:", error);
	}
}

// Call the async function to initiate the fetch
fetchUser();

fetchBooking();

/*
function logout() {
  const ind = user_details.findIndex((value) => value.user_email === details);


  if (user_details[ind].user_email == details) {
    localStorage.setItem("details", "");
    window.location.href = "./login.html";
  }
}



// show videos

const savedVideos = JSON.parse(localStorage.getItem("saved_video_lst"))
for (let i = 0; i < savedVideos.length; i++) {


let vid_blob = savedVideos[i]["blob"]

const video = document.createElement("video")
video.setAttribute("src",vid_blob)
video.setAttribute("controls","");
video.setAttribute("class", "video")

const video_show_para = document.createElement("p");
video_show_para.setAttribute("class", "")
video_show_para.innerText = `Date:${savedVideos[i]["date"]}`

const video_show_div = document.createElement("div");
video_show_div.setAttribute("class", "")
video_show_div.append(video_show_para);
video_show_div.append(video);


document.querySelector(".video").append(video_show_div);

}
*/