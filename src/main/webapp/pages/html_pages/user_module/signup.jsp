<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<!-- displays site properly based on user's device -->
<link rel="stylesheet" href="<%=request.getContextPath() %>/assets/css/signup.css">
<title>BetterMe</title>
<link rel="icon" type="img/png" sizes="32x32"
	href="<%=request.getContextPath() %>/assets/img/self.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link
	href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600&family=Inconsolata:wght@500;900&family=Kdam+Thmor+Pro&family=Lobster+Two&family=Outfit:wght@300;400;600&family=Source+Code+Pro:wght@300&display=swap"
	rel="stylesheet">
</head>

<body>
	 <div class="signup_form">
     
      <form id="sig_form">
        <h2>Hello User!!</h2>
        <div class="form__group field">
          <input type="text" class="form__field" placeholder="Name" id="username" pattern="[a-zA-Z ]{2,}+"  title="name should contains only alphabets" required>
          <label for="name" class="form__label">Name</label>
      </div>
      
      <div class="form__group field">
        <input type="input" class="form__field" placeholder="Name" id="mobileNumber" pattern="^[6-9]\d{9}$" title="Please enter a valid 10-digit mobile number" required maxlength="10">
        <label for="name" class="form__label">Mobile Number</label>
    </div>


    <div class="form__group field">
      <input type="email" class="form__field" placeholder="Name" id="gmail" required="">
      <label for="name" class="form__label">Email</label>
  </div>
  <div class="form__group field">
    <select  class="form__field" placeholder="Gender" id="gender" required>
    <option value="Other">Other</option>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
      
    </select>
     <label for="name" class="form__label">Gender</label>
</div>
<div class="form__group field">
  <input type="password" class="form__field" placeholder="Name" id="password" 
   pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$" title="password should have atleast of one LowerCase , one UpperCase , one Special Character and a number and atleast 8 charaters" required="">
  <label for="name" class="form__label">Password </label>
</div>
<div class="form__group field">
  <input type="password" class="form__field" placeholder="Name" id="conpassword" required="">
  <label for="name" class="form__label">Confirm Password</label>
</div>
<div>
  <p>
  <a href="<%=request.getContextPath() %>/pages/html_pages/user_module/login.jsp">
  Already a User</a>
</p>

</div>
<div class="btn">
  <button>submit</button>
</div>	<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
 
	<script src="<%=request.getContextPath() %>/pages/Js_pages/user module/signup.js"></script>

</body>

</html>
