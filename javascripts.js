var careerResult;
var cognitiveValue = 0;
var physicalValue = 0;
var psychomotorValue = 0;
var sensoryValue = 0;
var top3Careers = [];
var counter = 0;

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
	psychomotorValue += amount;
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



//grade function that runs all the others and outputs response
function grade(){
	//adds up all user result values
	grade1();
	grade2();
	grade3();
	grade4();
	grade5();
	grade6();
	grade7();
	grade8();
	grade9();
	grade10();
	grade11();
	grade12();
	grade13();
	grade14();
	grade15();

	alert("\ncog: "+ cognitiveValue + "\nphys" + physicalValue + "\npsych" + psychomotorValue + "\nSens" + sensoryValue);


	
	//finds best career
	var bestCareer = calculateBestCareer(cognitiveValue, physicalValue, psychomotorValue, sensoryValue);
	

	calcTop3(bestCareer);

	//hides questions 
	document.getElementById("listQuestions").style.display = "none";
	document.getElementsByClassName("quizButtons")[0].style.visibility = 'hidden';
	//displays industry
	document.getElementById("industryTitle").innerHTML = "The industry that fits you most: ";
	document.getElementById("industry").innerHTML = top3Careers[1].industry;
	
	//display career info

	document.getElementById("resultsTitle1").innerHTML = "";
	document.getElementById("resultsCareer1").innerHTML = top3Careers[0].careerName;
	document.getElementById("careerDescription1").innerHTML = top3Careers[0].description;
	document.careerImage1.src= top3Careers[0].imageLink;

	document.getElementById("resultsTitle2").innerHTML = "";
	document.getElementById("resultsCareer2").innerHTML = top3Careers[1].careerName;
	document.getElementById("careerDescription2").innerHTML = top3Careers[1].description;
	document.careerImage2.src= top3Careers[1].imageLink;

	document.getElementById("resultsTitle3").innerHTML = "";
	document.getElementById("resultsCareer3").innerHTML = top3Careers[2].careerName;
	document.getElementById("careerDescription3").innerHTML = top3Careers[2].description;
	document.careerImage3.src= top3Careers[2].imageLink;



	//saves result career to cookies
	setCookie("career", bestCareer.career, 10);

}

function calcTop3(bestCareer)
{
	
	
	for( var i = 0; i < careerList.length; i++)
	{

		

		if(bestCareer.industry == careerList[i].industry && counter < 3)
		{
			top3Careers[counter] = careerList[i];

			counter++;
		}
	}

	counter = 0;
}

function calculateBestCareer(cognitiveV, physicalV, psychomotorV, sensoryV ){


	var totalDifference, 
	cognitiveDifference,
	physicalDifference,
	psychomotorDifference,
	sensoryDifference,
	leastDifferenceValue, 

	//counter for current best career
	bestCareer;

	//set leastDifferenceValue to a high number
	leastDifferenceValue = 1000000;


	//for loop to go through the entire list of careers
	for( var i = 0; i < careerList.length; i++){

		//
		cognitiveDifference = Math.abs(cognitiveV - careerList[i].cognitiveValue); 
		physicalDifference = Math.abs(physicalV - careerList[i].physicalValue); 
		psychomotorDifference = Math.abs(psychomotorV - careerList[i].psychomotorValue);
		sensoryDifference = Math.abs(sensoryV - careerList[i].sensoryValue);



		totalDifference = cognitiveDifference + physicalDifference + psychomotorDifference + sensoryDifference;


		//alert("for loop: " + i + "\ncog: "+ cognitiveDifference + "\nphys" + physicalDifference + "\npsych" + psychomotorDifference + "\nSens" + sensoryDifference);


		
		if(leastDifferenceValue > totalDifference){
			leastDifferenceValue = totalDifference;
			bestCareer = careerList[i];	
		}
	}
	
	alert(bestCareer.industry);

	cognitiveDifference = 0;
	physicalDifference = 0;
	psychomotorDifference = 0;
	sensoryDifference = 0;

	cognitiveValue = 0;
	physicalValue  = 0;
	psychomotorValue  = 0;
	sensoryValue  = 0;
	return bestCareer; 
} 

function redirectTest(){
	window.location.href = "/assessment.html";
}







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


		calcTop3(eval(savedCareer));

			//displays industry
		document.getElementById("industryTitle").innerHTML = "The industry that fits you most: ";
		document.getElementById("industry").innerHTML = top3Careers[1].industry;
	
		//display career info
		document.getElementById("resultsTitle1").innerHTML = "";
		document.getElementById("resultsCareer1").innerHTML = top3Careers[0].careerName;
		document.getElementById("careerDescription1").innerHTML = top3Careers[0].description;
		document.careerImage1.src= top3Careers[0].imageLink;
	
		document.getElementById("resultsTitle2").innerHTML = "";
		document.getElementById("resultsCareer2").innerHTML = top3Careers[1].careerName;
		document.getElementById("careerDescription2").innerHTML = top3Careers[1].description;
		document.careerImage2.src= top3Careers[1].imageLink;
	
		document.getElementById("resultsTitle3").innerHTML = "";
		document.getElementById("resultsCareer3").innerHTML = top3Careers[2].careerName;
		document.getElementById("careerDescription3").innerHTML = top3Careers[2].description;
		document.careerImage3.src= top3Careers[2].imageLink;


	  }
  }

