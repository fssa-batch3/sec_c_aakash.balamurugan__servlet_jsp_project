<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>betterMe</title>
<link
	href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
	rel="stylesheet"
	integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9"
	crossorigin="anonymous">
</head>
<body>
<jsp:include page="../header.jsp"></jsp:include>

<h3>Event Features</h3>
<a href="./AddEvent.jsp">Add events Details</a><br>
<a href="../ReadAllEvent">Get events Details</a><br>
<a href="./ReadEventByDate.jsp">Get events Details by date</a><br>
<a href="./ReadEventBetweenDates.jsp">Get events Details between date</a>
<a href ="../LogoutServlet">logout</a>


</body>
</html>