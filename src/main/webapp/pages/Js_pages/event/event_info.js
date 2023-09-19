
//const a = JSON.parse(localStorage.getItem("info"));


const url = window.location.search;
const urlparams = new URLSearchParams(url);
const search = urlparams.get("id");

// URL to fetch event data from the server
const apiurl = location.origin + "/betterme-web/GetEventByIdJSON?id=" + search;
let eventId =0;

// Function to display event data on the page
function displayinfo(result) {

	const body = document.getElementById("main");
	eventId = result[0].id;
	

	// Create the elements
	const eventTitle = document.createElement("h1");
	eventTitle.innerText = result[0].eventName;
	eventTitle.classList.add("eventname");

	const eventContent = document.createElement("div");
	eventContent.classList.add("event_content");

	const eventImage = document.createElement("img");
	eventImage.src = result[0].imageUrl;
	eventImage.alt = result[0].eventName;
	const eventImageWrapper = document.createElement("div");
	eventImageWrapper.appendChild(eventImage);

	const venueLink = document.createElement("a");
	venueLink.href = "#";
	
	const venueConfirm = document.createElement("button");
	venueConfirm.setAttribute("id","confirmBook");
	venueConfirm.innerText = "confirm booking";
	venueLink.appendChild(venueConfirm);
	
	const venueWrapper = document.createElement("div");
	venueWrapper.classList.add("venue");
	venueWrapper.innerHTML = `<p>
<b>date:</b>${result[0].eventDate}
<br>
<b>Time:</b>${result[0].eventTime}<br>
<b>Venue:</b>${result[0].eventAddress}
</p>`;
	venueWrapper.appendChild(venueLink);

	const eventBrief = document.createElement("div");
	eventBrief.classList.add("brief_on_event");
	const eventBriefTitle = document.createElement("h1");
	eventBriefTitle.innerHTML = result[0].eventName;
	eventBrief.appendChild(eventBriefTitle);

	const eventBriefParagraph = document.createElement("p");
	eventBriefParagraph.innerText = result[0].eventAbout;
	eventBrief.appendChild(eventBriefParagraph);

	const about_event = document.createElement("b");
	about_event.innerText = "About the event";
	eventBrief.appendChild(about_event);

	const about_event_line = document.createElement("p");
	about_event_line.innerText = result[0].eventDescription;
	eventBrief.appendChild(about_event_line);

	const eventMoreImages = document.createElement("div");
	eventMoreImages.classList.add("moreimg");
	const eventMoreImagesTitle = document.createElement("b");
	eventMoreImagesTitle.textContent = "More images at the event :";
	eventMoreImages.appendChild(eventMoreImagesTitle);
	const eventMoreImages1 = document.createElement("img");
	eventMoreImages1.src = "../../../assets/img/events/other_event_1.jpg";
	eventMoreImages1.alt = "";
	eventMoreImages.appendChild(eventMoreImages1);
	const eventMoreImages2 = document.createElement("img");
	eventMoreImages2.src = "../../../assets/img/events/other_event_2.jpg";
	eventMoreImages2.alt = "";
	eventMoreImages.appendChild(eventMoreImages2);

	const eventFlex = document.createElement("div");
	eventFlex.classList.add("flex");
	eventFlex.appendChild(eventBrief);
	eventFlex.appendChild(eventMoreImages);

	// Append the elements to the container
	const container = document.createElement("div");
	container.appendChild(eventTitle);
	container.appendChild(eventContent);
	container.appendChild(eventImageWrapper);
	eventContent.appendChild(eventImageWrapper);
	eventContent.appendChild(venueWrapper);
	container.appendChild(eventFlex);

	// Add the container to the DOM

	body.appendChild(container);
	
	document.getElementById("confirmBook").addEventListener("click",function () {
	console.log("bookin btn")
  ticket_div.style.display="block";
  document.querySelector("main").setAttribute("style","filter:blur(8px)")
  document.documentElement.style.overflow = 'hidden';  // firefox, chrome
    document.body.scroll = "no"; // ie only
})



}

// Function to fetch event data from the server
async function fetchData() {
	try {
		const response = await fetch(apiurl);

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		// Assuming the response is JSON data
		const info = await response.json();

		// Now you can work with 'info'
		console.log(info);
		displayinfo(info);
	} catch (error) {
		// Handle any errors that occurred during the fetch
		console.error("Fetch error:", error);
	}
}

// Call the async function to initiate the fetch
fetchData();


let close_div = document.querySelector(".close")


close_div.addEventListener("click",function () {

  ticket_div.style.display="none";
  document.querySelector("main").removeAttribute("style")
  document.documentElement.style.overflow = 'scroll';  // firefox, chrome
  document.body.scroll = "yes"; // ie only
})
let ticket_div = document.querySelector(".ticketbox");




document.getElementById("event_attendee_det").addEventListener("submit", function(event) {
  event.preventDefault();  // Prevent the form from submitting the traditional way
  
  const attendee_name = document.getElementById("attendee_name").value;
  const attendee_email = document.getElementById("attendee_email").value;
  
  const bookingUrl = `${location.origin}/betterme-web/BookingEvent?id=${eventId}`;
  const formData = new FormData();
  formData.append("attendee_name", attendee_name);
  formData.append("attendee_email", attendee_email);

  axios.post(bookingUrl)
    .then(function(response) {
      console.log(response);
      if (response.data === true) {
        alert("Event booked", "success");
      } else {
        alert("Email already registered", "error");
      }
    })
    .catch(function(error) {
      console.error("Error booking event:", error);
      alert("Error booking event", "error");
    });
});