function viewCareers(){
	var displayResults = document.getElementById("careers").value;

	document.getElementById("resultsCareer2").innerHTML = this[displayResults].careerName;
	document.getElementById("careerDescription2").innerHTML = this[displayResults].description;
	document.careerImage2.src= this[displayResults].imageLink;

}

//cookie consent banner
if (window.location.href.match('index.html')){
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
}


//map info
var map;

//functions to retrieve longitude and latitude of user and store in cookies
function getLocation() {
	if (navigator.geolocation) {
	  navigator.geolocation.getCurrentPosition(showPosition);
	} else { 
	  x.innerHTML = "Geolocation is not supported by this browser.";
	}
  }

  function showPosition(position) {
	latitude = position.coords.latitude;
	longitude = position.coords.longitude;

	lat = latitude.toString();
	long = longitude.toString();
	setCookie("longitude", long, 10);
	setCookie("latitude", lat, 10);
	alert("Location Accepted");
  }

  function accept(){
	getLocation();
  }
function loadMap(){

	window.location.pathname = '/mapDisplay.html';
}

  

var map;
var gLat = 35.227085;
var gLong = -80.843124;

//checks user location in cookies when page loads, otherwise loads center of Charlotte

if(window.location.href.match('mapDisplay.html'))
{
	if(getCookie("longitude" == ""))
	{
	}
	else{
		var stringLong = getCookie("longitude");
		var stringLat = getCookie("latitude");
		gLat = parseInt(stringLat);
		gLong = parseInt(stringLong);
	}
}


//google maps api function
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
  center: {lat: gLat, lng: gLong},
  zoom: 13,
  mapId: '4c45ae6291c3df1f'
  });
}

//function that add values based off of answers
function grade1(){
	if(q1a.checked == true){
		addCognitive(10000);
		addPhysical(10000);
		addPsychomotor(10000);
		addSensory(10000);
	}
	else if(q1b.checked == true){
		addCognitive(20000);
		addPhysical(20000);
		addPsychomotor(20000);
		addSensory(20000);
	}
	else if(q1c.checked == true){
		addCognitive(40);
		addPhysical(0);
		addPsychomotor(20);
		addSensory(40);
	}
	else if(q1d.checked == true){
		addCognitive(80);
		addPhysical(0);
		addPsychomotor(30);
		addSensory(80);
	}
	else if(q1e.checked == true){
		addCognitive(100);
		addPhysical(0);
		addPsychomotor(40);
		addSensory(100);
	}
}
function grade2(){
	if(q2a.checked == true){
		addCognitive(0);
		addPhysical(0);
		addPsychomotor(0);
		addSensory(100);
	}
	else if(q2b.checked == true){
		addCognitive(50);
		addPhysical(0);
		addPsychomotor(0);
		addSensory(80);
	}
	else if(q2c.checked == true){
		addCognitive(100);
		addPhysical(0);
		addPsychomotor(0);
		addSensory(60);
	}
	else if(q2d.checked == true){
		addCognitive(150);
		addPhysical(0);
		addPsychomotor(0);
		addSensory(40);
	}
	else if(q2e.checked == true){
		addCognitive(200);
		addPhysical(0);
		addPsychomotor(0);
		addSensory(0);
	}
}
function grade3(){
	if(q3a.checked == true){
		addCognitive(50);
		addPhysical(0);
		addPsychomotor(0);
		addSensory(0);
	}
	else if(q3b.checked == true){
		addCognitive(40);
		addPhysical(20);
		addPsychomotor(4);
		addSensory(20);
	}
	else if(q3c.checked == true){
		addCognitive(30);
		addPhysical(40);
		addPsychomotor(30);
		addSensory(40);
	}
	else if(q3d.checked == true){
		addCognitive(20);
		addPhysical(80);
		addPsychomotor(20);
		addSensory(80);
	}
	else if(q3e.checked == true){
		addCognitive(0);
		addPhysical(100);
		addPsychomotor(0);
		addSensory(100);
	}
}

function grade4(){
	if(q4a.checked == true){
		addCognitive(100);
		addPhysical(0);
		addPsychomotor(0);
		addSensory(50);
	}
	else if(q4b.checked == true){
		addCognitive(80);
		addPhysical(0);
		addPsychomotor(0);
		addSensory(40);
	}
	else if(q4c.checked == true){
		addCognitive(40);
		addPhysical(0);
		addPsychomotor(0);
		addSensory(30);
	}
	else if(q4d.checked == true){
		addCognitive(20);
		addPhysical(0);
		addPsychomotor(0);
		addSensory(20);
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
		addPhysical(50);
		addPsychomotor(0);
		addSensory(0);
	}
	else if(q5c.checked == true){
		addCognitive(0);
		addPhysical(100);
		addPsychomotor(40);
		addSensory(0);
	}
	else if(q5d.checked == true){
		addCognitive(0);
		addPhysical(150);
		addPsychomotor(80);
		addSensory(0);
	}
	else if(q5e.checked == true){
		addCognitive(0);
		addPhysical(200);
		addPsychomotor(100);
		addSensory(0);
	}
}

