





var careerResult;
var cognitiveValue = 0;
var physicalValue = 0;
var psychomotorValue = 0;
var sensoryValue = 0;


function addCognitive( amount)
{
	cognitiveValue +=  amount;
}
function addPhysical( amount)
{
	physicalValue +=  amount;
}
function addPsychomotor( amount)
{
	psychomotorValue +=  amount;
}
function addSensory( amount)
{
	sensoryValue +=  amount;
}

//reset correct answers to 0 whenever they load the quiz page
 if (window.location.href.match('assessment.html')){

	var cognitiveValue = 0;
	var physicalValue = 0;
	var psychomotorValue = 0;
	var sensoryValue = 0;
 }

//function that add values based off of answers
function grade1(){
	if(q1a.checked == true){
		addCognitive(0);
		addPhysical(0);
		addPsychomotor(0);
		addSensory(0);
	}
	else if(q1b.checked == true){
		addCognitive(0);
		addPhysical(0);
		addPsychomotor(0);
		addSensory(0);
	}
	else if(q1c.checked == true){
		addCognitive(0);
		addPhysical(0);
		addPsychomotor(0);
		addSensory(0);
	}
	else if(q1d.checked == true){
		addCognitive(0);
		addPhysical(0);
		addPsychomotor(0);
		addSensory(0);
	}
	else if(q1e.checked == true){
		addCognitive(0);
		addPhysical(0);
		addPsychomotor(0);
		addSensory(0);
	}
}
function grade2(){
	if(q2a.checked == true){
		addCognitive(0);
		addPhysical(0);
		addPsychomotor(0);
		addSensory(0);
	}
	else if(q2b.checked == true){
		addCognitive(0);
		addPhysical(10);
		addPsychomotor(0);
		addSensory(0);
	}
	else if(q2c.checked == true){
		addCognitive(0);
		addPhysical(0);
		addPsychomotor(0);
		addSensory(0);
	}
	else if(q2d.checked == true){
		addCognitive(0);
		addPhysical(0);
		addPsychomotor(0);
		addSensory(0);
	}
	else if(q2e.checked == true){
		addCognitive(0);
		addPhysical(0);
		addPsychomotor(0);
		addSensory(0);
	}
}
function grade3(){
	if(q3a.checked == true){
		addCognitive(0);
		addPhysical(0);
		addPsychomotor(0);
		addSensory(0);
	}
	else if(q3b.checked == true){
		addCognitive(0);
		addPhysical(0);
		addPsychomotor(0);
		addSensory(0);
	}
	else if(q3c.checked == true){
		addCognitive(0);
		addPhysical(0);
		addPsychomotor(0);
		addSensory(0);
	}
	else if(q3d.checked == true){
		addCognitive(0);
		addPhysical(0);
		addPsychomotor(0);
		addSensory(0);
	}
	else if(q3e.checked == true){
		addCognitive(0);
		addPhysical(0);
		addPsychomotor(0);
		addSensory(0);
	}
}

function grade4(){
	if(q4a.checked == true){
		addCognitive(0);
		addPhysical(0);
		addPsychomotor(0);
		addSensory(0);
	}
	else if(q4b.checked == true){
		addCognitive(0);
		addPhysical(0);
		addPsychomotor(0);
		addSensory(0);
	}
	else if(q4c.checked == true){
		addCognitive(0);
		addPhysical(0);
		addPsychomotor(0);
		addSensory(0);
	}
	else if(q4d.checked == true){
		addCognitive(0);
		addPhysical(0);
		addPsychomotor(0);
		addSensory(0);
	}
	else if(q4e.checked == true){
		addCognitive(0);
		addPhysical(0);
		addPsychomotor(0);
		addSensory(0);
	}
}
function grade5(){
	if(q5a.checked == true){
		addCognitive(0);
		addPhysical(0);
		addPsychomotor(0);
		addSensory(0);
	}
	else if(q5b.checked == true){
		addCognitive(0);
		addPhysical(0);
		addPsychomotor(0);
		addSensory(0);
	}
	else if(q5c.checked == true){
		addCognitive(0);
		addPhysical(0);
		addPsychomotor(0);
		addSensory(0);
	}
	else if(q5d.checked == true){
		addCognitive(0);
		addPhysical(0);
		addPsychomotor(0);
		addSensory(0);
	}
	else if(q5e.checked == true){
		addCognitive(0);
		addPhysical(0);
		addPsychomotor(0);
		addSensory(0);
	}
}

