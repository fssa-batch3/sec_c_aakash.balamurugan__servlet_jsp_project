const form = document.getElementById("forms");
form.addEventListener("submit", (e) => {
	e.preventDefault();
	aakash();
});

function aakash() {

	const First_name = document.getElementById("username").value;
	const mobileNumber = document.getElementById("mobileNumber").value;
	const email = document.getElementById("gmail").value;
	const gender = document.getElementById("gender").value;
	const password = document.getElementById("password").value;
	const conpass = document.getElementById("conpassword").value;



	if (password == conpass) {
		
	const url = location.origin+"/betterme-web/SignupServlet?username="+First_name +"&mobileNumber="+mobileNumber+"&email="+email+"&gender="+gender+"&password="+password ;
    axios.post(url)
            .then(function(response){
            	console.log(response);
            	if(response.data==true){
                	
                	 window.location.href="./login.jsp";
                 }
                 else{
                	 alert( response.data); 
                 }
            })





	} else {
		alert("password are not same");
	}


}



