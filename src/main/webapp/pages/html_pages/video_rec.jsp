<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./../../assets/css/new.css" />
    <title>BetterMe</title>
  </head>
  <body>
    <div class="navbar">
      <div class="logo">
        <span class="betterme">
          <a href="../html_pages/home.html">BetterMe</a>
        </span>
      </div>
      <div class="navs">
        <a href="./tips.html">
          <div class="button">Tips</div>
        </a>
        <a href="./events/event_list.jsp">
          <div class="button">Events</div>
        </a>
        <a href="./session/session_list.jsp">
          <div class="select">Session</div>
        </a>
        <a href="./user_module/profile.jsp">
          <div class="profile">profile</div>
        </a>
      </div>
    </div>
    <img src="./../../assets/img/gif/recording.gif" id="recording" alt="" />
    <video id="video" muted autoplay width></video>

    <div class="edit_btns_cam">
      <button id="stop_vid">Stop Video and Preview</button>
      <button id="startFunction">Start Streaming</button>
      <button id="btn_stop">Record</button>
    </div>

    <div id="sandeep" class="video_btn_save">
      <video controls playsinline id="videoRecorded"></video>
      <div id="save_d_div">
        <button id="Save_btn">Save</button>
        <button id="delete_btn">Delete</button>
      </div>
    </div>
    	<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

    <script src="./../Js_pages/camera_rec.js"></script>
  </body>
</html>
