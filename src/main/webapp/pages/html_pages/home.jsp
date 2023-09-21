<%@page import ="com.fssa.betterme.model.User" %>
<%@page import ="com.fssa.betterme.service.UserService" %>
<div class="navbar">
      <div class="logo">
        <span class="betterme">
          <a href="<%=request.getContextPath() %>/index.jsp">BetterMe</a>
        </span>
      </div>
      <div class="navs">
        <a href="<%=request.getContextPath() %>/tips.html">
          <div class="button">Tips</div>
        </a>
        <a href="<%=request.getContextPath() %>pages/html_pages/events/event_list.jsp">
          <div class="button">Events</div>
        </a>
        <a href="<%=request.getContextPath() %>pages/html_pages/session/session_list.html">
          <div class="select">Session</div>
        </a>
        <a href="<%=request.getContextPath() %>pages/html_pages/user_module/profile.html">
        <%
				String user = null;
        		User loginUser =null;
				try {
					user = (String) session.getAttribute("loggedInUser");
					loginUser = UserService.getUserByEmail(user);
				} catch (Exception e) {
					response.sendRedirect("./login.jsp");
				}
				
				%>
          <div class="profile"><%= loginUser.getUsername() %></div>
        </a>
      </div>
    </div>