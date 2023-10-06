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
		<form id="forms">

			<div class="signup">
				<h1>Sign Up for Free</h1>

				<div class="flex1">
					<div class="">
						<div class="signup_inputfield_name">
							<label for="UserName"> UserName </label>
						</div>
						<div class="signup_inputfield">
							<input type="text" id="username" name="UserName"
								pattern="[a-zA-Z ]+" required
								title="First name should contain only alphabets" minlength="3">
						</div>
					</div>

					<!-- Mobile Number -->
					<div class="form-group">
						<label for="mobileNumber">Mobile Number:</label> <input type="tel"
							id="mobileNumber" class="form-control" name="mobileNumber"
							pattern="[0-9]{10,12}" maxlength="10" required
							title="enter a valid mobile Number">
					</div>

					<div class="">
						<div class="signup_inputfield_name">
							<label> Email Id </label>
						</div>
						<div class="signup_inputfield">
							<input type="email" id="gmail" required>
						</div>
					</div>

					<div class="">
						<div class="signup_inputfield_name">
							<label for="gender">Gender:</label>
						</div>
						<div class="signup_inputfield">


							<select class="form-control" name="gender"
								style="height: 41px; width: 308px; margin: 10px;" id="gender"
								required>
								<option value="OTHER">Other</option>
								<option value="MALE">Male</option>
								<option value="FEMALE">Female</option>
							</select>

						</div>
					</div>


					<div class="field-wrap">
						<div class="">
							<div class="signup_inputfield_name">
								<label> Password </label>
							</div>
							<div class="signup_inputfield">
								<input type="password" id="password"
									title="password should contain one capital letter ,one small letter , one symbol and a number  "
									pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
									required>
							</div>
						</div>

						<div class="field-wrap">
							<div class="">
								<div class="signup_inputfield_name">
									<label> Check password </label>
								</div>
								<div class="signup_inputfield">
									<input type="password" id="conpassword"
									
										required>
								</div>
							</div>
						</div>
					</div>
					<br>

					<div class="">
						<div class="signup_a">
							<p>
								<a href="login.jsp">Already a user!!</a>
							</p>
						</div>
						<div class="signup_btn">
							<button class="button button-block" type="submit">SIgn
								up</button>
						</div>
		</form>

	</div>
	</div>
	<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
 
	<script src="<%=request.getContextPath() %>/pages/Js_pages/user module/signup.js"></script>

</body>

</html>
