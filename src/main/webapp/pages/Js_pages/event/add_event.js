const info = JSON.parse(localStorage.getItem("info"));

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  new_event();
});

const display_off = document.getElementById("display_off");

display_off.addEventListener("click", (e) => {
  e.preventDefault();
  display_off_function();
});

function new_event() {
  const event_name = document.getElementById("event_name").value;
  const cover_img = document.getElementById("cover_img").value;
  const venue = document.getElementById("venue").value;
  const time = document.getElementById("time").value;
  const date = document.getElementById("date").value;
  const intro = document.getElementById("intro").value;
  const about = document.getElementById("about").value;
  const more_img_1 = document.getElementById("more_img_1").value;
  const more_img_2 = document.getElementById("more_img_2").value;

  const serial_number = info.length + 1;

  const eventnew = {
    title: event_name,
    event_id: serial_number,
    para: intro,

    about,
    images: { link: cover_img, alt: event_name },
    date: { date, Time: time, venue },
    images1: more_img_1,
    images2: more_img_2,
    status: true,
    Commentt: "",
  };

  let number = 1;
  for (let i = 0; i < info.length; i++) {
    console.log("aakash");
    if (info[i].title === event_name) {
      alert("event already exists");
      number = 0;
      break;
    } else {
      number = 1;
    }
  }

  if (number == 1) {
    info.push(eventnew);

    localStorage.setItem("info", JSON.stringify(info));
  }
}

// function display_off_function(event_title) {
//   let number;
//   let ind;
//   for (let i = 0; i < info.length; i++) {
//     if (info[i].title === event_title) {
//       ind = i;
//       number = 0;
//       break;
//     } else {
//       number = 1;
//     }
//   }

//   if (number == 0) {
//     document.getElementById("cover_img").value = info[ind].cover_img;

//     document.getElementById("venue").value = info[ind].date.venue;

//     document.getElementById("time").value = info[ind].date.time;

//     document.getElementById("date").value = info[ind].date.date;

//     document.getElementById("intro").value = info[ind].intro;

//     document.getElementById("about").value = info[ind].about;

//     document.getElementById("more_img_1").value = info[ind].more_img_1;
//     document.getElementById("more_img_2").value = info[ind].more_img_2;
//   } else {
//     document.getElementById("cover_img").value="";
//     document.getElementById("venue").value="";
//     document.getElementById("time").value="";
//     document.getElementById("date").value="";
//     document.getElementById("intro").value="";
//     document.getElementById("about").value="";
//     document.getElementById("more_img_1").value="";
//     document.getElementById("more_img_2").value="";
//   }
// }
