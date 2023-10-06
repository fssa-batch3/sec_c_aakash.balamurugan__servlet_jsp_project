<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <!-- displays site properly based on user's device -->
   <link rel="stylesheet" href="<%=request.getContextPath() %>/assets/css/appoitement.css">
   <title>BetterMe</title>
   <link rel="icon" type="img/png" sizes="32x32" href="../../../assets/img/self.png">
   <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600&family=Inconsolata:wght@500;900&family=Kdam+Thmor+Pro&family=Lobster+Two&family=Outfit:wght@300;400;600&family=Source+Code+Pro:wght@300&display=swap" rel="stylesheet">

   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>
<body>

  <!-- navbar  -->
  <div class="navbar">
    <div class="logo">

      <span class="betterme">
<a href="../../../index.jsp">BetterMe</a>
</span>

    </div>
    <div class="navs">
      <a href="./../tips.html">
        <div class="button"> Tips</div>
      </a>
      <a href="./../events/event_list.jsp">
        <div class="button">Events</div>
      </a>
      <a href="./../session/session_list.jsp">
        <div class="select">Session</div>
      </a>
      <a href="../user_module/profile.jsp">
        <div class="profile">profile</div>
      </a>
    </div>
  </div>

  <!-- appoitment page -->

  <div class="expert_details">
    <div>
      <img id="expert_img" alt="">
    </div>

    <div>
      <h1 id="expert_name"></h1>
      <h5 id="occupation"></h5>
    </div>

    <div>
      <h2>Ratings</h2>
    </div>
    
    <div>
      <h3>Reviews</h4>
      </div>
    </div>

<h4 class="mode">CHOOSE YOUR MODE OF CONTACT</h4>
  
<div class="Appointment_details">
  <div>
    <img src="https://d2w4fhi5bhd90e.cloudfront.net/new-appointment-flow/voicecall-icon1b.png" alt="">
  </div>

  <div>
    <h3 >VOICE CALL</h3>
    <h5>Duration: 45 minutes</h5>
    <p>Your Expert will talk to you one on one over a dedicated phone line and work with you to help find the answers you need. Confidentiality is guaranteed.</p>
  </div>

  <div>
    <a id="voice">
<button class="app_select">Select</button>
</a>
  </div>
  
  </div>

    <div class="Appointment_details">
      <div>
        <img src="https://d2w4fhi5bhd90e.cloudfront.net/new-appointment-flow/video-icon2b.png" alt="">
      </div>
    
      <div>
        <h3 >
          VIDEO CALL</h3>
        <h5>Duration: 45 minutes</h5>
        <p>A visual interaction will help your Expert observe your body language and non-verbal cues, enabling optimal therapy. Confidentiality is guaranteed.</p>
      </div>
    
      <div>
        <a id="video ">
<button class="app_select">Select</button>
</a>
      </div>
      
      </div> 

    <div class="Appointment_details">
      <div>
        <img src="https://d2w4fhi5bhd90e.cloudfront.net/new-appointment-flow/chat-icon3b.png" alt="">
      </div>
    
      <div>
        <h3 >CHAT SESSION</h3>
        <h5>Duration: 45 minutes</h5>
        <p>Your Expert will talk to you over chat on yourdost platform, and work with you to help find the answers you need. Confidentiality is guaranteed.</p>
      </div>
    
      <div>
        <a id="chat">
<button class="app_select">Select</button>
</a>
      </div>

      <!-- <select name="" id=""></select>       -->
      
      </div>

       <!-- footer -->

       <footer>
        <p> Copyright © BetterMe. All right reserved.</p>
         <p>Privacy policy     |     Contact us</p>
<br>
<br>
         <p>If you are in a life threatening situation - don’t use this site. Call +1 (800) 273-8255 or use these resources to get immediate help.</p>
     </footer>

    <script src="../../Js_pages/session/appoitement_booking.js"></script>
</body>
</html>