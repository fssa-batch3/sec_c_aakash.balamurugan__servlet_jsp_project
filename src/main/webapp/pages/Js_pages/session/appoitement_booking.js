

const url = window.location.search;
const urlparams = new URLSearchParams(url);
const search = urlparams.get("selected_expert");

var result;
// sessionsitems.forEach(function (value) {

//  return value.person_name === search;
// });

async function fetchTrainerDetails(){
try {
		const response = await fetch(location.origin + "/betterme-web/GetTrainerDetails?id="+search);

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		// Assuming the response is JSON data
		const trainer = await response.json();

	
	display(trainer[0]);
	} catch (error) {
		// Handle any errors that occurred during the fetch
		console.error("Fetch error:", error);
	}

}
fetchTrainerDetails();

function display(result){
	const expert_img = document.getElementById("expert_img");
	expert_img.src = result.imageLink;

	const expert_name = document.getElementById("expert_name");
	expert_name.innerText = result.trainerName;

	const occupation = document.getElementById("occupation");
	occupation.innerText = result.occupation;
} 

const select_btn = document.querySelectorAll(".app_select");

const extend_div = document.querySelectorAll(".extend");

select_btn[0].addEventListener("click", () => {
  window.location.href = `./review_booking.jsp?expertname=${search}&mode=voice`;
});

select_btn[1].addEventListener("click", () => {
  window.location.href = `./review_booking.jsp?expertname=${search}&mode=video`;
});

select_btn[2].addEventListener("click", () => {
  window.location.href = `./review_booking.jsp?expertname=${search}&mode=chat`;
});



