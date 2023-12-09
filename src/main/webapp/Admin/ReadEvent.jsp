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
</head>
<body>

<h1>Event List</h1>

<c:set var="eventList" value="${requestScope.eventList}" />


<c:choose>
    <c:when test="${not empty eventList}">
              
         <table>
        <thead>
            <tr>
                <th>Event Name</th>
                <th>Event Description</th>
                <th>Event Address</th>
                <th>Date and Time</th>
                <th>Price</th>
                <th>Event Image</th>
                
                <th>Update</th>
            </tr>
        </thead>
        <tbody>
       <c:forEach items="${eventList}" var="event">
       
                <tr>
                    <td>${event.eventName}</td>
                    <td>${event.eventDescription}</td>
    				<td>${event.eventAddress}</td> 
    				<td>   ${event.getEventDate()}<br> ${event.getEventTime()}</td>       
    				<td>${event.getPrice() }</td>        
    				<td>  <img alt="${event.eventName}" src="${event.imageUrl}" width="100" height="100"></td>
  	            <td>
                        <a href=./EditServlet?event_id=${event.id}>Update</a>
                    </td>
                </tr>
            </c:forEach>

        </tbody>
    </table>
              </c:when>
 
    <c:otherwise>
        <p>No events found.</p>
    </c:otherwise>
</c:choose>


</body>
</html>
