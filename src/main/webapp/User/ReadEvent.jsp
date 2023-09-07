<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@page import="com.fssa.betterme.model.Event" %>
<%@page import="com.fssa.betterme.service.EventService" %>
<%@page import="java.util.List" %>

<!DOCTYPE html>
<html>
<head>
    <title>Event List</title>
    <link
	href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
	rel="stylesheet"
	integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9"
	crossorigin="anonymous">
    <style>
        .event-container {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); /* Create a grid with columns that are at least 300px wide */
            grid-gap: 20px; /* Add some space between grid items */
        }

        .event {
            border: 1px solid #ccc;
            padding: 10px;
            max-width: 300px;
        }

        .event img {
            max-width: 100%;
            height: auto;
        }

        .event-title {
            font-weight: bold;
            margin-top: 10px;
        }

        .event-details {
            margin-top: 10px;
        }

        .event-price {
            font-weight: bold;
        }
    </style>
</head>

<body>
<jsp:include page="../header.jsp"></jsp:include>
<h1>Event List</h1>

<c:set var="eventList" value="${requestScope.eventList}" />

<c:choose>
    <c:when test="${not empty eventList}">
        <div class="event-container">
            <c:forEach items="${eventList}" var="event">
                <div class="event">
                    <img src="${event.getImageURL()}" alt="${event.getEventName()}">
                    <div class="event-title">Event Name: ${event.getEventName()}</div>
                    <div class="event-price">Event Price: ${event.getPrice()}</div>
                    <div class="event-details">
                        <div>Date: ${event.getEventDate()}</div>
                        <div>Time: ${event.getEventTime()}</div>
                    </div>
                </div>
            </c:forEach>
        </div>
    </c:when>
    <c:otherwise>
        <p>No active events found.</p>
    </c:otherwise>
</c:choose>
</body>
</html>