//grade function that runs all the others and outputs response
function grade(){
	//adds up all user result values
	grade1();
	grade2();
	grade3();
	grade4();
	grade5();
	
	//finds best career
	var bestCareer = calculateBestCareer(cognitiveValue, physicalValue, psychomotorValue, sensoryValue);
	
	//hides questions 
	document.getElementById("listQuestions").style.display = "none";


	//display career info

	document.getElementById("resultsTitle").innerHTML = "You seem fit to become a : ";
	document.getElementById("resultsCareer").innerHTML = bestCareer.careerName;
	document.getElementsByClassName("quizButtons")[0].style.visibility = 'hidden';
	document.getElementById("careerDescription").innerHTML = bestCareer.description;
	document.careerImage.src= bestCareer.imageLink;

	//saves result career to cookies
	setCookie("career", bestCareer.career, 10);

}

/*
var cognitiveValue = 0;
var physicalValue = 0;
var psychomotorValue = 0;
var sensoryValue = 0;*/ 

function calculateBestCareer(  cognitiveV, physicalV, psychomotorV, sensoryV ){

	var totalDifference, 
	cognitiveDifference,
	physicalDifference,
	psychomotorDifference,
	sensoryDifference,
	leastDifferenceValue, 

	//counter for current best career
	bestCareer;

	//set leastDifferenceValue to a high number
	leastDifferenceValue = 10000;


	//for loop to go through the entire list of careers

	for( var i = 0; i < careerList.length; i++){
		cognitiveDifference = Math.abs(cognitiveV - careerList[i].cognitiveValue); 
		physicalDifference = Math.abs(physicalV - careerList[i].physicalValue); 
		psychomotorDifference = Math.abs(psychomotorV - careerList[i].psychomotorValue);
		sensoryDifference = Math.abs(sensoryV - careerList[i].sensoryValue);
		totalDifference = cognitiveDifference + physicalDifference + psychomotorDifference + sensoryDifference;

		if(leastDifferenceValue > totalDifference){
			leastDifferenceValue = totalDifference;
			bestCareer = careerList[i];	
		}
	}
	cognitiveDifference = 0;
	physicalDifference = 0;
	psychomotorDifference = 0;
	sensoryDifference = 0;
	return bestCareer; 
} 

function redirectTest(){
	window.location.href = "/assessment.html";
}



/*
for next sprint:
Cognitive Abilities influence the acquisition and application of knowledge in problem solving.
Physical Abilities influence strength, endurance, flexibility, balance and coordination.
Psychomotor Abilities influence the capacity to manipulate and control objects
Sensory Abilities influence visual, auditory and speech perception.
*/


var mechanic = {
	career			: "mechanic",
	careerName		: "Mechanic",
	cognitiveValue	: 25,
	physicalValue	: 40,
	psychomotorValue: 20,
	sensoryValue	: 30,
	imageLink: 'img/mechanic.jpg',
	description: " Mechanics are professionals known for inspecting, repairing, and performing high level maintenance on machines and vehicles. Mechanics often practice problem solving skills, working in teams, and thrive in environments with good communication."	 
};

var putech = {
	career			: "putech",
	careerName		: "Power Utility Tech",
	cognitiveValue	: 25,
	physicalValue	: 40,
	psychomotorValue: 20,
	sensoryValue	: 30,
	imageLink: 'img/putech.jpg',
	description: "Power Utility technicians monitor energy output for utility companies. Their tasks vary from regulating energy distribution and operating power equipment to measuring power flow. Utility Technicians practice critical thinking and working in small groups while traveling to different locations of the city daily."	 
};

