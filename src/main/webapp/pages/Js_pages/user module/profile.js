


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
  UpdateUser(mobile.value,first_name.value  )
  disable_inputs();
 // editProfile();
});
const remove = document.getElementById("logout");
remove.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href=location.origin + "/betterme-web/LogoutServlet";

});

//const user_details = JSON.parse(localStorage.getItem("user_details"));

//const details = localStorage.getItem("details");
//const result = user_details.find((value) => value.user_email === details);
let first_name = document.getElementById("user-firstname");


let user_email = document.getElementById("user-email");
let mobile = document.getElementById("number");
const district = document.getElementById("district");

function appoitmentList(appoitement_list){
	
	for (let i = 0; i < appoitement_list.length; i++) {
 
    const upcoming_appoitment_list = document.createElement(
      "upcoming_appoitment_list"
    );
    upcoming_appoitment_list.setAttribute("class", "upcoming_appoitment_list");

    upcoming_appoitment_list.innerHTML = `  <div class="betw">
    <div><b>Date:</b><span id="ap_date">${appoitement_list[i].appointmentDate}</span> </div>
    <div> <b>Slot:</b><span id="ap_time">${appoitement_list[i].timeSlot}</span> </div></div>

    <div class="betw">
        <div><b>Mode:</b><span id="mode">${appoitement_list[i].type}</span> </div>

        <div><b>catagory:</b><span id="mode">${appoitement_list[i].category}</span> </div>

        
    </div>

    <div class="betw">
        <div><b>Mobile_no:</b><span id="mode">${appoitement_list[i].number}</span> </div>

       `;
    document
      .querySelector(".upcoming_appoitment")
      .append(upcoming_appoitment_list);
  
}

};

function displayUser(user){
	first_name.value = user.username;
	
	mobile.value = user.phoneNumber;
	user_email.value = user.email;
	document
  .getElementById("profile")
  .setAttribute("src", `https://ui-avatars.com/api/?name=${user.username}`);
document.getElementById("customer").innerHTML = user.username;
};


disable_inputs();

function disable_inputs(){
	
first_name.setAttribute("disabled", "");

mobile.setAttribute("disabled", "");


}

function enabled_input() {
  first_name.removeAttribute("disabled");

  mobile.removeAttribute("disabled");
 
}

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


	 
	 
	 async function fetchAppoitement() {
	try {
		const response = await fetch(location.origin + "/betterme-web/GetUserAppoitement?id="+search);

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		// Assuming the response is JSON data
		const info = await response.json();

		// Now you can work with 'info'
	
		appoitmentList(info); 
	} catch (error) {
		// Handle any errors that occurred during the fetch
		console.error("Fetch error:", error);
	}
}


	function displayEvents(events) {
		
		console.log(events);
  const myEventsBox = document.querySelector("#my_events_box");
  events.forEach((event) => {
	 
    const redirect = document.createElement("a");
    redirect.setAttribute( "href","#" );

    const divEvent = document.createElement("div");
    divEvent.setAttribute("class", "event");
    redirect.appendChild(divEvent);

    const divEventBox = document.createElement("div");
     let deleteButton ;
    if (event.active) {
  
        divEventBox.classList.add("activeEvent"); 

    
     deleteButton  = document.createElement("button");
        deleteButton.textContent = "Cancel Booking";
        deleteButton.classList.add("delete-button");

        
        deleteButton.addEventListener("click", () => {
          deactiveEventbook(event.id);
        });

   
       
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
      if (event.active) { 
     divOnuila.appendChild(deleteButton);
}
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
            	if(response.data==true){
                	 alert("Susccessfully booking cancelled", "success");
                	 location.reload();
                 }
                 else{
                	 alert( response.data); 
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

async function fetchAppoitement() {
	try {
		const response = await fetch(location.origin + "/betterme-web/GetUserAppoitement");

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		// Assuming the response is JSON data
		const info = await response.json();

		// Now you can work with 'info'
	
		appoitmentList(info); 
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

		displayUser(user[0]); 
	} catch (error) {
		// Handle any errors that occurred during the fetch
		console.error("Fetch error:", error);
	}
}

async function fetchUserVideo() {
	try {
		const response = await fetch(location.origin + "/betterme-web/GetVideoForUser");

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		// Assuming the response is JSON data
		const videos = await response.json();

		// Now you can work with 'info'

		show_videos(videos); 
	} catch (error) {
		// Handle any errors that occurred during the fetch
		console.error("Fetch error:", error);
	}
}




 function UpdateUser(umobile,uname) {
	
			const url = location.origin + "/betterme-web/UpdateUser?name="+uname+"&mobile="+umobile;
    axios.post(url)
            .then(function(response){
            
            	if(response.data==true){
                	 alert("Susccessfully Updated", "success");
                	 
                 }
                 else{
                	 alert( response.data); 
                	 location.reload();
                 }
            })
	
}

// Call the async function to initiate the fetch
fetchUser();

fetchBooking();

fetchUserVideo();

fetchAppoitement();





function show_videos(savedVideos){


for (let i = 0; i < savedVideos.length; i++) {


let vid_blob = savedVideos[i];

const video = document.createElement("video")
video.setAttribute("src",vid_blob)
video.setAttribute("controls","");
video.setAttribute("class", "video")

//const video_show_para = document.createElement("p");
//video_show_para.setAttribute("class", "")
//video_show_para.innerText = `Date:${savedVideos[i]["date"]}`;

const video_show_div = document.createElement("div");
video_show_div.setAttribute("class", "")
//video_show_div.append(video_show_para);
video_show_div.append(video);


document.querySelector(".video").append(video_show_div);

}
}