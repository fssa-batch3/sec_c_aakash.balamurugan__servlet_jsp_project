const a = JSON.parse(localStorage.getItem("info"));

const url = window.location.search;
const urlparams = new URLSearchParams(url);
const search = urlparams.get("name");
let result;
a.forEach((e) => {
  if (e.title == search) {
    return (result = e);
  }
});
console.log(result);

const body = document.getElementById("main");

// Create the elements
const eventTitle = document.createElement("input");
eventTitle.type = "text";
eventTitle.value = result.title;
eventTitle.id = "eventname";

const eventContent = document.createElement("div");
eventContent.classList.add("event_content");

const eventImage = document.createElement("input");
eventImage.type = "url";
eventImage.value = result.images.link;
eventImage.alt = result.images.alt;
eventImage.id = "cover_img";
const eventImageWrapper = document.createElement("div");
eventImageWrapper.appendChild(eventImage);

const venueLink = document.createElement("a");
venueLink.href = "tickets.html";
const venueConfirm = document.createElement("span");
venueConfirm.classList.add("confirm");
venueConfirm.text = "confirm booking";
venueLink.appendChild(venueConfirm);

const venueWrapper = document.createElement("input");
venueWrapper.type = "text";
venueWrapper.id = "venue";
venueWrapper.value = result.date.venue;
venueWrapper.appendChild(venueLink);

const venueWrapper2 = document.createElement("input");
venueWrapper2.type = "date";
venueWrapper2.id = "date";
venueWrapper2.value = result.date.date;
venueWrapper2.appendChild(venueLink);

const venueWrapper3 = document.createElement("input");
venueWrapper3.type = "time";
venueWrapper3.id = "time";
venueWrapper3.value = result.date.Time;
venueWrapper3.appendChild(venueLink);

const eventBrief = document.createElement("div");
eventBrief.classList.add("brief_on_event");
const eventBriefTitle = document.createElement("input");
eventBriefTitle.type = "text";
eventBriefTitle.value = result.title;
eventBriefTitle.id = "eventBriefTitle";
eventBrief.appendChild(eventBriefTitle);

const eventBriefParagraph = document.createElement("input");
eventImage.type = "text";
eventBriefParagraph.value = result.para;
eventBriefParagraph.id = "eventBriefParagraph ";
eventBrief.appendChild(eventBriefParagraph);

const about_event = document.createElement("b");
about_event.value = "About the event";
about_event.id = "about_event";
eventBrief.appendChild(about_event);

const about_event_line = document.createElement("input");
about_event_line.type = "text";
about_event_line.value = result.about;
about_event_line.id = "about_event_line";
eventBrief.appendChild(about_event_line);

const eventMoreImages = document.createElement("div");
eventMoreImages.classList.add("moreimg");
const eventMoreImagesTitle = document.createElement("b");
eventMoreImagesTitle.textContent = "More images at the event :";
eventMoreImages.appendChild(eventMoreImagesTitle);
const eventMoreImages1 = document.createElement("input");
eventMoreImages1.type = "url";
eventMoreImages1.value = "../../assets/img/events/other_event_1.jpg";
eventMoreImages1.id = "eventMoreImages1";
eventMoreImages1.alt = "";
eventMoreImages.appendChild(eventMoreImages1);
const eventMoreImages2 = document.createElement("input");
eventMoreImages2.type = "url";
eventMoreImages2.value = "../../assets/img/events/other_event_2.jpg";
eventMoreImages2.alt = "";
eventMoreImages2.id = "eventMoreImages2";
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
eventContent.appendChild(venueWrapper2);
eventContent.appendChild(venueWrapper3);
container.appendChild(eventFlex);

// Add the container to the DOM

body.appendChild(container);

const delete_event = document.getElementById("turn_off");
const update_event = document.getElementById("update_event");
// let update_event_value=result.event_id;
let update_event_value = update_event.value;
update_event_value = result.event_id;

console.log(update_event.value);

delete_event.addEventListener("click", (e) => {
  e.preventDefault();
  display_off_function();
});

update_event.addEventListener("click", (e) => {
  e.preventDefault();
  update_event_fun();
});

if (a[update_event_value].status == false) {
  delete_event.innerText = "Undo";
}

function display_off_function() {
  if (delete_event.innerText == "Delete") {
    for (let i = 0; i < a.length; i++) {
      if (update_event_value == a[i].event_id) {
        if (confirm("delete event") == true) {
          a[i].status = false;
          delete_event.innerText = "Undo";
          localStorage.setItem("info", JSON.stringify(a));
        } else {
          alert("you the revoked the delete");
        }
        return;
      }
    }
  }

  if (delete_event.innerText == "Undo") {
    for (let i = 0; i < a.length; i++) {
      if (update_event_value == a[i].event_id) {
        if (confirm("Show event in list") == true) {
          a[i].status = true;
          localStorage.setItem("info", JSON.stringify(a));
          delete_event.innerText = "Delete";
        } else {
          alert("The event status is still off");
        }
      }
    }
  }
}

function update_event_fun() {
  for (let i = 0; i < a.length; i++) {
    if (update_event_value == a[i].event_id) {
      a[i].title = document.getElementById("eventname").value;
      a[i].para = document.getElementById("eventBriefParagraph").value;
      a[i].about = document.getElementById("about_event_line").value;
      a[i].images.link = document.getElementById("cover_img").value;
      a[i].date.date = document.getElementById("date").value;
      a[i].date.Time = document.getElementById("time").value;
      a[i].date.venue = document.getElementById("venue").value;

      localStorage.setItem("info", JSON.stringify(a));
    }
  }
}
