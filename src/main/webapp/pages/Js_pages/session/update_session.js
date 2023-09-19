const sessionsitems = JSON.parse(localStorage.getItem("sessioninfo"));

const url = window.location.search;
const urlparams = new URLSearchParams(url);
const search = urlparams.get("name");

let result;
// sessionsitems.forEach(function (value) {

//  return value.person_name === search;
// });

sessionsitems.forEach((e) => {
  if (e.person_name == search) {
    return (result = e);
  }
});

document.getElementById("person_name").value = result.person_name;
document.getElementById("cover_img").value = result.images.link;
document.getElementById("occupation").value = result.occupation;
document.getElementById("content").value = result.content;
document.getElementById("yt_video").value = result.iframe;

//   let newsession = {
//    person_name:expert_name,
//    images:{link:cover_img,alt:expert_name},
//    occupation:occupation,
//    content:content,
//    rating:0,
//    no_ratings:"",
//    iframe:videolink,
//    id: sessionsitems.length,
//    status:true

//   };

// let delete_session = document.getElementById("turn_off");
// let update_session = document.getElementById("update_session");
// // let update_event_value=result.event_id;
// let update_session_value=update_session.value
// update_session_value=result.id;

// delete_session.addEventListener("click", (e) => {
//     e.preventDefault();
//     display_off_function();
//    });

//    update_session.addEventListener("click", (e) => {
//     e.preventDefault();
//     console.log("update");
//     update_event_fun();
//    });

//    function display_off_function() {
//       if ( delete_session.innerText=="Delete") {
//          for (let i = 0; i < sessionsitems.length; i++) {
//        console.log("dlee");
//       if (update_session_value==sessionsitems[i].event_id) {

//         if (confirm("delete event") == true) {
//          sessionsitems[i].status = false;
//           delete_session.innerText="Undo";
//           localStorage.setItem("info" , JSON.stringify(sessionsitems));
//         } else {
//           alert("you the revoked the delete")
//         }
//           return
//       }
// }

//   }

// if (delete_session.innerText=="Undo") {
//   for (let i = 0; i < sessionsitems.length; i++) {
//     if (update_session_value==sessionsitems[i].id) {

//       if (confirm("Show event in list") == true) {
//          sessionsitems[i].status = true;
//         localStorage.setItem("sessioninfo" , JSON.stringify(sessionsitems));
//         delete_session.innerText="Delete"
//       } else {
//         alert("The event status is still off")
//       }

//     }
// }
// }

//   }

//   function update_event_fun() {
//     for (let i = 0; i < sessionsitems.length; i++) {
//       if (update_session_value==sessionsitems[i].id) {
//          sessionsitems[i].person_name=document.getElementById("person_name").value
//          sessionsitems[i].images.link=document.getElementById("cover_img").value
//          sessionsitems[i].occupation =  document.getElementById("occupation").value
//          sessionsitems[i].content    =  document.getElementById("content").value
//          sessionsitems[i].iframe     = document.getElementById("yt_video").value

//           localStorage.setItem("sessioninfo" , JSON.stringify(sessionsitems));

//       }

//   }

//   }

// //   let person_name  =
// //   let cover_img    =
// //   let occupation   =
// //   let Session_id   =
// //   let iframe_video =

const delete_session = document.getElementById("turn_off");
const update_session = document.getElementById("update_session");
// let update_event_value=result.event_id;
const update_session_value = result.id;

if (sessionsitems[update_session_value] == false) {
  delete_session.innerText = "undo";
}

delete_session.addEventListener("click", (e) => {
  e.preventDefault();
  display_off_function();
});

update_session.addEventListener("click", (e) => {
  e.preventDefault();
  update_event_fun();
});

function display_off_function() {
  //  if (delete_session.innerText="Delete") {
  //   for (let i = 0; i < sessionsitems.length; i++) {
  //     if (update_session_value==sessionsitems[i].id) {

  //       if (confirm("delete session") == true) {
  //         sessionsitems[i].status = false;
  //         delete_session.innerText="Undo";
  //         localStorage.setItem("sessioninfo" , JSON.stringify(sessionsitems));
  //       } else {
  //         alert("you the revoked the delete")
  //       }
  //         return
  //     }

  //  }
  // }
  //     if (delete_session.innerText=="Undo") {
  //       for (let i = 0; i < sessionsitems.length; i++) {
  //         if (update_event_value==sessionsitems[i].id) {

  //           if (confirm("Show session in list") == true) {
  //             sessionsitems[i].status = true;
  //             localStorage.setItem("sessioninfo" , JSON.stringify(sessionsitems));
  //             delete_session.innerText="Delete"
  //           } else {
  //             alert("The session status is still off")
  //           }

  //         }
  //     }
  //     }

  if (delete_session.innerText == "Delete") {
    for (let i = 0; i < sessionsitems.length; i++) {
      if (update_session_value == sessionsitems[i].id) {
        if (confirm("delete event") == true) {
          sessionsitems[i].status = false;
          delete_session.innerText = "Undo";
          localStorage.setItem("sessioninfo", JSON.stringify(sessionsitems));
        } else {
          alert("you the revoked the delete");
        }
        return;
      }
    }
  }

  if (delete_session.innerText == "Undo") {
    for (let i = 0; i < sessionsitems.length; i++) {
      if (update_session_value == sessionsitems[i].id) {
        if (confirm("Show event in list") == true) {
          sessionsitems[i].status = true;
          localStorage.setItem("sessioninfo", JSON.stringify(sessionsitems));
          delete_session.innerText = "Delete";
        } else {
          alert("The event status is still off");
        }
      }
    }
  }
}
