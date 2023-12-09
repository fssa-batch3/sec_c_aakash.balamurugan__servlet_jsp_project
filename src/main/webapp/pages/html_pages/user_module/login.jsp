<%@ page contentType="text/html; charset=UTF-8" language="java"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- displays site properly based on user's device -->
    <link rel="stylesheet" href="<%=request.getContextPath() %>/assets/css/signup.css">
    
    <title>BetterMe</title>
    
    <link
      rel="icon"
      type="img/png"
      sizes="32x32"
      href="<%=request.getContextPath() %>/assets/img/self.png"
    >
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
      href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600&family=Inconsolata:wght@500;900&family=Kdam+Thmor+Pro&family=Lobster+Two&family=Outfit:wght@300;400;600&family=Source+Code+Pro:wght@300&display=swap"
      rel="stylesheet"
    >
  </head>

  <body>
    <div class="signin_form">
    <form action ="<%=request.getContextPath() %>/Login" method = post class="log_form">

      <c:if test="${not empty Error}">
        <div class="alert alert-danger">${Error}</div>
      </c:if>
      
     <h1> Welcome Back!</h1>

        <div class="form__group field">
      <input type="email"
      name="email" id="log_email" value="${email}" class="form__field" placeholder="Name" required >
      <label for="email" class="form__label">Email</label>
     
    </div>
      <div class="form__group field">
        <input type="password"
        id="log_password"
        name="password" value="${password}" class="form__field" placeholder="password" required >
        <label for="password" class="form__label">Password</label>
     </div>
  
    <p>
      <a href="#">Forget Password</a><br>
      <a href="<%=request.getContextPath() %>/pages/html_pages/user_module/signup.jsp" >Not a User , SignUp</a>
    </p>
    <div class="btn">
      <button>submit</button>
    </div>
  </form>
   </div>
   

   
   <c:if test="${not empty Error}">
   <script>
   alert( "${Error}", "error");
   </script>
 </c:if>
   
    

     
   
  </body>
</html>
