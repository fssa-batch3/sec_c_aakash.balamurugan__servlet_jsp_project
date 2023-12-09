<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>

<head>
<title>Add Trainer</title>

<!-- Include Tailwind CSS -->
<link rel="stylesheet"
	href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css">
	    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css">
</head>

<body class="bg-gray-100">
	<div class="min-h-screen flex items-center justify-center">
		<div
			class="bg-white p-8 rounded-lg shadow-md w-full sm:w-3/4 md:w-1/2 lg:w-1/3">
			<h2 class="text-3xl font-extrabold mb-4 text-center">Add Trainer</h2>
			<form onsubmit="prepareData(event)">
				<div class="mb-4">
					<label for="trainerName"
						class="block text-gray-700 text-sm font-bold mb-2">Trainer
						Name:</label> <input type="text" id="trainerName" name="trainerName"
						required
						class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-600" />
				</div>

				<div class="mb-4">
					<label for="imageLink"
						class="block text-gray-700 text-sm font-bold mb-2">Image
						Link:</label> <input type="text" id="imageLink" name="imageLink" required
						class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-600" />
				</div>

				<div class="mb-4">
					<label for="email"
						class="block text-gray-700 text-sm font-bold mb-2">Email:</label>
					<input type="email" id="email" name="email" required
						class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-600" />
				</div>

				<div class="mb-4">
					<label for="loginPass"
						class="block text-gray-700 text-sm font-bold mb-2">Login
						Password:</label> <input type="password" id="loginPass" name="loginPass"
						required
						class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-600" />
				</div>

				<div class="mb-4">
					<label for="occupation"
						class="block text-gray-700 text-sm font-bold mb-2">Occupation:</label>
					<input type="text" id="occupation" name="occupation" required
						class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-600" />
				</div>

				<div class="mb-4">
					<label for="content"
						class="block text-gray-700 text-sm font-bold mb-2">Content:</label>
					<textarea id="content" name="content" required
						class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-600"></textarea>
				</div>

				<div class="mb-4">
					<label for="startTime"
						class="block text-gray-700 text-sm font-bold mb-2">Start
						Time:</label> <input type="time" id="startTime"  placeholder="12:00"  name="startTime" required
						class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-600" />
				</div>

				<div class="mb-4">
					<label for="endTime"
						class="block text-gray-700 text-sm font-bold mb-2">End
						Time:</label> <input type="time" id="endTime" name="endTime" required
						class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-600" />
				</div>

				<!-- Education Input Fields Container -->
				<div class="mb-4">
					<label for="education"
						class="block text-gray-700 text-sm font-bold mb-2">Education:</label>
					<button type="button" class="text-indigo-600 hover:text-indigo-800"
						onclick="addEducationField(event)">
						<svg class="h-5 w-5" fill="none" stroke="currentColor"
							viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round"
								stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                        </svg>
					</button>
					<div id="education-container">
						<input type="text" name="education" required
							class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-600 m-1" />
					</div>

				</div>

				<!-- Experience Input Fields Container -->
				<div class="mb-4">
					<label for="experience"
						class="block text-gray-700 text-sm font-bold mb-2">Experience:</label>
					<button type="button" class="text-indigo-600 hover:text-indigo-800"
						onclick="addExperienceField(event)">
						<svg class="h-5 w-5" fill="none" stroke="currentColor"
							viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round"
								stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                        </svg>
					</button>
					<div id="experience-container">
						<input type="text" name="experience" required
							class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-600 m-1" />
					</div>

				</div>


				<button type="submit"
					class="w-full bg-indigo-600 text-white text-sm font-semibold py-2 rounded-md hover:bg-indigo-700 transition duration-200">Add
					Trainer</button>
			</form>
		</div>
	</div>
	
	  <script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>
	<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
	<script>
        function addEducationField(event) {
            event.preventDefault();
            const educationContainer = document.querySelector("#education-container");
            const input = document.createElement("input");
            input.type = "text";
            input.name = "education";
            
            input.className =
                "w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-600 m-1";
            educationContainer.appendChild(input);
        }

        function addExperienceField(event) {
            event.preventDefault();
            const experienceContainer = document.querySelector("#experience-container");
            const input = document.createElement("input");
            input.type = "text";
            input.name = "experience";
           
            input.className =
                "w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-600 m-1";
            experienceContainer.appendChild(input);
        }
        

        let startTimeValue= null;
        let endTimeValue=null;
        const timePicker={
            enableTime: true,
            noCalendar: true,
            dateFormat: "h:i K",
            time_24hr: false,
          minuteIncrement: 60,
        //   defaultDate: "12:00 AM",
          onChange: function(selectedDates, dateStr) {
            // Store selected start and end times in global variables
            if (this.input.id === "startTime") {
              startTime = dateStr;
            } else if (this.input.id === "endTime") {
              endTime = dateStr;
            }
            // localStorage.setItem("startTime", startTime);
            // localStorage.setItem("endTime", endTime);
          }
        }
        const startTimepicker = flatpickr("#startTime", timePicker);
        const endTimepicker = flatpickr("#endTime", timePicker);
        
        function prepareData(event) {
            event.preventDefault();
            const trainerName = document.querySelector('#trainerName').value;
            const imageLink = document.querySelector('#imageLink').value;
            const email = document.querySelector('#email').value;
            const loginPass = document.querySelector('#loginPass').value;
            const occupation = document.querySelector('#occupation').value;
            const content = document.querySelector('#content').value;
            const startTime = startTimepicker.selectedDates[0].toLocaleTimeString();
            const endTime = endTimepicker.selectedDates[0].toLocaleTimeString();
            
            console.log(startTime);
            console.log(startTimepicker.selectedDates[0]);
            console.log(startTimepicker.selectedDates[0].toLocaleTimeString())

            const educationInputs = document.querySelectorAll('[name="education"]');
            const experienceInputs = document.querySelectorAll('[name="experience"]');
            const educationData = [];
            const experienceData = [];

            educationInputs.forEach((input) => {
            	if(input.value.trim() !="")
                educationData.push({education:input.value.trim()});
            });

            experienceInputs.forEach((input) => {
            	if(input.value.trim() !="")
                experienceData.push({experience :input.value.trim()});
            });


	let education = encodeURIComponent(JSON.stringify(educationData));
	let experience = encodeURIComponent(JSON.stringify(experienceData));
	
            // Make an Axios call to AddTrainerServlet
            const url = location.origin + "/betterme-web/AddTrainerServlet?trainerName=" + trainerName   + "&imageLink=" + imageLink + "&email=" + email + "&loginPass=" + loginPass + "&occupation=" + occupation +
            "&content=" + content + "&startTime=" + startTime + "&endTime=" + endTime + "&education=" + education + "&experience=" +experience;

        axios.post(url)
            .then(function (response) {
               if(response.data ==true ){
               alert("Success");
               window.location.href= "<%=request.getContextPath()%>/Admin/index.jsp";
               } else{
            	alert(response.data)  ; 
               }
            })
            .catch(function (error) {
                console.error(error);
            });

     
        }
        
        
        


    </script>
</body>

</html>