var mason = {
	career			: "mason",
	careerName		: "Mason",
	cognitiveValue	: 25,
	physicalValue	: 40,
	psychomotorValue: 20,
	sensoryValue	: 30,
	imageLink: 'img/mason.jpg',
	description: "Masons are a type of construction worker that are responsible for building structures such as walkways, chimneys, and etc. They are expected to carry heavy objects as well as restore old and damaged structures. Since safety in the work environment is their main concern, they must carefully plan out everything before physically following through their plan."	 
};

var photographer = {
	career			: "photographer",
	careerName		: "Photographer",
	cognitiveValue	: 25,
	physicalValue	: 40,
	psychomotorValue: 20,
	sensoryValue	: 30,
	imageLink: 'img/photographer.jpg',
	description: "Photographers are often free lance workers hired by contractors to take professional photos of various events, from sports, to celebrations. They can also  creating their own art through photography"
};

var teacher = {
	career			: "nurse",
	careerName		: "Teacher",
	cognitiveValue	: 25,
	physicalValue	: 40,
	psychomotorValue: 20,
	sensoryValue	: 30,
	imageLink: 'img/teacher.jpg',
	description: "Teachers are leaders who specialize in communicating hard topics to students in an easy to understand way by using examples. They must also be good listeners to understand the problems or requests students might have."	 
};

var nurse = {
	career			: "nurse", 
	careerName		: "Nurse",
	cognitiveValue	: 25,
	physicalValue	: 40,
	psychomotorValue: 20,
	sensoryValue	: 30,
	imageLink: 'img/nurse.jpg',
	description: "Nurses oversee doctors by assisting them and the patients that are hospitalized. They must have great communication skills while also being able to follow required protocol."	 
};

var electrician = {
	career			: "electrician",
	careerName		: "Electrician",
	cognitiveValue	: 25,
	physicalValue	: 40,
	psychomotorValue: 20,
	sensoryValue	: 30,
	imageLink: 'img/electrician.jpg',
	description: "Electricians oversee installing, and maintaining, and repairing electrical wiring, any equipment, and fixtures. They are great problem solvers by by using the many skills they have to create new solutions based on their current location."	 
};
var careerList = [mechanic, putech, mason, photographer, teacher, nurse, electrician];

//set cookie's name, value and expiration date
function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	var expires = "expires="+ d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + "samesite=Lax; " + expires + ";path=/";
  }
  //get the value of the name of the cookie inputted
  function getCookie(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for(var i = 0; i <ca.length; i++) {
	  var c = ca[i];
	  while (c.charAt(0) == ' ') {
		c = c.substring(1);
	  }
	  if (c.indexOf(name) == 0) {
		return c.substring(name.length, c.length);
	  }
	}
	return "";
  }

  //function that checks if user has cookies from previous sessions
function checkCookie() {
	var career = getCookie("career");

	if (career == ""){
	 alert("You have no saved career");
	} else {
		//display career info
		var savedCareer = getCookie("career");
		//hides questions 
		document.getElementById("listQuestions").style.display = "none";


		//display career info
		document.getElementById("resultsTitle").innerHTML = "You seem fit to become a : ";
		document.getElementById("resultsCareer").innerHTML = this[savedCareer].careerName;
		document.getElementsByClassName("quizButtons")[0].style.visibility = 'hidden';
		document.getElementById("careerDescription").innerHTML = this[savedCareer].description;
		document.careerImage.src= this[savedCareer].imageLink;


	  }
  }

function viewCareers(){
	var displayResults = document.getElementById("careers").value;

	document.getElementById("resultsCareer2").innerHTML = this[displayResults].careerName;
	document.getElementById("careerDescription2").innerHTML = this[displayResults].description;
	document.careerImage2.src= this[displayResults].imageLink;

}

$(function(){
	$.cookit({
		messageText: "Our site uses cookies to enhance your browsing experience.",
		buttonText: "I accept",
		backgroundColor: '#0b63a2',
		messageColor: '#fbfbfb',
		linkColor: '#afeff6',
		buttonColor: '#fbfbfb'
	  });


});

