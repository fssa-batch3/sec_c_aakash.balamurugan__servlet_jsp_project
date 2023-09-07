<%@ page import= "com.fssa.betterme.model.*" %>
<nav class="navbar bg-dark navbar-expand-lg bg-body-tertiary"
	data-bs-theme="dark">
	<div class="container-fluid">
		<p class="navbar-brand"  >BetterMe</p>
		<button class="navbar-toggler" type="button" data-bs-toggle="collapse"
			data-bs-target="#navbarSupportedContent"
			aria-controls="navbarSupportedContent" aria-expanded="false"
			aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav me-auto mb-2 mb-lg-0">
			

				<%
				String user =null;
				try{
					 user = (String) session.getAttribute("loggedInUser");
				}catch(Exception e){
					response.sendRedirect("./login.jsp");
				}
				if (user == null) {
					
				%>
				<li class="nav-item"><a class="nav-link" href="./login.jsp">Login</a>
				</li>
				<li class="nav-item"><a class="nav-link" href="./signup.jsp">Register</a>
				</li>
				<%
				} else {
				%>
				<li class="nav-item"><a class="nav-link" href="<%=request.getContextPath() %>/"><%=user%></a>

				</li>
				<li class="nav-item"><a class="nav-link" href="<%=request.getContextPath() %>/LogoutServlet">Logout</a>

				</li>

				<%
				}
				%>
			</ul>

		</div>
	</div>
</nav>