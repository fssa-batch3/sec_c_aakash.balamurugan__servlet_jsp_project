<%@ page contentType="text/html; charset=UTF-8" language="java"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Create Event</title>

<!-- Include Bootstrap CSS -->
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
<!-- Include other CSS files if needed -->
</head>
<body>
	<jsp:include page="../header.jsp"></jsp:include>
	<div class="container mt-1">
		<%-- Display error message if available --%>
		<c:if test="${not empty error}">
			<div class="alert alert-danger">${error}</div>
		</c:if>

		<c:choose>
			<c:when test="${empty event_id}">
				<h1 class="text-center pt-3">Create Event</h1>
				<form action="<%=request.getContextPath()%>/AddEventServlet"
					method="post">
					<div class="form-group">
						<label for="event_name">Event Name:</label> <input type="text"
							class="form-control" id="event_name" name="event_name" required
							value="${param.event_name}">
					</div>

					<div class="form-group">
						<label for="event_About">Event About:</label>
						<textarea class="form-control" id="event_description"
							name="event_About" required> ${param.event_About} </textarea>
					</div>

					<div class="form-group">
						<label for="event_description">Event Description:</label>
						<textarea class="form-control" id="event_description"
							name="event_description" required>${param.event_description}</textarea>
					</div>

					<div class="form-group">
						<label for="event_address">Event Address:</label>
						<textarea class="form-control" id="event_address"
							name="event_address" rows="3" required>${param.event_address}</textarea>
					</div>


					<div class="form-group">
						<label for="img_url">Image URL:</label> <input type="text"
							class="form-control" id="img_url" name="img_url" required
							value="${param.img_url}">
					</div>

					<div class="form-group">
						<label for="date">Date:</label> <input type="date"
							class="form-control" id="date" name="date" required
							value="${param.date}">
					</div>

					<div class="form-group">
						<label for="time">Time:</label> <input type="time"
							class="form-control" id="time" name="time" required
							value="${param.time}">
					</div>

					<div class="form-group">
						<label for="price">Price:</label> <input type="number"
							class="form-control" id="price" min="150" name="price"
							step="0.01" required value="${param.price}">
					</div>

					<div class="form-group">
						<label for="HostEmail">Host email:</label> <input type="email"
							class="form-control" id="HostEmail" name="HostEmail" required
							value="${param.HostEmail}">
					</div>

					<div class="form-group text-center pt-3">
						<button type="submit" class="btn btn-primary">Create
							Event</button>
					</div>
				</form>

			</c:when>
			<c:otherwise>
				<h1 class="text-center pt-3">Update Event</h1>

				<form action="<%=request.getContextPath()%>/UpdateEventServlet"
					method="post">
					<input type="text" name="event_id" value="${event_id}" hidden>
					<div class="form-group">
						<label for="event_name">Event Name:</label> <input type="text"
							name="event_name" value="${event_name}" readonly>
					</div>
					<div class="form-group">
						<label for="event_About">Event About:</label>
						<textarea class="form-control" id="event_description"
							name="event_About" required> ${event_About} </textarea>
					</div>

					<div class="form-group">
						<label for="event_description">Event Description:</label>
						<textarea class="form-control" id="event_description"
							name="event_description" required>${event_description}</textarea>
					</div>

					<div class="form-group">
						<label for="event_address">Event Address:</label>
						<textarea class="form-control" id="event_address"
							name="event_address" rows="3" required>${event_address}</textarea>
					</div>


					<div class="form-group">
						<label for="img_url">Image URL:</label> <input type="text"
							class="form-control" id="img_url" name="img_url" required
							value="${img_url}">
					</div>

					<div class="form-group">
						<label for="date">Date:</label> <input type="date"
							class="form-control" id="date" name="date" required
							value="${date}">
					</div>

					<div class="form-group">
						<label for="time">Time:</label> <input type="time"
							class="form-control" id="time" name="time" required
							value="${time}">
					</div>

					<div class="form-group">
						<label for="price">Price:</label> <input type="number"
							class="form-control" id="price" min="150" name="price"
							step="0.01" required value="${price}">
					</div>

					<div class="form-group">
						<label for="HostEmail">Host email:</label> <input type="email"
							class="form-control" id="HostEmail" name="HostEmail" required
							value="${HostEmail}">
					</div>
				<c:choose>
    <c:when test="${isActive}">
        <div class="form-group text-center pt-3">
            <a href="<%=request.getContextPath()%>/DeleteEventServlet?event_id=${event_id}"
                class="btn btn-danger" name="deleteButton">Delete Event</a>
            <button type="submit" class="btn btn-primary" name="updateButton">Update Event</button>
        </div>
    </c:when>
    <c:otherwise>
       <p>Event Expried</p>
    </c:otherwise>
</c:choose>


					<div></div>


				</form>

			</c:otherwise>
		</c:choose>




	</div>

	<!-- Include Bootstrap JS (optional) -->
	<script
		src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
	<script
		src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
	<script
		src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>
</html>
