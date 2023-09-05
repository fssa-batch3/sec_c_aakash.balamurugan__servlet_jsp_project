<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>

<title>Login</title>
</head>
<body>
	<h1>Login Page</h1>
	<form action="Login" method="post">
		<label>Email: </label>
		<input type="email" name = "email" placeholder="Enter email">
		<br />
		<label>Password: </label>
		
		<input type="password" name = "password" placeholder="Enter password">
		<br />
		<button type="submit" >Submit</button>
	</form>

</body>
</html>