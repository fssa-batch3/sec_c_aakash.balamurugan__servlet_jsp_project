const form = document.getElementById("sig_form");
form.addEventListener("submit", (e) => {
	e.preventDefault();
	aakash();
});

function aakash() {

	const First_name = document.getElementById("username").value.trim();
	const mobileNumber = document.getElementById("mobileNumber").value.trim();
	const email = document.getElementById("gmail").value.trim();
	const gender = document.getElementById("gender").value.trim();
	const password = document.getElementById("password").value.trim();
	const conpass = document.getElementById("conpassword").value.trim();



	if (password == conpass) {
		
	const url = location.origin+"/betterme-web/SignupServlet?username="+First_name +"&mobileNumber="+mobileNumber+"&email="+email+"&gender="+gender+"&password="+password ;
    axios.post(url)
            .then(function(response){
            	console.log(response);
            	if(response.data==true){
                	
                	 window.location.href="./../../../index.jsp";
                 }
                 else{
                	 alert( response.data); 
                 }
            })





	} else {
		alert("The password is not match");
	}


}



