<!DOCTYPE html>
<html lang="en">
  
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BetterMe</title>
    <link rel="icon" type="image/png" sizes="32x32" href="">
    <link rel="stylesheet" href="./../../../assets/css/profile.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
        integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
        crossorigin="anonymous" referrerpolicy="no-referrer">
        <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" /> -->
</head>
  
<body>
    
    <!-- This is profile-section -->
    <div class="account-section">
        <div class="side-item">
            <div class="page">
                <img src="https://ui-avatars.com/api/?name=Aakash" id="profile" alt="error">
                <div>
                    <h4 id="customer">name</h4>
                    
                </div>
            </div>
            <div class="side-menu">
                <ul>
                    <li>
                        <a  id="my_profile" class="active" autofocus>
<span class="fa-solid fa-circle-user"></span>
                            <span>My Profile</span>
</a>
                    </li>
                    <li>
                        <a  id="my_events" class="active">
<span class="fa-solid fa-bag-shopping"></span>
                            <span>Events</span>
</a>
                    </li>
                    <li>
                        <a  id="my_session" class="active">
<span class="fa-solid fa-calendar-check"></span>
                            <span>Session</span>
</a>
                    </li>
                    <li>
                        <a  id="video_list" class="active">
<span ><i class="fa-solid fa-clapperboard"></i></span>
                            <span>Video list</span>
</a>
                    </li>
                  
                    <li>
                        <a id="logout" class="active">
<span class=
"fa-solid fa-arrow-right-from-bracket fa-rotate-180"></span>

                            <span>LogOut</span>
</a>
                    </li>
  
                </ul>
            </div>
  
        </div>
  
        <div class="main-item">
            <!-- This is header section -->
          
            <!-- This is profile update section-->
            <div class="user-condainer">
                
                <div class="information boxes">
                <form >
                    <!-- This is First name  -->
                    <div class="first-name" id="align-num">
                        <label class="more"> First Name</label>
                        <input class="name" id="user-firstname" type="text" pattern="[A-Za-z]{1,32}" name="user name"
                            title="First name connot contain spaces" placeholder="First Name" value="" 
                            >
  
                    </div>
                    
                    
                    <!-- This is email input  -->
                    <div class="email" id="align-num">
                        <label class="more"> Email</label>
                        <input class="name_email" id="user-email" type="email" name="user email" placeholder="name@gmail.com"
                            value="" required="true" readonly>
  
                    </div>
                   
                    <!-- This is city 
                    <div class="fCity-name" id="align-num">
                        <label class="more"> City</label>
                        <select name="city" class="name" id="district">
                            <option value="Chennai">Chennai</option>
                            <option value="Tiruchy">Tiruchy</option>
                            <option value="Vilupuram">Vilupuram</option>
                            <option value="Madurai">Madurai</option>
                            <option value="Salem">Salem</option>
                        </select>
                        
                        
                        <!-- <input class="name" id="user-firstname" type="text" pattern="[A-Za-z]{1,32}" name="user name"
                            title="First name connot contain spaces" placeholder="First Name" value="" required="true"> 
  
                    </div>
                    -->
                    <!-- This is number -->
                    <div class="Number" id="align-num">
                        <label class="more"> mobile number</label>
                        <input class="name" id="number" type="tel" pattern="[0-9]{10,12}"
                            name="number" placeholder="mobile number" maxlength="10"></div>
                   
                    <div class ="edit_btns">
                        <button id="edit_btn">Edit</button>
                        <button id="save_btn" type="submit">Save</button>
                       
                    </div>
                </form>
                </div>

                <div id="my_events_box" class="boxes">
 
                </div>

                <div id="my_session_page" class="boxes">
                    <h2 class="session_center">Your personal expert </h2>

                    <div class="expert_details">
                        <div>
                          <img id="expert_img" alt="">
                        </div>
                    
                        <div>
                          <h1 id="expert_name"></h1>
                          <h5 id="occupation"></h5>
                        </div>
                    
                        <div>
                          <h2>Ratings</h2>
                        </div>
                        
                        <div>
                          <h3>Reviews</h4>
                          </div>
                        </div>

                        <h2 class="session_center">Upcoming appointment</h2>
                        <div class="upcoming_appoitment">
                            <!-- <div class="upcoming_appoitment_list">
                                <div class="betw">
                                <div><b>Date</b><span id="ap_date">15-03-1023</span> </div>
                                <div> <b>Slot</b><span id="ap_time"> 7:00 AM-8:00AM</span> </div></div>

                                <div class="betw">
                                    <div><b>Mode:</b><span id="mode">voice</span> </div>

                                    <div><b>catagory:</b><span id="mode">Carrer</span> </div>
                                    
                                </div>

                                <div class="betw">
                                    <div><b>Mobile_no:</b><span id="mode">9876543210</span> </div>

                                    <div><b>Email:</b><span id="mode">example@gmail.com</span> </div>
                                    
                                </div>
                            </div> -->

                        </div>

                </div>
                <div id="show_vid" class="boxes">
                    <div class="big_vid_pag">
                        <div class="vid_pag_main">
                            <div class="video">
                        </div>
                        </div>
                        <div class="comments">
                            <div id="comt">hi, the video is good</div>
                            <!-- <input type="text" name="" id="">
                            <button class="send_btn">Send</button> -->
                        </div>
                     </div>
                </div>
            </div>
        </div>
    </div>
	<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script src="./../../Js_pages/user module/profile.js"></script>              
            
</body>
  
</html>