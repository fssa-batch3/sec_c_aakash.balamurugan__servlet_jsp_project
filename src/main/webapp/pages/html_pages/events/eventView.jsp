<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>

<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet"
	href="<%=request.getContextPath()%>/assets/css/new.css">
<title>Document</title>
</head>
<body>


	<div class="navbar">
		<div class="logo">
			<span class="betterme"> <a href="../../../index.jsp">BetterMe</a>
			</span>
		</div>
		<div class="navs">
			<a href="../tips.html">
				<div class="button">Tips</div>
			</a> <a href="./../events/event_list.jsp">
				<div class="select">Events</div>
			</a> <a href="./../session/session_list.jsp">
				<div class="button">Session</div>
			</a> <a href="./../user_module/profile.jsp">
				<div class="profile">profile</div>
			</a>
		</div>
	</div>

	<main id="main"></main>

	<div class="box1">

		<div class="content1">
			<input type="text" placeholder="comments" id="name">

			<button type="button" id="button">Sumbit</button>

			<div id="comment_box"></div>
		</div>

	</div>
	</main>


	<!-- first section ofor ticket booking  -->
	<div class="ticketbox">
		<form id="event_attendee_det">
			<a href="#" class="close" id="closeid">&times;</a>

			<div class="center">
				<h2>Performers</h2>
				<div class="event_attene_det">
					<fieldset>

						<h6>Ticket</h6>



						<%
						String loggedInEmail = (String) session.getAttribute("loggedInUser");

						if (loggedInEmail == null) {
							response.sendRedirect(request.getContextPath() + "/pages/html_pages/user_module/login.jsp");
						}
						%>
						<p>
							
					
						<label for="attendee_email">Attendee Email : <input
							type="email" name="attendee_email" id="attendee_email" readonly value=<%=loggedInEmail%>></label>

					</fieldset>
				</div>

				<p>
					Total Tickets: <span id="total_tickets">1</span>
				</p>
				<p>
					Total Amount :<span id="total_amt"></span>
				</p>

			
			</div>
			
			
			
			<div class="confirm1">
				<button type="submit"  id="confirmBookbtn">confirm</button>

			</div>
			<!-- </a> -->
	</div>
	</form>




	</div>
	</div>
	<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
	<script
		src="<%=request.getContextPath()%>/pages/Js_pages/event/event_info.js">
		
	</script>

</body>
</html>
