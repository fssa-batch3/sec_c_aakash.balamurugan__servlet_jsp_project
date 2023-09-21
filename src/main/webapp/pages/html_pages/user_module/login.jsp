<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- displays site properly based on user's device -->
    <link rel="stylesheet" href="../../../assets/css/signup.css">
    <title>BetterMe</title>
    
    <link
      rel="icon"
      type="img/png"
      sizes="32x32"
      href="../../../assets/img/self.png"
    >
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
      href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600&family=Inconsolata:wght@500;900&family=Kdam+Thmor+Pro&family=Lobster+Two&family=Outfit:wght@300;400;600&family=Source+Code+Pro:wght@300&display=swap"
      rel="stylesheet"
    >
  </head>

  <body>
    <div class="">
      <div class="login">
        <h2>Welcome Back</h2>
        <form action="./../../../Login" method="get">
          <div class="">
            <label for="email"> Email Id </label>
            <input type="email" name="email" id="log_email" required>
          </div>

          <div class="">
            <label for="password"> Password </label>
             <input
              type="password"
              id="log_password"
              pattern="(?=^.{4,}(?=.*[A-Z])(?=.*[a-z]).*$"
              name="password"
              required
            >
          </div>

          <div class="flex">
            <div class="">
<a href="#">Forgot Password?</a>
</div>
            <div class="">
<a href="./signup.jsp">Not a user Already?</a>
</div>
          </div>
          <br >

          <button class="button button-block">Log In</button>
        </form>
      </div>
    </div>
    
    <script type="text/javascript" >
    
    </script>

  </body>
</html>