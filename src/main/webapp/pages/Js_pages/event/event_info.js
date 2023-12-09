
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

    // Create the elements with CSS styles
    const eventTitle = document.createElement("h1");
    eventTitle.innerText = result[0].eventName;
    eventTitle.classList.add("eventname");
    eventTitle.style.fontSize = "24px";
    eventTitle.style.color = "blue";

    const eventContent = document.createElement("div");
    eventContent.classList.add("event_content");
    eventContent.style.border = "1px solid #ccc";
    eventContent.style.padding = "10px";

    const eventImage = document.createElement("img");
    eventImage.src = result[0].imageUrl;
    eventImage.alt = result[0].eventName;
    const eventImageWrapper = document.createElement("div");
    eventImageWrapper.appendChild(eventImage);

    const venueLink = document.createElement("a");
    venueLink.href = "#";

    const venueConfirm = document.createElement("button");
    venueConfirm.setAttribute("id", "confirmBook");
    venueConfirm.innerText = "Confirm Booking";
    venueConfirm.style.backgroundColor = "green";
    venueConfirm.style.color = "white";
    venueLink.appendChild(venueConfirm);

    const venueWrapper = document.createElement("div");
    venueWrapper.classList.add("venue");
    venueWrapper.innerHTML = `<p>
    <b>Date:</b>${result[0].eventDate}
    <br>
    <b>Time:</b>${result[0].eventTime}<br>
    <b>Venue:</b>${result[0].eventAddress}<br>
    <button id="confirmBook"> Book </button>
    </p>`;

    const eventBrief = document.createElement("div");
    eventBrief.classList.add("brief_on_event");

    const eventBriefTitle = document.createElement("h1");
    eventBriefTitle.innerHTML = result[0].eventName;
    eventBriefTitle.style.fontWeight = "bold";
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
    eventMoreImagesTitle.style.fontWeight = "bold";
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
    console.log(eventFlex);

    // Add the container to the DOM
    body.appendChild(container);
    
    
    document.getElementById("confirmBook").addEventListener("click", function(event) {
  event.preventDefault();  // Prevent the form from submitting the traditional way
    
  const bookingUrl = `${location.origin}/betterme-web/BookingEvent?id=${eventId}`;

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
		
		displayinfo(info);
	} catch (error) {
		// Handle any errors that occurred during the fetch
		console.error("Fetch error:", error);
	}
}

// Call the async function to initiate the fetch
fetchData();