function grade6(){
	if(q6a.checked == true){
		addCognitive(0);
		addPhysical(0);
		addPsychomotor(0);
		addSensory(0);
	}
	else if(q6b.checked == true){
		addCognitive(0);
		addPhysical(0);
		addPsychomotor(50);
		addSensory(0);
	}
	else if(q6c.checked == true){
		addCognitive(0);
		addPhysical(0);
		addPsychomotor(100);
		addSensory(40);
	}
	else if(q6d.checked == true){
		addCognitive(0);
		addPhysical(0);
		addPsychomotor(150);
		addSensory(80);
	}
	else if(q6e.checked == true){
		addCognitive(0);
		addPhysical(0);
		addPsychomotor(200);
		addSensory(100);
	}
}

function grade7(){
	if(q7a.checked == true){
		addCognitive(0);
		addPhysical(0);
		addPsychomotor(0);
		addSensory(0);
	}
	else if(q7b.checked == true){
		addCognitive(0);
		addPhysical(0);
		addPsychomotor(0);
		addSensory(0);
	}
	else if(q7c.checked == true){
		addCognitive(0);
		addPhysical(0);
		addPsychomotor(0);
		addSensory(100);
	}
	else if(q7d.checked == true){
		addCognitive(0);
		addPhysical(0);
		addPsychomotor(50);
		addSensory(150);
	}
	else if(q7e.checked == true){
		addCognitive(0);
		addPhysical(0);
		addPsychomotor(100);
		addSensory(200);
	}
}

function grade7(){
	if(q7a.checked == true){
		addCognitive(0);
		addPhysical(0);
		addPsychomotor(0);
		addSensory(0);
	}
	else if(q7b.checked == true){
		addCognitive(0);
		addPhysical(0);
		addPsychomotor(0);
		addSensory(0);
	}
	else if(q7c.checked == true){
		addCognitive(0);
		addPhysical(0);
		addPsychomotor(0);
		addSensory(0);
	}
	else if(q7d.checked == true){
		addCognitive(0);
		addPhysical(0);
		addPsychomotor(0);
		addSensory(0);
	}
	else if(q7e.checked == true){
		addCognitive(0);
		addPhysical(0);
		addPsychomotor(0);
		addSensory(0);
	}
}

function grade8(){
	if(q8a.checked == true){
		addCognitive(0);
		addPhysical(0);
		addPsychomotor(0);
		addSensory(0);
	}
	else if(q8b.checked == true){
		addCognitive(0);
		addPhysical(0);
		addPsychomotor(0);
		addSensory(0);
	}
	else if(q8c.checked == true){
		addCognitive(0);
		addPhysical(0);
		addPsychomotor(0);
		addSensory(0);
	}
	else if(q8d.checked == true){
		addCognitive(0);
		addPhysical(0);
		addPsychomotor(0);
		addSensory(0);
	}
	else if(q8e.checked == true){
		addCognitive(0);
		addPhysical(0);
		addPsychomotor(0);
		addSensory(0);
	}
}

function grade9(){
	if(q9a.checked == true){
		addCognitive(0);
		addPhysical(0);
		addPsychomotor(0);
		addSensory(0);
	}
	else if(q9b.checked == true){
		addCognitive(0);
		addPhysical(0);
		addPsychomotor(0);
		addSensory(0);
	}
	else if(q9c.checked == true){
		addCognitive(0);
		addPhysical(0);
		addPsychomotor(0);
		addSensory(0);
	}
	else if(q9d.checked == true){
		addCognitive(0);
		addPhysical(0);
		addPsychomotor(0);
		addSensory(0);
	}
	else if(q9e.checked == true){
		addCognitive(0);
		addPhysical(0);
		addPsychomotor(0);
		addSensory(0);
	}
}

function grade10(){
	if(q10a.checked == true){
		addCognitive(0);
		addPhysical(0);
		addPsychomotor(0);
		addSensory(0);
	}
	else if(q10b.checked == true){
		addCognitive(0);
		addPhysical(0);
		addPsychomotor(0);
		addSensory(0);
	}
	else if(q10c.checked == true){
		addCognitive(0);
		addPhysical(0);
		addPsychomotor(0);
		addSensory(0);
	}
	else if(q10d.checked == true){
		addCognitive(0);
		addPhysical(0);
		addPsychomotor(0);
		addSensory(0);
	}
	else if(q10e.checked == true){
		addCognitive(0);
		addPhysical(0);
		addPsychomotor(0);
		addSensory(0);
	}
}

function grade10(){
	if(q10a.checked == true){
		addCognitive(0);
		addPhysical(0);
		addPsychomotor(0);
		addSensory(0);
	}
	else if(q10b.checked == true){
		addCognitive(0);
		addPhysical(0);
		addPsychomotor(0);
		addSensory(0);
	}
	else if(q10c.checked == true){
		addCognitive(0);
		addPhysical(0);
		addPsychomotor(0);
		addSensory(0);
	}
	else if(q10d.checked == true){
		addCognitive(0);
		addPhysical(0);
		addPsychomotor(0);
		addSensory(0);
	}
	else if(q10e.checked == true){
		addCognitive(0);
		addPhysical(0);
		addPsychomotor(0);
		addSensory(0);
	}
}

