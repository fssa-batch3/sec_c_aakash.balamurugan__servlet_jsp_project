<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="ISO-8859-1">
    <title>betterMe</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9"
          crossorigin="anonymous">
    <style>
        /* Custom CSS styles can be added here */
        body {
            background-color: #f4f4f4;
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
        }

        h3 {
            text-align: center;
            margin-top: 20px;
        }

        .container {
            max-width: 600px;
            margin: 0 auto;
        }

        a {
            display: block;
            text-decoration: none;
            padding: 10px 20px;
            margin: 10px 0;
            background-color: #007BFF;
            color: #fff;
            text-align: center;
            border-radius: 5px;
        }

        a:hover {
            background-color: #0056b3;
        }
    </style>
</head>
<body>
<div class="container">
    <h3>Event Features</h3>
    <a href="<%=request.getContextPath() %>/Admin/AddEvent.jsp">Add Events Details</a>
    <a href="<%=request.getContextPath() %>/ReadAllEvent">Get Events Details</a>
    <a href="<%=request.getContextPath() %>/Admin/ReadEventByDate.jsp">Get Events Details by Date</a>
    <a href="<%=request.getContextPath() %>/Admin/ReadEventBetweenDates.jsp">Get Events Details Between Dates</a>
    <a href="<%=request.getContextPath() %>/Admin/AddTrainer.jsp">Add Trainer Details</a>
    <a href="<%=request.getContextPath() %>/LogoutServlet">Logout</a>
</div>
</body>
</html>
