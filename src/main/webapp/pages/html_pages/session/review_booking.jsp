<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- displays site properly based on user's device -->
    <link rel="stylesheet" href="<%=request.getContextPath() %>/assets/css/review_booking.css">
    <title>BetterMe</title>
    <link
      rel="icon"
      type="img/png"
      sizes="32x32"
      href="<%=request.getContextPath() %>/assets/img/self.png"
    >
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
      href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600&family=Inconsolata:wght@500;900&family=Kdam+Thmor+Pro&family=Lobster+Two&family=Outfit:wght@300;400;600&family=Source+Code+Pro:wght@300&display=swap"
      rel="stylesheet"
    >

    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    >
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

    <h2 class="REVIEW_YOUR_BOOKING">REVIEW YOUR BOOKING</h2>

    <form id="appoitment_book">
    <div class="appoitment_review">
        <div class="Appointment_Details">
          <h3>Your Appointment </h3>
  
          <p>
            <b>Expert :</b>
  
            <span id="expert_name">Sanjana Anwar Ali</span>
          </p>
  
          <p>
<b>Date :</b>
<input type="date" id="appoitment_date">
</p>
  
          <p>
<b>Time :</b>
<select name="" id="time_slot"></select>
</p>
  
          <p>
<b>session Type:</b>
<span id="session_mode">      voice</span>
</p>
        </div>
        <div class="Appointment_Details1">
          <h3>Please provide us with your contact details</h3>
          <p>So we may keep you updated about your appointment's status.</p>
  
          <input
            class="name"
            id="number"
            type="tel"
            pattern="[0-9]{10,12}"
            name="number"
            placeholder="mobile number"
            maxlength="10"
          >
          <br >
  
          <input
            class="name_email"
            id="user_email"
            type="email"
            name="user email"
            placeholder="name@gmail.com"
            value=""
            required="true"
          >
          <br >
  
          <select name="" id="catagory">
            <option value="Academic">Academic</option>
            <option value="Carrer">Carrer</option>
            <option value=""></option>
          </select>
          <p>
            Your session is completely confidential and private. The information
            is only accessible to our qualified mental health professionals in
            case of legal or quality supervision.
          </p>
          <button type="submit" class="btn">BOOK APPOINTMENT</button>
        </div>
      </div>
    </form>
    <script src=" https://smtpjs.com/v3/smtp.js"></script>
    <script src="<%=request.getContextPath() %>/pages/Js_pages/session/review_booking.js"></script>
  </body>
</html>