function grade11(){
	if(q11a.checked == true){
		addCognitive(0);
		addPhysical(0);
		addPsychomotor(0);
		addSensory(0);
	}
	else if(q11b.checked == true){
		addCognitive(0);
		addPhysical(0);
		addPsychomotor(0);
		addSensory(0);
	}
	else if(q11c.checked == true){
		addCognitive(0);
		addPhysical(0);
		addPsychomotor(0);
		addSensory(0);
	}
	else if(q11d.checked == true){
		addCognitive(0);
		addPhysical(0);
		addPsychomotor(0);
		addSensory(0);
	}
	else if(q11e.checked == true){
		addCognitive(0);
		addPhysical(0);
		addPsychomotor(0);
		addSensory(0);
	}
}

function grade12(){
	if(q12a.checked == true){
		addCognitive(0);
		addPhysical(0);
		addPsychomotor(0);
		addSensory(0);
	}
	else if(q12b.checked == true){
		addCognitive(0);
		addPhysical(0);
		addPsychomotor(0);
		addSensory(0);
	}
	else if(q12c.checked == true){
		addCognitive(0);
		addPhysical(0);
		addPsychomotor(0);
		addSensory(0);
	}
	else if(q12d.checked == true){
		addCognitive(0);
		addPhysical(0);
		addPsychomotor(0);
		addSensory(0);
	}
	else if(q12e.checked == true){
		addCognitive(0);
		addPhysical(0);
		addPsychomotor(0);
		addSensory(0);
	}
}

function grade13(){
	if(q13a.checked == true){
		addCognitive(0);
		addPhysical(0);
		addPsychomotor(0);
		addSensory(0);
	}
	else if(q13b.checked == true){
		addCognitive(0);
		addPhysical(0);
		addPsychomotor(0);
		addSensory(0);
	}
	else if(q13c.checked == true){
		addCognitive(0);
		addPhysical(0);
		addPsychomotor(0);
		addSensory(0);
	}
	else if(q13d.checked == true){
		addCognitive(0);
		addPhysical(0);
		addPsychomotor(0);
		addSensory(0);
	}
	else if(q13e.checked == true){
		addCognitive(0);
		addPhysical(0);
		addPsychomotor(0);
		addSensory(0);
	}
}

function grade14(){
	if(q14a.checked == true){
		addCognitive(0);
		addPhysical(0);
		addPsychomotor(0);
		addSensory(0);
	}
	else if(q14b.checked == true){
		addCognitive(0);
		addPhysical(0);
		addPsychomotor(0);
		addSensory(0);
	}
	else if(q14c.checked == true){
		addCognitive(0);
		addPhysical(0);
		addPsychomotor(0);
		addSensory(0);
	}
	else if(q14d.checked == true){
		addCognitive(0);
		addPhysical(0);
		addPsychomotor(0);
		addSensory(0);
	}
	else if(q14e.checked == true){
		addCognitive(0);
		addPhysical(0);
		addPsychomotor(0);
		addSensory(0);
	}
}

function grade15(){
	if(q15a.checked == true){
		addCognitive(0);
		addPhysical(0);
		addPsychomotor(0);
		addSensory(0);
	}
	else if(q15b.checked == true){
		addCognitive(0);
		addPhysical(0);
		addPsychomotor(0);
		addSensory(0);
	}
	else if(q15c.checked == true){
		addCognitive(0);
		addPhysical(0);
		addPsychomotor(0);
		addSensory(0);
	}
	else if(q15d.checked == true){
		addCognitive(0);
		addPhysical(0);
		addPsychomotor(0);
		addSensory(0);
	}
	else if(q15e.checked == true){
		addCognitive(0);
		addPhysical(0);
		addPsychomotor(0);
		addSensory(0);

	}
}


var school_counselor = {
	industry		: "Education",
    career            : "school_counselor", 
    careerName        : "School Counselor",
    cognitiveValue    : 1000,
    physicalValue    : 200,
    psychomotorValue: 400,
    sensoryValue    : 400,
    imageLink: 'img/schoolcounselor_feed.jpg',
    description: "School counselors foster academic, social, and life skills in students, which translate to academic and vocational success. They are also responsible for maintaining a student’s records in accordance with academic policies and regulations."     
};
 
var teacher_assistant = {
	industry		: "Education",
    career            : "teacher_assistant", 
    careerName        : "Teacher Assistant",
    cognitiveValue    : 1000,
    physicalValue    : 200,
    psychomotorValue: 400,
    sensoryValue    : 400,
    imageLink: 'img/teacherassistant_feed_0.jpg',
    description: "Teachers have incredibly busy jobs, which is why many need help. A Teacher Assistant helps licensed teachers in a variety of ways. They act as classroom rule enforcers, modeling proper social skills while ensuring students stay well-behaved and on-task. They lend a hand preparing classrooms, setting up equipment, and getting materials ready for an upcoming lesson. They observe students and offer tutoring assistance to individuals and small groups during activities, answering questions, or giving guidance as needed. "     
};
 
