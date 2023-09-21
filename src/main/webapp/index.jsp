<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<!-- Use of external CSS file to style the page -->
<link rel="stylesheet" href="assets/css/new.css">
<title>BetterMe</title>
<!-- Adding a favicon for the website -->
<link rel="icon" type="img/png" sizes="32x32" href="assets/img/self.png">
<!-- <link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600&family=Inconsolata:wght@500;900&family=Kdam+Thmor+Pro&family=Lobster+Two&family=Outfit:wght@300;400;600&family=Source+Code+Pro:wght@300&display=swap" rel="stylesheet"> -->
</head>

<body>

	<jsp:include page="header.jsp"></jsp:include>
	<!-- First banner section using div tag and class attribute-->
	<div class="banner">
		<div id="maincont">
			<h1>Achieve your potential with BetterMe with our experts</h1>
			<!-- <ul class="align">
                <li> &#9989; Start immediately</li>
                <li> &#9989; Boost up the confidence</li>
            </ul>
            <br> -->
			<%
			String user = null;
			try {
				user = (String) session.getAttribute("loggedInUser");
			} catch (Exception e) {
				response.sendRedirect("pages/html_pages/user_module/login.html");
			}
			if (user == null) {
			%>
			<a href="pages/html_pages/user_module/signup.jsp"> <!-- Adding a button element with text content-->
				<button class="start">SignUp</button>
			</a>
			<%
			} else {
			%>


			<a href="./pages/html_pages/tips.jsp"> <!-- Adding a button element with text content-->
				<button class="start">Get started</button>
			</a>
			<%
			}
			%>

		</div>
	</div>

	<!-- second section on index -->
	<div class="second">
		<h2>Therapy for how we live today</h2>
		<p>BetterMe is an online therapy platform that provides users the
			confidential support of a licensed therapist through an easy-to-use
			and HIPAA-compliant app.</p>
		<div class="tpo-align">
			<div class="pic">
				<img src="https://ibb.co/M8T0xNk" alt="">
			</div>
			<p>Improve your mental health in the most convenient and
				affordable way! You'll get matched with a licensed therapist in your
				state from the comfort of your device, and receive ongoing support
				via secure messaging and live video sessions.</p>
		</div>

	</div>

	<!-- third section on index -->
	<div id="works">
		<div>
			<h2>How it works</h2>
			<p>Start your journey in just 4 easy steps!</p>
		</div>

		<div class="flex">
			<div class="user">
				<h3>Taking Tips</h3>
				<p>Take notes of tips and following in our daily life</p>
			</div>
			<!-- <div class="ARROW"><img src="assets/img/icons/right.png" alt="arrow"></div> -->
			<div class="user">
				<h3>Trying it daily</h3>
				<p>Following the tips regurally so that you can find that what
					are you lacking of..</p>
			</div>
			<!-- <div class="ARROW"><img src="assets/img/icons/right.png" alt="arrow"></div> -->
			<div class="user">
				<h3>Session with our experts</h3>
				<p>Talking with our experts , it give you a personalisied
					suggestion of your problems.</p>
			</div>
			<!-- <div class="ARROW"><img src="assets/img/icons/right.png" alt="arrow" ></div> -->
			<div class="user">
				<h3>Attending public sessions</h3>
				<p>in this session, we get together with peoples who are with
					the same problems as you</p>
			</div>
		</div>
		<!-- <div>
        <a href="pages/html_pages/user_module/login.html"> <span class="start">
            Log In
        </span></a>
    </div> -->

	</div>
	<br>
	<!-- fourth section on index -->
	<div id="benifits">

		<div class="flex">
			<div class="banner2">
				<img src="./assets/img/home/confident.jpg" alt="banner">
			</div>
			<div class="list">
				<h2>Benefits of BetterMe</h2>
				<ul>

					<li><img src="assets/img/icons/schedule.png" alt="schedule">Eliminate
						commute time and scheduling hassles</li>

					<li><img src="assets/img/icons/heart.png" alt="heart">Flexible
						plans to meet your needs and lifestyle</li>

					<li><img src="assets/img/icons/overpopulation.png"
						alt="overpopulation">Seamlessly switch therapists, at no
						extra cost</li>

					<li><img src="assets/img/icons/dollar.png" alt="dollar">Save
						money while receiving high-quality care</li>
				</ul>
			</div>
		</div>
	</div>
	<br>
	<br>
	<br>

	<!-- user review section on index -->
	<div id="review">
		<h2 class="center">USERS REVIEWS</h2>
		<hr>
		<div class="flex">
			<div class="user">
				<div class="flex">
					<div class="">
						<img src="assets/img/home/stevejobs.jpeg" alt="stevejobs">
					</div>
					<div class="">
						<h4>Steve jobs</h4>
						<h6>@apple.inc</h6>
					</div>
				</div>
				<p>I like BetterMe. It's nice to be able to say what I need to,
					and have somebody check in with me daily giving me feedback. It
					makes me feel more grounded and determined to do things.</p>
			</div>

			<div class="user">
				<div class="flex">
					<div class="">
						<img src="assets/img/home/J_Jayalalithaa.jpg" alt="jayalaitha">
					</div>
					<div class="">
						<h4>Jayalalithaa</h4>
						<h6>@Amma</h6>
					</div>
				</div>
				<p>I'm incredibly grateful for receiving the best help right
					now. Thank you so much @BetterMe ‚ù§Ô∏è‚ú®.</p>
			</div>

			<div class="user">
				<div class="flex">
					<div class="">
						<img src="assets/img/home/mahesh.jpeg" alt="mahesh">
					</div>
					<div class="">
						<h4>Mahesh</h4>
						<h6>@erode.mahesh
					</div>
				</div>
				<p>Thank god for talkspace therapy. Sending my therapist
					messages at 2 in the morning feels less weird when that's how most
					of your communication occurs.</p>
			</div>
		</div>

	</div>
	<br>
	<br>

	<!-- footer -->
	<footer>
		<p>Copyright © BetterMe. All right reserved.</p>
		<p>Privacy policy | Contact us</p>
		<br> <br>
		<p>If you are in a life threatening situation - don'Äôt use this
			site. Call +1 (800) 273-8255 or use these resources to get immediate
			help.</p>
	</footer>
	<script src="<%=request.getContextPath() %>/pages/Js_pages/main.js">
		
	</script>

</body>
</html>
