

const session = document.querySelector("#sessionbox");



let active_user_expert = 0;

//for (let i = 0; i < user_details.length; i++) {
//  if (user_details[i].user_email === details) {
 //   active_user_expert = user_details[i].per_exp_id;
 //   console.log(active_user_expert);
 // }
//}



function displayTrainer(trainerDetails){
	for (let i = 0; i < trainerDetails.length; i++) {
  
  if (trainerDetails[i].id !== Number(active_user_expert)) {
    console.log(trainerDetails[i].id ,active_user_expert);
    const box = document.createElement("div");
  box.classList.add("box");
  session.append(box);

  const flex = document.createElement("div");
  flex.classList.add("flex");
  box.append(flex);

  const pic = document.createElement("div");
  pic.classList.add("pic"); 
  flex.append(pic);

  const link = document.createElement("a");
  link.setAttribute(
    "href",
    `./sessioninfo.jsp?name=${trainerDetails[i].id}`
  );
  pic.append(link);

  const photo = document.createElement("img");
  photo.setAttribute("src", trainerDetails[i].imageLink);
  photo.setAttribute("alt", trainerDetails[i].trainerName);
  link.append(photo);

  const detail = document.createElement("div");
  detail.classList.add("detail");
  flex.append(detail);

  const link4 = document.createElement("a");
  link4.setAttribute(
    "href",
    `./sessioninfo.jsp?name=${trainerDetails[i].id}`
  );
  detail.append(link4);

  const person = document.createElement("h1");
  person.innerHTML = trainerDetails[i].trainerName;
  link4.append(person);

  const occupation = document.createElement("div");
  occupation.classList.add("occupation");
  detail.append(occupation);

  const link2 = document.createElement("a");
  link2.setAttribute(
    "href",
    `./sessioninfo.jsp?name=${trainerDetails[i].id}`
  );
  occupation.append(link2);

  const para = document.createElement("p");
  const span = document.createElement("span");
  span.innerHTML = "Occupation";
  para.innerText = trainerDetails[i].occupation;

  link2.append(span);
  link2.append(para);

  const person_detail = document.createElement("div");
  person_detail.classList.add("person_detail");
  detail.append(person_detail);

  const link3 = document.createElement("a");
  link3.setAttribute(
    "href",
    `./sessioninfo.jsp?name=${trainerDetails[i].id}`
  );
  occupation.append(link3);

  // let para2 = document.createElement("p");
  // let span2 = document.createElement("span");
  // span2.innerHTML=sessionsitems[i] .person_name;
  // para2.innerText= sessionsitems[i].content;

  // para2.prepend(span2);
  // link3.append(para2);
  }
}
}



async function fetchTrainerDetails(){
try {
		const response = await fetch(location.origin + "/betterme-web/GetAllTrainer");

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		// Assuming the response is JSON data
		const trainer = await response.json();

		// Now you can work with 'info'
	console.log(trainer)
		displayTrainer(trainer); 
	} catch (error) {
		// Handle any errors that occurred during the fetch
		console.error("Fetch error:", error);
	}

}

fetchTrainerDetails();
setTimeout(() => {
  display_pop();
}, 1000); 

function display_pop() {
	if(localStorage.getItem("sessionpop") ==0 ){
  let pop_box1 = document.querySelector(".popup");
  pop_box1.style.display="block";
  document.querySelector("main").setAttribute("style","filter:blur(8px)")
  document.documentElement.style.overflow = 'hidden';  // firefox, chrome
  document.body.scroll = "no"; // ie only
  }
}
let close_div = document.querySelector(".close")
console.log(close_div);

close_div.addEventListener("click",function () {
	localStorage.setItem("sessionpop", 1);
  let pop_box1 = document.querySelector(".popup");
  pop_box1.style.display="none";
  document.querySelector("main").removeAttribute("style")
  document.documentElement.style.overflow = 'scroll';  // firefox, chrome
  document.body.scroll = "yes"; // ie only
});