var music_director = {
	industry		: "Education",
    career            : "music_director", 
    careerName        : "Music Director",
    cognitiveValue    : 1000,
    physicalValue    : 200,
    psychomotorValue: 400,
    sensoryValue    : 400,
    imageLink: 'img/music20educator_feed.jpg',
    description: "Music teachers (postsecondary level) plan and execute lessons which instruct their pupils in playing an instrument, understanding music theory, and/or exploring music history. Additional responsibilities include organizing school concerts and directing student orchestras and choirs."     
};
 
var advert_acct_exec = {
	industry		: "Entertainment, Media & Sports",
    career            : "advert_acct_exec", 
    careerName        : "Advertising Account Executive",
    cognitiveValue    : 600,
    physicalValue    : 400,
    psychomotorValue: 400,
    sensoryValue    : 400,
    imageLink: 'img/Advertising20account.jpg',
    description: "Advertising account executives (AE) are the liaison between the client and the creative team to ensure the client's needs and goals are being met on every project. The AEs are the ones responsible for managing the relationship between the client and the advertising agency."     
};
 
var assistant_director = {
	industry		: "Entertainment, Media & Sports",
    career            : "assistant_director", 
    careerName        : "Assistant Director",
    cognitiveValue    : 600,
    physicalValue    : 400,
    psychomotorValue: 400,
    sensoryValue    : 400,
    imageLink: 'img/assistant20director_feed.jpg',
    description: "This is NOT the assistant to the director. Assistant Director (AD) is somewhat of a misnomer. The AD is usually hired by the producer, director, or unit production manager to make sure the director has all the elements in place to complete their vision while also ensuring that the principal photography (aka “shooting”) is completed on budget and in a timely, efficient and safe manner."     
};
 
var audio_engineer = {
	industry		: "Entertainment, Media & Sports",
    career            : "audio_engineer", 
    careerName        : "Audio Engineer",
    cognitiveValue    : 600,
    physicalValue    : 400,
    psychomotorValue: 400,
    sensoryValue    : 400,
    imageLink: 'img/Audio20Engineer_feed.jpg',
    description: "Audio engineering refers to a wide range of jobs, typically in the entertainment industry, that all involve setting up, operating and maintaining equipment utilized in working with sound to create a more polished or complex end product. Jobs under the audio engineer blanket can vary from music producers to post-production sound design for movies, but a key element of the job is being knowledgeable in a subject and personable enough to help bring out a creator’s best work."     
};
 
var architect = {
	industry		: "Architecture, Art & Design",
    career            : "architect", 
    careerName        : "Architect",
    cognitiveValue    : 10000,
    physicalValue    : 10000,
    psychomotorValue: 10000,
    sensoryValue    : 10000,
    imageLink: 'img/architect_feed.jpg',
    description: "Architects plan and design building and structures, such as private residences, office buildings, theaters, factories, hospitals, and museums."     
};
 
var art_director = {
	industry		: "Architecture, Art & Design",
    career            : "art_director", 
    careerName        : "Art Director",
    cognitiveValue    : 10000,
    physicalValue    : 10000,
    psychomotorValue: 10000,
    sensoryValue    : 10000,
    imageLink: 'img/artdirector_feed.jpg',
    description: "Art directors oversee the creation of visual material for advertisements, print publications, product packaging, film productions and other outlets. They may look over specific elements, such as design concepts, original or stock artwork, layouts and the stylistic components of written materials. Art directors also oversee the work of staff members, such as writer, designers, or artists. They may also create budgets and deadlines, collaborate with other departments like copywriting or production and communicate with clients over the course of a project."     
};
 
var film_editor = {
	industry		: "Architecture, Art & Design",
    career            : "film_editor", 
    careerName        : "Film Editor",
    cognitiveValue    : 10000,
    physicalValue    : 10000,
    psychomotorValue: 10000,
    sensoryValue    : 10000,
    imageLink: 'img/editor20film_feed.jpg',
    description: "Film/TV/Video editors edit moving images on film, video, or other media.  They may edit or synchronize soundtracks with images. They collaborate with producers and directors to create the final production."     
};
 
var ai_engineer = {
	industry		: "Computer & Information Technology",
    career            : "ai_engineer", 
    careerName        : "AI Engineer",
    cognitiveValue    : 1000,
    physicalValue    : 200,
    psychomotorValue: 500,
    sensoryValue    : 300,
    imageLink: 'img/ai_gladeo_feed.jpg',
    description: "Artificial Intelligence Specialists are at the forefront of this computer science movement aimed at teaching computers to think and engage with people in a human-y manner. Today, our devices use AI for speech recognition and to communicate with us as virtual assistants. AI recognizes our faces, voices, and fingerprints. It predicts and suggests, filters online search results, scans our emails for spam, translates languages, and operates machines. Most of us engage with this wondrous tech every day without thinking about it, or in some cases even realizing it. "     
};
 
