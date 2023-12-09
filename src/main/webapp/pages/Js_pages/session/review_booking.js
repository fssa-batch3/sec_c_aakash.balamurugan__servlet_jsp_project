const url = window.location.search;
const urlparams = new URLSearchParams(url);
const search = urlparams.get("expertname");
const search1 = urlparams.get("mode");




const timingOptions = {
  timing0: "12:00:00 AM-1:00:00 AM",
  timing1: "1:00:00 AM-2:00:00 AM",
  timing2: "2:00:00 AM-3:00:00 AM",
  timing3: "3:00:00 AM-4:00:00 AM",
  timing4: "4:00:00 AM-5:00:00 AM",
  timing5: "5:00:00 AM-6:00:00 AM",
  timing6: "6:00:00 AM-7:00:00 AM",
  timing7: "7:00:00 AM-8:00:00 AM",
  timing8: "8:00:00 AM-9:00:00 AM",
  timing9: "9:00:00 AM-10:00:00 AM",
  timing10: "10:00:00 AM-11:00:00 AM",
  timing11: "11:00:00 AM-12:00:00 PM",
  timing12: "12:00:00 PM-1:00:00 PM",
  timing13: "1:00:00 PM-2:00:00 PM",
  timing14: "2:00:00 PM-3:00:00 PM",
  timing15: "3:00:00 PM-4:00:00 PM",
  timing16: "4:00:00 PM-5:00:00 PM",
  timing17: "5:00:00 PM-6:00:00 PM",
  timing18: "6:00:00 PM-7:00:00 PM",
  timing19: "7:00:00 PM-8:00:00 PM",
  timing20: "8:00:00 PM-9:00:00 PM",
  timing21: "9:00:00 PM-10:00:00 PM",
  timing22: "10:00:00 PM-11:00:00 PM",
  timing23: "11:00:00 PM-12:00:00 AM",
};

let activeUser ;

let appoitement_list;
function displayUser(user){
	activeUser = user;
	document.getElementById("number").value = user.phoneNumber;
	document.getElementById("user_email").value  = user.email;
}

function appoitmentList(list){
	appoitement_list= list;
	console.log("appo"+list);
}


function display(result){


	
	
const startTime  = result.startTime;

const endTime = result.endTime;

const starttimetrim = startTime.trim().toUpperCase();

const endTimetrim = endTime.trim().toUpperCase();


let startTimeKey, endTimeKey;

for (const timekey in timingOptions) {
  // console.log(timingOptions[timekey].startsWith(starttimetrim));

  if (timingOptions[timekey].startsWith(starttimetrim)) {
    startTimeKey = timekey;
  }
  if (timingOptions[timekey].endsWith(endTimetrim)) {
    endTimeKey = timekey;
  }
}


const startIndexNo = Number(startTimeKey.substring(6));

const endindexNo = Number(endTimeKey.substring(6));

if (startIndexNo > endindexNo) {
  endindexNo += 24;
}

console.log("startIndexNo"+startIndexNo);

 console.log("endindexNo"+endindexNo);


let ExperttimeOptions = {};
for (let i = startIndexNo; i <= endindexNo; i++) {

  const indexno = i % 24;
  const timeKey = `timing${indexno}`;
  ExperttimeOptions[timeKey] = timingOptions[timeKey];
}

console.log("ExperttimeOptions"+ExperttimeOptions)

// for date
const date = document.getElementById("appoitment_date");

// let today = new Date().toISOString().split("T")[0];
const today = new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
  .toISOString()
  .split("T")[0];
date.setAttribute("min", today);

function getDateOneWeekAfter(date) {
  const oneWeekLater = new Date(date);
  oneWeekLater.setDate(oneWeekLater.getDate() + 7);
  max_date = oneWeekLater.toISOString().split("T")[0];
  return max_date;
}

const currentDate = new Date(); // Get the current date
const oneWeekLater = getDateOneWeekAfter(currentDate);

date.setAttribute("max", oneWeekLater);
// date.addEventListener("")

const select_timings = document.getElementById("time_slot");
select_timings.setAttribute("class", "timings");
select_timings.setAttribute("required", "");

const hour = new Date().getHours();
const minut = new Date().getMinutes();
function convertTo12HourFormat(hours) {
  // let suffix = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12; // Convert 0 to 12
  return `${hours}`;
}
// :${minutes} ${suffix} minutes
const time12 = convertTo12HourFormat(hour);
console.log(time12); // Output: "2:30 PM"

const date_input = document.querySelector("#appoitment_date");
date_input.addEventListener("input", (e) => {
 
  if (date_input.value == today) {
    alert("Book appoitement one day before");
  } else {
    for (const time in ExperttimeOptions) {
      const option_timings = document.createElement("option");
      option_timings.innerText = ExperttimeOptions[time];
      for (let i = 0; i < appoitement_list.length; i++) {
        if (appoitement_list[i].appointmentDate == date_input.value) {
          if (appoitement_list[i].timeSlot == option_timings.innerText) {
            option_timings.setAttribute("disabled", "");
          }
        }
      }
      select_timings.append(option_timings);
    }
  }
});

const expert_name = document.getElementById("expert_name");
expert_name.innerText = result.trainerName;

const session_mode = document.getElementById("session_mode");
session_mode.innerText = search1;

const user_email = document.getElementById("user_email");
//user_email.value = active_user.user_email;

const number = document.getElementById("number");
//number.value = active_user.mobile_number;

const appoitment_book = document.getElementById("appoitment_book");
appoitment_book.addEventListener("submit", (s) => {
  s.preventDefault();

  appoitment_book_fun();
});

		
}




async function fetchTrainerDetails(){
try {
		const response = await fetch(location.origin + "/betterme-web/GetTrainerDetails?id="+search);

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		// Assuming the response is JSON data
		const trainer = await response.json();

	await fetchUser();
	await fetchAppoitement();
	display(trainer[0]);
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

async function fetchAppoitement() {
	try {
		const response = await fetch(location.origin + "/betterme-web/GetTrainnerAppoitement?id="+search);

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		// Assuming the response is JSON data
		const info = await response.json();

		// Now you can work with 'info'
	console.log(info+" aakash");
		appoitmentList(info); 
	} catch (error) {
		// Handle any errors that occurred during the fetch
		console.error("Fetch error:", error);
	}
}

fetchTrainerDetails();

function appoitment_book_fun() {


  const expert_id = search;
  const user_id = activeUser.id;

  const appoitment_date = document.getElementById("appoitment_date").value;
  const time_slot = document.getElementById("time_slot").value;
  const number = document.getElementById("number").value;
  const user_email = document.getElementById("user_email").value;
  const catagory = document.getElementById("catagory").value;

    
    
    const url = location.origin + "/betterme-web/CreateAppoitement?exp_id="+expert_id  +"&date="+appoitment_date
   +"&time=" +time_slot+"&catagory="+catagory+"&type="+search1;
    axios.post(url)
            .then(function(response){
            	console.log(response);
            	if(response.data==true){
                	 alert("appoitement booked Successful", "success");
                	 window.location.href ="./../../html_pages/session/session_list.jsp"
                 }
                 else{
                	 alert( response.data); 
                	
                 }
            })


    }

 


