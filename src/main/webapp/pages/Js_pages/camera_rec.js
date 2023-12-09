const url = window.location.search;
const urlparams = new URLSearchParams(url);
const search = urlparams.get("selected_expert");


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


  

processVideo();


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



const today = new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
  .toISOString()
  .split("T")[0];



// Replace these with your Cloudinary credentials
const cloudName = 'dmfgsb9c5';
const uploadPreset = 'bhxhlyhq'; // Replace with your upload preset

// Function to handle the video upload
async function uploadVideo(dataUrl) {
    // Create a Blob from the Data URL
    const blob = dataURLtoBlob(dataUrl);
    console.log(dataUrl);
    console.log(blob);

    // Create a FormData object to send the video to Cloudinary
    const formData = new FormData();
    formData.append('file', blob);
    formData.append('upload_preset', uploadPreset);

    // Upload the video to Cloudinary
    const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/video/upload`, {
        method: 'POST',
        body: formData,
    });

    if (response.ok) {
        const responseData = await response.json();
        const secureURL = responseData.secure_url;

        return secureURL;
    } else {
        return null;
    }
}

// Function to convert Data URL to Blob
function dataURLtoBlob(dataUrl) {
    const parts = dataUrl.split(';base64,');
    const contentType = parts[0].split(':')[1];
    const byteCharacters = atob(parts[1]);
    const byteNumbers = new Array(byteCharacters.length);

    for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    return new Blob([byteArray], { type: contentType });
}

// Example usage: Call uploadVideo when you want to upload the video
async function save_vid_fun() {
   const url =  await uploadVideo(dataUrl);

   if(url){
await UploadUrl(url)
    console.log(url);

   }else {

    alert("Video upload failed");
   }
}

async function UploadUrl(VideoUrl){
	const url =location.origin + "/betterme-web/AddVideo?video="+VideoUrl+"&expertId="+search ;
    axios.post(url)
            .then(function(response){
            	console.log(response);
            	if(response.data==true){
                	 alert("Susccessfully video saved", "success");
                	 location.reload();
                 }
                 else{
                	 alert( response.data); 
                 }
            })
}


let send_vid = document.querySelector("#Save_btn");
send_vid.addEventListener("click", async function () {
    await save_vid_fun()
    

});

let refresh = document.querySelector("#delete_btn");

refresh.addEventListener("click", function (e) {
    window.location.reload();

});