var back_end_dev = {
	industry		: "Computer & Information Technology",
    career            : "back_end_dev", 
    careerName        : "Back End Developer",
    cognitiveValue    : 1000,
    physicalValue    : 200,
    psychomotorValue: 500,
    sensoryValue    : 300,
    imageLink: 'img/backenddeveloper_gladeo_feed.jpg',
    description: "Creating responsive, powerful websites that receive millions of views requires a team of skilled specialists. While Front-End Developers focus on interface with users, Back-End Developers are in charge of the unseen technical side of things — the servers, databases, and applications. These workers are the gurus behind the curtain who build site frameworks and collaborate with other team members to ensure everything integrates smoothly and functions as it should. "     
};
 
var cloud_engineer = {
	industry		: "Computer & Information Technology",
    career            : "cloud_engineer", 
    careerName        : "Cloud Engineer",
    cognitiveValue    : 1000,
    physicalValue    : 200,
    psychomotorValue: 500,
    sensoryValue    : 300,
    imageLink: 'img/cloudengineer_gladeo_feed.png',
    description: "Few things have shaken up the traditional IT world as much as cloud computing. Instead of companies and organizations relying on internal networks, they can simply use private computer resources accessed over the Internet. This saves them time and money, which is why ~94% of enterprises have already adopted it to some degree. Cloud Engineers manage cloud-based systems created by architects, whom they may collaborate with to identify external customer needs and offer improvement ideas or solutions to problems."     
};
 
var biomed_engineer = {
	industry		: "Engineering",
    career            : "biomed_engineer", 
    careerName        : "Biomedical Engineer",
    cognitiveValue    : 1200,
    physicalValue    : 200,
    psychomotorValue: 200,
    sensoryValue    : 500,
    imageLink: 'img/biomedicalengineer_gladeo_feed.jpg',
    description: "Biomedical Engineers work in a broad field that currently has a relatively small number of workers. Collaborating with scientists and chemists, they help make cutting-edge medical IT, devices, and equipment used in modern hospitals and clinics around the world. They also work on life-saving artificial organs and replacements for other parts of the human body such as knee joints. "     
};
 
var civil_engineer = {
	industry		: "Engineering",
    career            : "civil_engineer", 
    careerName        : "Civil Engineer",
    cognitiveValue    : 1200,
    physicalValue    : 200,
    psychomotorValue: 200,
    sensoryValue    : 500,
    imageLink: 'img/CivilEngineer_feed.jpg',
    description: "Civil engineers conceive, design, build, supervise, operate, construct, and maintain infrastructure projects and systems in the public and private sector, including roads, buildings, airports, tunnels, dams, bridges, and systems for water supply and sewage treatment."     
};
 
var electrical_engineer = {
	industry		: "Engineering",
    career            : "electrical_engineer", 
    careerName        : "Electrical Engineer",
    cognitiveValue    : 1200,
    physicalValue    : 200,
    psychomotorValue: 200,
    sensoryValue    : 500,
    imageLink: 'img/electriclaengineer_feed.jpg',
    description: "Electrical Engineering is considered one of the “newest” of all engineering fields, though it dates back to the early 19th century! Engineers in this field use physics and math principles related to electricity, electronics, and electromagnetism in order to work on existing equipment and develop new ideas for the future. Our entire modern age of lights, power, television, radio, computers, and mobile devices can be traced back to the efforts of Electrical Engineering pioneers like Tesla, Edison, Westinghouse, Marconi, and Farnsworth."     
};
var business_affairs = {
	industry		: "Legal",
    career            : "business_affairs", 
    careerName        : "Business Affairs In Entertainment",
    cognitiveValue    : 20000,
    physicalValue    : 20000,
    psychomotorValue: 20000,
    sensoryValue    : 20000,
    imageLink: 'img/director20of20business20affairs_gladeo_feed.jpg',
    description: "Develops and implements growth-oriented sales strategies for the indoor play business primarily in the Amusement, Attractions, and Themed Environment segments.  This position will focus on business development for the Soft Play brand, but could also include facilitating sales of other PlayPower brands to provide a turnkey package to target customers.  The Business Development Manager will be responsible for attaining specific growth plans to meet or exceed the sales targets established for the Soft Play brand."     
};
 
var legal_assistant = {
	industry		: "Legal",
    career            : "legal_assistant", 
    careerName        : "Legal Assistant",
    cognitiveValue    : 20000,
    physicalValue    : 20000,
    psychomotorValue: 20000,
    sensoryValue    : 20000,
    imageLink: 'img/legal.jpg',
    description: "A paralegal often works in a legal office to support the lawyer team. Their role is supportive. Paralegals do much of the legwork in preparing the important documents a lawyer might need. They often need to research law and support the lawyer’s role in at a trial, hearing, or meeting. This involves meeting with the lawyer to determine the best way to approach a client’s needs. The paralegal will then research laws and precedent (similar cases and their decisions) for the lawyer."     
};
 
