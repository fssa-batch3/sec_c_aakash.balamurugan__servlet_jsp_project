<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BetterMe - Login</title>
<style >
/* styles.css */
body {
    font-family: Arial, sans-serif;
    background-color: #f2f2f2;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.container {
    text-align: center;
}

.login-container {
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

h1 {
    color: #333;
}

.form-group {
    margin-bottom: 15px;
    text-align: left;
}

label {
    font-weight: bold;
}

input[type="email"],
input[type="password"] {
    width: 100%;
    padding: 10px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
}

button {
    background-color: #007BFF;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    font-size: 18px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}

.forgot-password {
    margin-top: 10px;
}

.forgot-password a {
    color: #007BFF;
    text-decoration: none;
}

</style>

</head>
<body>
    <div class="container">
        <div class="login-container">
            <h1>Welcome to BetterMe</h1>
            <form action="Login" method="post">
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="username" name="email" required>
                </div>
                <div class="form-group">
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" required>
                </div>
                <button type="submit">Login</button>
            </form>
            <a href ="signup.jsp">Not a User</a>
            <p class="forgot-password"><a href="#">Forgot password?</a></p>
        </div>
    </div>
</body>
</html>
