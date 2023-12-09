const sessionsitems = JSON.parse(localStorage.getItem("sessioninfo"));

const url = window.location.search;
const urlparams = new URLSearchParams(url);
const search = urlparams.get("name");

var active_user_expert =0;
async function displayDetails(result){
	
const selected_expert = result.id;

const Appoitment_link = document.getElementById("Appoitment");

const Message = document.querySelector("#Message")

Appoitment_link.addEventListener("click", (e) => {
  e.preventDefault();
  if (active_user_expert == result.id) {
    window.location.href = `./Appoitment_booking.jsp?selected_expert=${selected_expert}`;
    // console.log("1");
  } else if (active_user_expert == 0) {
    window.location.href = `./Appoitment_booking.jsp?selected_expert=${selected_expert}`;
  } else if (active_user_expert !== result.id) {
    alert("Please make appoitiment with your personal expert");
    // console.log("2");
  }
});

Message.addEventListener("click" ,  (e) => {
  e.preventDefault();
  if (active_user_expert == result.id) {
    window.location.href = `./../video_rec.jsp?selected_expert=${selected_expert}`;
    // console.log("1");
  } else if (active_user_expert == 0) {
	  window.location.href = `./../video_rec.jsp?selected_expert=${selected_expert}`;
   // alert("please select an personal expert");
  } else if (active_user_expert !== result.id) {
    alert("Please video recording to your personal expert");
    // console.log("2");
  }
} )

const expert_name = document.getElementById("expert_name");
expert_name.innerText = result.trainerName;

const expert_img = document.getElementById("expert_img");
expert_img.src = result.imageLink;

const occupation = document.getElementById("occupation");
occupation.innerText = result.occupation;

const expert_name_para = document.getElementById("expert_name_para");
expert_name_para.innerText = result.person_name;

const summary = document.getElementById("summary_cont");
summary.innerText = result.content;

const education_li = document.getElementById("education_li");

let education = JSON.parse(result.education);
console.log(education);
   for (var i = 0; i < education.length; i++) {
            var item = education[i];
            var listItem = document.createElement("li"); // Create a list item
            listItem.textContent = item.degree; // Set the text of the list item
            education_li.appendChild(listItem); // Append the list item to the UL
        }

const exprience_li = document.getElementById("exprience_li");
let exprience = JSON.parse(result.exprience);
   for (var i = 0; i < exprience.length; i++) {
            var item = exprience[i];
            var listItem = document.createElement("li"); // Create a list item
            listItem.textContent = item.position; // Set the text of the list item
            exprience_li.appendChild(listItem); // Append the list item to the UL
        }





}

async function fetchTrainerDetails(){
try {
		const response = await fetch(location.origin + "/betterme-web/GetTrainerDetails?id="+search);

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		// Assuming the response is JSON data
		const trainer = await response.json();

		// Now you can work with 'info'
	console.log(trainer)
		displayDetails(trainer[0]); 
	} catch (error) {
		// Handle any errors that occurred during the fetch
		console.error("Fetch error:", error);
	}

}

fetchTrainerDetails();