var patent_attorney = {
	industry		: "Legal",
    career            : "patent_attorney", 
    careerName        : "Patent Attorney",
    cognitiveValue    : 20000,
    physicalValue    : 20000,
    psychomotorValue: 20000,
    sensoryValue    : 20000,
    imageLink: 'img/patent20attorney_feed.jpg',
    description: "Patent attorneys obtain and/or renew patents on behalf of  inventors and companies. They also advise and represent clients on patent infringement issues and other areas related to intellectual property rights."     
};


var social_worker = {
	industry		: "Community & Social Service",
    career            : "social_worker", 
    careerName        : "Social Worker",
    cognitiveValue    : 300,
    physicalValue    : 700,
    psychomotorValue: 600,
    sensoryValue    : 400,
    imageLink: 'img/socialworker.jpg',
    description: "Social workers assists people within a wide range of settings, from mental health clinics to schools and hospitals. they can work with individuals or within large communities or organizations and assist with a variety of ailments from addiction treatment to chronic illness and child support services"     
};
var sanitation = {
	industry		: "Community & Social Service",
    career            : "sanitation", 
    careerName        : "Sanitation",
    cognitiveValue    : 300,
    physicalValue    : 700,
    psychomotorValue: 600,
    sensoryValue    : 400,
    imageLink: 'img/sanitation.jpg',
    description: "Sanitation workers are responsible for cleaning residences and businesses. They're often contracted to private waste disposal companies to collect garbage and moving it to disposal areas, like landfills"     
};

var therapist = {
	industry		: "Community & Social Service",
    career            : "therapist", 
    careerName        : "Therapist",
    cognitiveValue    : 300,
    physicalValue    : 700,
    psychomotorValue: 600,
    sensoryValue    : 400,
    imageLink: 'img/therapist.jpg',
    description: "Therapists, are licensed mental health professionals who specialize in helping clients develop better cognitive and emotional skills, reduce symptoms of mental illness, and cope with various life challenges to improve their lives."     
};

var campaign_manager = {
	industry		: "Government & Public Service",
    career            : "campaign_manager", 
    careerName        : "Campaign Manager",
    cognitiveValue    : 700,
    physicalValue    : 400,
    psychomotorValue: 300,
    sensoryValue    : 600,
    imageLink: 'img/campaign.jpg',
    description: "A Campaign Manager is an individual responsible for coordinating another individual’s attempt to win a political office. They work with the candidate to help fundraise, lead advertising, check polling, convince people to vote, and other activities which directly support the candidate. There are times they will speak to the press in lieu of the candidate."     
};

var legislative_aide = {
	industry		: "Government & Public Service",
    career            : "legislative_aide", 
    careerName        : "Legislative Aide",
    cognitiveValue    : 700,
    physicalValue    : 400,
    psychomotorValue: 300,
    sensoryValue    : 600,
    imageLink: 'img/aide.jpg',
    description: "A Legislative Aide provides support to legislators or other elected officials. This can involve hearing constituent concerns, helping draft speeches or legislation, and preparing reports for the official. They also can be responsible for helping the official with his or her schedule."     
};


var political_media_strategist = {
	industry		: "Government & Public Service",
    career            : "political_media_strategist", 
    careerName        : "Political Media Strategists",
    cognitiveValue    : 700,
    physicalValue    : 400,
    psychomotorValue: 300,
    sensoryValue    : 600,
    imageLink: 'img/politicalmediaspecialist.jpg',
    description: "Political Media Strategists lead the planning of how best for a campaign to use television, radio, social media, and other forms of media to help influence voters. They are especially influential as social media has come to dominate the landscape. Job responsibilities are specific to the type of election."     
};

var ux_designer = {
	industry		: "Internet",
    career            : "ux_designer", 
    careerName        : "User Experience (UX) Designer",
    cognitiveValue    : 700,
    physicalValue    : 100,
    psychomotorValue: 300,
    sensoryValue    : 900,
    imageLink: 'img/ux.jpeg',
    description: "A UX Designer works on websites, applications, intranets, online communities or software and they encompass one or more of the following elements (depending on the company): Information Architecture: Designs the structure, the “blueprint” of the site (i.e. How the pages group together, navigation) that support the objectives of the system they are designing. What is the flow of users through our site? How does the software help the user catalog their information? How is that presented back to the user?"     
};


var information_technology = {
	industry		: "Internet",
    career            : "information_technology", 
    careerName        : "Information Technology",
    cognitiveValue    : 700,
    physicalValue    : 100,
    psychomotorValue: 300,
    sensoryValue    : 900,
    imageLink: 'img/infotech.jpg',
    description: "Information technology (IT) is the use of any computers, storage, networking and other physical devices, infrastructure and processes to create, process, store, secure and exchange all forms of electronic data. Typically, IT is used in the context of enterprise operations as opposed to personal or entertainment technologies."     
};

var software_developer = {
	industry		: "Internet",
    career            : "software_developer", 
    careerName        : "Software Developer",
    cognitiveValue    : 700,
    physicalValue    : 100,
    psychomotorValue: 300,
    sensoryValue    : 900,
    imageLink: 'img/software.jpg',
    description: "Software developers are the creative minds behind computer programs. Some develop the applications that allow people to do specific tasks on a computer or another device. Others develop the underlying systems that run the devices or that control networks."     
};

