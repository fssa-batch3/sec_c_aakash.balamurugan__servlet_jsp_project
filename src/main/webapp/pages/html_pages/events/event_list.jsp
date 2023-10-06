<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<!-- displays site properly based on user's device -->
<link rel="stylesheet" href="<%=request.getContextPath() %>/assets/css/new.css">

<title>BetterMe</title>
<link rel="icon" type="img/png" sizes="32x32"
	href="<%=request.getContextPath() %>/assets/img/self.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link
	href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600&family=Inconsolata:wght@500;900&family=Kdam+Thmor+Pro&family=Lobster+Two&family=Outfit:wght@300;400;600&family=Source+Code+Pro:wght@300&display=swap"
	rel="stylesheet">
</head>

<body>
  <div class="navbar">
    <div class="logo">
      <span class="betterme">
<a href="../../../index.jsp">BetterMe</a>
</span>
    </div>
    <div class="navs">
      <a href="../tips.html">
        <div class="button"> Tips</div>
      </a>
      <a href="./../events/event_list.jsp">
        <div class="select">Events</div>
      </a>
      <a href="./../session/session_list.jsp">
        <div class="button">Session</div>
      </a>
      <a href="./../user_module/profile.jsp">
        <div class="profile">profile</div>
      </a>
    </div>
  </div>

	<div class="popup">
		<div class="pop">
			<h2>what is an event?</h2>
			<a href="#" class="close" id="closeid">&times;</a>
		</div>
		<div class="pop_cont">
			<br>
			<p>It is an event , where you will be performing in front of 10 -
				15 peoples , who also strugle with the same fear of public speaking
				. so, that you can be confident about your speech. And also you
				would receive personal feedback, from the expert who is hosting the
				event and also a video of your speech will be sent to your personal
				expert and so he notices your performance .</p>
		</div>
	</div>
	<main>




	</main>






	<script type="text/javascript" src="<%=request.getContextPath() %>/pages/Js_pages/event/event_list.js"></script>
	<footer>

	

		<p>Copyright © BetterMe. All right reserved.</p>
		<p>Privacy policy | Contact us</p>
		<br> <br>
		<p>If you are in a life threatening situation - don’t use this
			site. Call +1 (800) 273-8255 or use these resources to get immediate
			help.</p>
	</footer>


</body>




</html>
