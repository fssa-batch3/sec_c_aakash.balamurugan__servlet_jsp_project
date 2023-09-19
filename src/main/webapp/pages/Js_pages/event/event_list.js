// URL to fetch event data from the server
const url = location.origin + "/betterme-web/ReadAllEventJSON";

// Function to display event data on the page
function displayinfo(info) {
	for (let i = 0; i < info.length; i++) {
		if (info[i].active === true) {
			// Create a link for each event
			const redirect = document.createElement("a");
			redirect.setAttribute(
				"href",
				`../events/eventView.jsp?id=${info[i].id}`
			);
			document.querySelector("main").append(redirect);

			// Create containers for event details
			const div_event = document.createElement("div");
			div_event.setAttribute("class", "event");
			redirect.append(div_event);

			const div_event_box = document.createElement("div");
			div_event_box.setAttribute("class", "eventbox");
			div_event.append(div_event_box);

			const div_onuila = document.createElement("div");
			div_onuila.setAttribute("class", "");
			div_event_box.append(div_onuila);

			// Create an image element for the event
			const img_photo = document.createElement("img");
			img_photo.setAttribute("src", info[i].imageUrl);
			img_photo.setAttribute("alt", info[i].eventName);
			div_onuila.append(img_photo);

			console.log(info[i].imageUrl);

			const div_none = document.createElement("div");
			div_none.setAttribute("class", "title_para");
			div_event_box.append(div_none);

			// Create an H2 element for the event title
			const h2_title = document.createElement("h2");
			h2_title.innerHTML = info[i].eventName;
			div_none.append(h2_title);

			// Create a paragraph for event description
			const p_para = document.createElement("p");
			p_para.innerText = info[i].eventAbout;
			div_none.append(p_para);

			const div_nothing = document.createElement("div");
			div_nothing.setAttribute("class", "");
			div_event_box.append(div_nothing);

			// Create an H4 element for event date, time, and venue
			const venue = document.createElement("h4");
			venue.innerHTML = `Date: ${info[i].eventDate} <br><br>
                          Time: ${info[i].eventTime}<br><br>
                          Venue: ${info[i].eventAddress}`;
			div_nothing.append(venue);
		}
	}
};

// Function to fetch event data from the server;

async function fetchData() {
	try {
		const response = await fetch(url);

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

// Set a timeout to display a popup after 1 second (1000 milliseconds)
setTimeout(() => {
	display_pop();
}, 1000);

// Function to display the popup
function display_pop() {
	let pop_box1 = document.querySelector(".popup");
	pop_box1.style.display = "block";
	document.querySelector("main").setAttribute("style", "filter: blur(8px)");
	document.documentElement.style.overflow = 'hidden';  // Disable scrolling
	document.body.scroll = "no"; // Disable scrolling (for older browsers like IE)
}

// Event listener to close the popup
let close_div = document.querySelector(".close")

close_div.addEventListener("click", function() {
	let pop_box1 = document.querySelector(".popup");
	pop_box1.style.display = "none";
	document.querySelector("main").removeAttribute("style");
	document.documentElement.style.overflow = 'scroll';  // Enable scrolling
	document.body.scroll = "yes"; // Enable scrolling (for older browsers like IE)
});