var hr_specialist = {
	industry		: "Human Resources",
    career            : "hr_specialist", 
    careerName        : "Human Resources Specialist",
    cognitiveValue    : 500,
    physicalValue    : 500,
    psychomotorValue: 500,
    sensoryValue    : 500,
    imageLink: 'img/hrspecialist.jpg',
    description: "Human resources specialists recruit, screen, interview, and place workers in a company or organization. They also may handle human resources work in a variety of other areas, such as employee relations, payroll and benefits, and training."     
};

var project_manager = {
	industry		: "Human Resources",
    career            : "project_manager", 
    careerName        : "Project Manager",
    cognitiveValue    : 500,
    physicalValue    : 500,
    psychomotorValue: 500,
    sensoryValue    : 500,
    imageLink: 'img/projectManager.jpg',
    description: "Project managers play the lead role in planning, executing, monitoring, controlling and closing projects. They are accountable for the entire project scope, project team, resources, and the success or failure of the project."     
};

var social_media_specialist = {
	industry		: "Human Resources",
    career            : "social_media_specialist", 
    careerName        : "Social Media Specialist",
    cognitiveValue    : 500,
    physicalValue    : 500,
    psychomotorValue: 500,
    sensoryValue    : 500,
    imageLink: 'img/socialMedia.jpeg',
    description: "Social media specialists work on the overall social media strategies for a business or organization. They communicate with the public through social media platforms such as Facebook, Twitter and Instagram. Solving customer service issues and promoting their employer’s brand online are all part of the day to day work of a social media specialist."     
};

var mason = {
	industry		: "Construction & Skilled Trades",
    career            : "mason", 
    careerName        : "Mason",
    cognitiveValue    : 0,
    physicalValue    : 1000,
    psychomotorValue: 0,
    sensoryValue    : 0,
    imageLink: 'img/mason.jpg',
    description: "A mason uses bricks, concrete blocks, or natural stones to build structures that include walls, walkways, fences, and chimneys. Depending on the building material in which they specialize, these workers might be called brick masons, block masons, or stonemasons."     
};

var carpenter = {
	industry		: "Construction & Skilled Trades",
    career            : "carpenter", 
    careerName        : "Carpenter",
    cognitiveValue    : 0,
    physicalValue    : 1000,
    psychomotorValue: 0,
    sensoryValue    : 0,
    imageLink: 'img/carpenter.jpg',
    description: "Carpenters are skilled craftsmen who work in the construction and cabinet making industry. They fabricate all sorts of wood constructions; from entire frameworks of buildings, to custom kitchens or ornate details on wood trim."     
};

var electrician = {
	industry		: "Construction & Skilled Trades",
    career            : "electrician", 
    careerName        : "Electrician",
    cognitiveValue    : 0,
    physicalValue    : 1000,
    psychomotorValue: 0,
    sensoryValue    : 0,
    imageLink: 'img/electrician.jpg',
    description: "Electricians install and maintain electrical systems in homes, businesses, and factories."     
};

var pharmacist = {
	industry		: "Healthcare",
    career            : "pharmacist", 
    careerName        : "Pharmacist",
    cognitiveValue    : 1000,
    physicalValue    : 400,
    psychomotorValue: 500,
    sensoryValue    : 100,
    imageLink: 'img/pharmacist.jpg',
    description: "An Epidemiologist is a public health professional who helps stop the spread of disease or other negative health outcomes. They do this by researching specific populations. By communicating their findings to public officials, they help determine public policy for preventing disease."     
};

var dentist = {
	industry		: "Healthcare",
    career            : "dentist", 
    careerName        : "Dentist",
    cognitiveValue    : 1000,
    physicalValue    : 400,
    psychomotorValue: 500,
    sensoryValue    : 100,
    imageLink: 'img/dentist.jpg',
    description: "A dentist is a type of doctor responsible for the health of teeth and gums. They work to help patients prevent decay in the mouth, as well as diagnosing and treating oral disease. They may also help fit dental appliances and refer patients to other oral doctors for a variety of problems."     
};
var epidemiologist = {
	industry		: "Healthcare",
    career            : "epidemiologist", 
    careerName        : "Epidemiologist",
    cognitiveValue    : 1000,
    physicalValue    : 400,
    psychomotorValue: 500,
    sensoryValue    : 100,
    imageLink: 'img/epidemiologist.jpg',
    description: "An Epidemiologist is a public health professional who helps stop the spread of disease or other negative health outcomes. They do this by researching specific populations. By communicating their findings to public officials, they help determine public policy for preventing disease."     
};


var careerList = [school_counselor, teacher_assistant, music_director, advert_acct_exec, assistant_director, audio_engineer, architect, art_director, film_editor, ai_engineer, back_end_dev, cloud_engineer, biomed_engineer, civil_engineer, electrical_engineer, business_affairs, legal_assistant, patent_attorney, social_worker, sanitation, therapist, campaign_manager, legislative_aide, political_media_strategist, ux_designer, information_technology, software_developer, hr_specialist, project_manager, social_media_specialist, mason, carpenter, electrician, pharmacist, dentist, epidemiologist];
