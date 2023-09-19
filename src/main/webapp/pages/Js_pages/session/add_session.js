const sessionsitems = JSON.parse(localStorage.getItem("sessioninfo"));

let startTimeValue= null;
let endTimeValue=null;
const timePicker={
    enableTime: true,
    noCalendar: true,
    dateFormat: "h:i K",
    time_24hr: false,
  minuteIncrement: 60,
//   defaultDate: "12:00 AM",
  onChange: function(selectedDates, dateStr) {
    // Store selected start and end times in global variables
    if (this.input.id === "startTime") {
      startTime = dateStr;
    } else if (this.input.id === "endTime") {
      endTime = dateStr;
    }
    // localStorage.setItem("startTime", startTime);
    // localStorage.setItem("endTime", endTime);
  }
}
const startTimepicker = flatpickr("#startTime", timePicker);
const endTimepicker = flatpickr("#endTime", timePicker);

function new_session() {
  const expert_name = document.getElementById("expert_name").value;
  const cover_img = document.getElementById("cover_img").value;
  const occupation = document.getElementById("Occuption").value;
  const content = document.getElementById("content").value;
  const Experience = document.getElementById("Experience").value;
  const education = document.getElementById("education").value;

  
  


  // const videolink = document.getElementById("video").value
  
  const unique_id = sessionsitems.length + 1;

  console.log(unique_id);

  const newsession ={
      person_name: expert_name,
      images: {
        link: cover_img,
      },
      occupation,
      login: "",
      login_pass: "Better@23",
      content: `${content}`,
      rating: 3,
      no_ratings: "(12 reviews)",
      education:`<li>${education}</li>`  ,
      exprience: `<li>${Experience}</li>`,
      startTime: startTime,
      endTime: endTime,
      status: true,
      id: unique_id,
    };
  let number = 0;

  for (let i = 0; i < sessionsitems.length; i++) {
    if (sessionsitems[i].expert_name === expert_name) {
      alert("therapist already exists");
    } else {
      number = 1;
    }
  }

  if (number == 1) {
    sessionsitems.push(newsession);
    localStorage.setItem("sessioninfo", JSON.stringify(sessionsitems));
  }
}

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  new_session();
});

const delete_sessions = document.getElementById("delete_session");
delete_sessions.addEventListener("click", (e) => {
  e.preventDefault();
  delete_session();
});
