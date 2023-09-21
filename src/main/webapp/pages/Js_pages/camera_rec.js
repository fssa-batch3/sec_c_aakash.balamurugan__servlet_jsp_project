const url = window.location.search;
const urlparams = new URLSearchParams(url);
const search = urlparams.get("selected_expert");

const user_details = JSON.parse(localStorage.getItem("user_details"));

const details = localStorage.getItem("details");
const act_user_obj = user_details.find((value) => value.user_email === details);


const constraints = { video: { width: { max: 320 } }, audio: true };

let theStream;
let theRecorder;
const recordedChunks = [];

const stop_vid_btn = document.getElementById("stop_vid");
stop_vid_btn.addEventListener("click", (e) => {
  e.preventDefault();
  download();
});

const startFunction_btn = document.getElementById("startFunction");
startFunction_btn.addEventListener("click", (e) => {
  e.preventDefault();
  startFunction();
});

function startFunction() {
  navigator.mediaDevices
    .getUserMedia(constraints)
    // console.log(navigator)
    // try {
    //   gotMedia();
    // } catch (error) {
    //   console.log(error);
    // }
    .then(gotMedia)
    .catch((e) => {
      console.error(`getUserMedia() failed: ${e}`);
    });
  // gotMedia();
}
let record;
function gotMedia(stream) {
  theStream = stream;
  // console.log(stream)
  const video = document.querySelector("video");
  // video.setAttribute("src",stream)
  video.srcObject = stream;
  record = stream;
}

//  start recording
const btn_stop = document.getElementById("btn_stop");
btn_stop.addEventListener("click", (e) => {
  e.preventDefault();
  startrecord(record);
  const gif = document.getElementById("recording");
  gif.style.display = "block";
});

function startrecord(stream) {
  try {
    recorder = new MediaRecorder(stream, { mimeType: "video/webm" });
  } catch (e) {
    console.error(`Exception while creating MediaRecorder: ${e}`);
    return;
  }

  theRecorder = recorder;
  recorder.ondataavailable = (event) => {
    recordedChunks.push(event.data);
  };
  recorder.start(100); // 10ms
}

const Save_btn = document.getElementById("Save_btn");
const delete_btn = document.getElementById("delete_btn");

let video_append = document.querySelector(".video_btn_save");

let Link;
function download() {
  const gif = document.getElementById("recording");
  gif.style.display = "none";

  if (recordedChunks === []) {
    alert("start recording first");
  }
  theRecorder.stop();
  theStream.getTracks().forEach((track) => {
    track.stop();
  });

//   const blob1 = new Blob(recordedChunks, { type: "video/mp4" });
//   Link = URL.createObjectURL(blob1);
//   const a = document.createElement("a");
//   // document.body.appendChild(a);
//   // a.style = "display: none";
//   a.href = Link;
//   const video_name = new Date().getTime();
//   a.download = `${video_name}.mp4`; 


//   // a.click();

//   // const playback_vid = document.createElement("video");
//   const playback_vid = document.getElementById("videoRecorded")
//   // playback_vid.setAttribute("src","C:/Users/AakashBalamurugan/Downloads/"+a.download);
//   // playback_vid.setAttribute("src","./_Untitled - Notepad 2023-04-18 09-38-50.mp4");
//   playback_vid.setAttribute("src", Link);

//   console.log(Link);

//   let blob = Link;
// let dataUrl = await 
//             new Promise(r => {let a=new FileReader(); a.onload=r; a.readAsDataURL(blob)}).then(e => e.target.result);
// console.log(dataUrl);
  

processVideo();

// playback_vid.setAttribute("src","./../../Downloads/"+video_name+".mp4");

// video_append.style.display="block";
video_append.style.display="block";

}
let dataUrl;
async function processVideo() {
  const blob1 = new Blob(recordedChunks, { type: "video/mp4" });
  const a = document.createElement("a");
  const video_name = new Date().getTime();
  a.href = URL.createObjectURL(blob1);
  a.download = `${video_name}.mp4`;

  const playback_vid = document.getElementById("videoRecorded");
  playback_vid.setAttribute("src", a.href);

  console.log(a.href);

  dataUrl = await new Promise((resolve) => {
    let reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.readAsDataURL(blob1);
  });

  console.log(dataUrl);
}

let saved_video ;
if (localStorage.getItem("saved_video_lst")) {
  saved_video = JSON.parse(localStorage.getItem("saved_video_lst"));
}else{
  saved_video =[];
}

const today = new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
  .toISOString()
  .split("T")[0];


function save_vid_fun() {
  

//   blobToDataURL(Link, function(dataurl){
//     console.log(dataurl);
// } )



  let expert = search;
  let user = act_user_obj.user_id;
  let video_data_url = dataUrl;

 const url =location.origin + "/betterme-web/AddVideo?video="+video_data_url+"&expertId="+ expert;
    axios.get(url)
            .then(function(response){
            	console.log(response);
            	if(response.data==true){
                	 alert("Video saved Susccessfully ", "success");
                	 window.location.href="./profile.html";
                 }
                 else{
                	 alert( "failed ", "error"); 
                	 console.log()
                 }
            })
}




let send_vid = document.querySelector("#Save_btn");
send_vid.addEventListener("click", function () {
  save_vid_fun()
  alert("saved sucessfully");
  window.location.reload()
  
})

let refresh = document.querySelector("#delete_btn");

refresh.addEventListener("click", function (e) {
window.location.reload();
  
})


for (let i = 0; i < saved_video.length; i++) {
  console.log(saved_video[i].date)

}


