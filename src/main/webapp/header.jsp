<!-- Navigation bar section using div tag and class attribute -->
<div class="navbar">
	<div class="logo">
		<!-- Using anchor tag to link to the home page -->
		<a href="index.jsp"> <!-- Adding a logo image and text for the website name -->
			<span class="betterme">BetterMe </span>
		</a>
	</div>
	<div class="navs">
		<a href="#works">
			<button type="button">How It Works</button>
		</a> <a href="#review">
			<button type="button">Review</button>
		</a>

		<%
		String user = (String) session.getAttribute("loggedInUser");

		if (user == null) {
		%>
		<a href="<%=request.getContextPath() %>/pages/html_pages/user_module/login.jsp"> <span
			class="start"> Log in </span></a>
		<%
		} else {
		%>

		<a href="<%=request.getContextPath() %>/pages/html_pages/tips.html"> <spa n class="start">
			Started </span></a>
		<%
		}
		%>
	</div>
</div>




