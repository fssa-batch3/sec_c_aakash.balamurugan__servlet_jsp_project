<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <!-- displays site properly based on user's device -->
   <link rel="stylesheet" href="<%=request.getContextPath() %>/assets/css/sesssion_info.css">
   <title>BetterMe</title>
   <link rel="icon" type="img/png" sizes="32x32" href="../../../assets/img/self.png">
   <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600&family=Inconsolata:wght@500;900&family=Kdam+Thmor+Pro&family=Lobster+Two&family=Outfit:wght@300;400;600&family=Source+Code+Pro:wght@300&display=swap" rel="stylesheet">

   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>
<body>

   <!-- navbar  -->
  <div class="navbar">
    <div class="logo">

      <span class="betterme">
<a href="../../../index.jsp">BetterMe</a>
</span>

    </div>
    <div class="navs">
      <a href="./../tips.html">
        <div class="button"> Tips</div>
      </a>
      <a href="./../events/event_list.jsp">
        <div class="button">Events</div>
      </a>
      <a href="./../session/session_list.jsp">
        <div class="select">Session</div>
      </a>
      <a href="../user_module/profile.jsp">
        <div class="profile">profile</div>
      </a>
    </div>
  </div>

    <div class="box1">

      <img alt="Tanishka" id="expert_img">
      <div class="cont1"> 
    
        <h1 id="expert_name">Tanishka</h1>
        <h5 id="occupation">Clinical Psychologist</h5>

      <p>Through BetterMe, I want to help my clients in dealing with their problems and flourish in their lives. My vision is to de-stigmatise seeking help for mental health problems, educate people and modify their perceptions of psychological issues and emotional wellness.</p>
<div class="session_booking_btn">
<button id="Message">Video messages</button>
<a id="Appoitment_link">
  <button id="Appoitment">Appoitment</button>
</a> 
</div>     
      </div>
    
    </div>

   <div class="main_div">
    <div class="expert_details">
      <div id="summary">
        <h2>
          <img src="https://d1hny4jmju3rds.cloudfront.net/talkItOutV2/experts-icon-summary-50x50.png
          " alt="exprience_icon">
            Summary
        </h2>
    
        <p id="summary_cont"> 
          <b id="expert_name_para">Ms.Tanshika Israni </b> is a trained Psychologist who holds immense knowledge in mental health concerns ranging between multiple age groups.
    
          She is well-versed in counseling for various psychological issues such as Post-traumatic stress disorder, Generalised anxiety disorder, Expressive language disorder, Behavioural addiction and so on. She has had the experience of working with individuals and conducted private therapies and peer counseling sessions through her hands-on knowledge.
          
          Ms. Tanshika uses an eclectic approach to therapy wherein she inculcates techniques like person-centred therapy, gestalt therapy, narrative therapy, rational emotive behaviour therapy, and trauma-informed approaches. Systematic Desensitisation, Applied relaxation, Diaphragmatic breathing, and CBT to name a few.
          
          Additionally, she holds expertise in career and corporate mapping and is well-versed in conducting psychometric assessments like the Sentence completion test, State trait anxiety inventory, and Leibowitz Social Anxiety scale - to name a few. These facilitate early diagnosis of mental health issues for better prognosis.
          
          Ms. Tanshika is fluent in English and Hindi.
        </p>
       
      </div>
    
         <div id="education">
          <h2>
            <img src="https://d1hny4jmju3rds.cloudfront.net/talkItOutV2/experts-icon-education-50x50.png
            " alt="education_icon"> 
            Education
          </h2>
    
          <ul id="education_li">
          
          </ul>
         </div>
    
        <div id="exprience">
          <h2>
            <img src="https://d1hny4jmju3rds.cloudfront.net/talkItOutV2/experts-icon-experience-50x50.png
            " alt="exprience_icon">  
            Experience
          </h2>
    
          <ul id="exprience_li">

          </ul>
        </div>

        <div id="Reviews">
          <h2>
            <img src="https://d1hny4jmju3rds.cloudfront.net/talkItOutV2/experts-icon-reviews-50x50.png
            " alt="Reviews_icon">  
            Reviews
          </h2>
        </div>
    </div>
 <div class="secondary_div">
  <div class="suggestions">
    <h2>
      <img src="https://d1hny4jmju3rds.cloudfront.net/talkItOutV2/experts-icon-similar-50x50.png" alt="suggestion_icon">
      Similar Experts
    </h2>      
    
        </div>
 </div>
   </div>


      <!-- footer -->

        <footer>
            <p> Copyright © BetterMe. All right reserved.</p>
             <p>Privacy policy     |     Contact us</p>
<br>
<br>
             <p>If you are in a life threatening situation - don’t use this site. Call +1 (800) 273-8255 or use these resources to get immediate help.</p>
         </footer>
        </body>
        
<script src="<%=request.getContextPath() %>/pages/Js_pages/session/session_info.js">

</script>

</html>