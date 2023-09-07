<!DOCTYPE html>
<html>
<head>
    <title>Sign Up</title>
    <!-- Include Bootstrap CSS -->
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container">
        <h2 class="mt-5">Sign Up</h2>
        <form action="SignupServlet" method="post">
            <!-- Username -->
            <div class="form-group">
                <label for="username">Username:</label>
                <input type="text" class="form-control" name="username" 
                       pattern="[a-zA-Z]+" required 
                       title="Username should contain only alphabets">
            </div>

            <!-- Mobile Number -->
            <div class="form-group">
                <label for="mobileNumber">Mobile Number:</label>
                <input type="tel" class="form-control" name="mobileNumber" 
                       pattern="[0-9]{10,12}" maxlength="10" required
                       title = "enter a valid mobile Number">
            </div>

            <!-- Email -->
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" class="form-control" name="email" required>
            </div>

            <!-- Gender -->
            <div class="form-group">
                <label for="gender">Gender:</label>
                <select class="form-control" name="gender" required>
                    <option value="MALE">Male</option>
                    <option value="FEMALE">Female</option>
                    <option value="OTHER">Other</option>
                </select>
            </div>

            <!-- Password -->
            <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" class="form-control" name="password" 
                       pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$" 
                       required title="Password should contain one capital letter, one small letter, one symbol, and a number">
            </div>

            <!-- Submit Button -->
            <button type="submit" class="btn btn-primary">Sign Up</button>
        </form>
    </div>

    <!-- Include Bootstrap JavaScript (optional) -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.3/dist/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>
</html>
