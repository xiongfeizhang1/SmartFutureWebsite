

//variable that counts correct answers
var inductiveValue = 0;
var abstractValue = 0;
var logicalValue = 0;


//functions that add values to inductive, abstract, and logical
function addInductive( amount)
{
	inductiveValue += amount;
}
function addAbstract( amount)
{
	abstractValue += amount;
}
function addLogical( amount)
{
	logicalValue +=  amount;
}


//reset correct answers to 0 whenever they load the quiz page
 if (window.location.href.match('assessment.html')){

	inductiveValue = 0;
	abstractValue = 0;
	logicalValue = 0;
 }

//function that add values based off of answers
function grade1(){
	if(q1a.checked == true){
		addLogical(0);
		addAbstract(0);
		addInductive(10);
	}
	else if(q1b.checked == true){
		addLogical(5);
		addAbstract(5);
		addInductive(10);
	}
	else if(q1c.checked == true){
		addLogical(5);
		addAbstract(5);
		addInductive(5);
	}
	else if(q1d.checked == true){
		addLogical(5);
		addAbstract(5);
		addInductive(0);
	}
	else if(q1e.checked == true){
		addLogical(0);
		addAbstract(10);
		addInductive(0);
	}
}
function grade2(){
	if(q2a.checked == true){
		addLogical(0);
		addAbstract(10);
		addInductive(5);
	}
	else if(q2b.checked == true){
		addLogical(5);
		addAbstract(10);
		addInductive(5);
	}
	else if(q2c.checked == true){
		addLogical(5);
		addAbstract(5);
		addInductive(5);
	}
	else if(q2d.checked == true){
		addLogical(10);
		addAbstract(5);
		addInductive(10);
	}
	else if(q2e.checked == true){
		addLogical(15);
		addAbstract(5);
		addInductive(10);
	}
}
function grade3(){
	if(q3a.checked == true){
		addLogical(10);
		addAbstract(0);
		addInductive(5);
	}
	else if(q3b.checked == true){
		addLogical(5);
		addAbstract(5);
		addInductive(5);
	}
	else if(q3c.checked == true){
		addLogical(5);
		addAbstract(5);
		addInductive(5);
	}
	else if(q3d.checked == true){
		addLogical(0);
		addAbstract(10);
		addInductive(5);
	}
	else if(q3e.checked == true){
		addLogical(0);
		addAbstract(10);
		addInductive(5);
	}
}

function grade4(){
	if(q4a.checked == true){
		addLogical(0);
		addAbstract(10);
		addInductive(0);
	}
	else if(q4b.checked == true){
		addLogical(0);
		addAbstract(5);
		addInductive(5);
	}
	else if(q4c.checked == true){
		addLogical(10);
		addAbstract(5);
		addInductive(5);
	}
	else if(q4d.checked == true){
		addLogical(10);
		addAbstract(0);
		addInductive(5);
	}
	else if(q4e.checked == true){
		addLogical(15);
		addAbstract(0);
		addInductive(10);
	}
}
function grade5(){
	if(q5a.checked == true){
		addLogical(0);
		addAbstract(10);
		addInductive(5);
	}
	else if(q5b.checked == true){
		addLogical(0);
		addAbstract(5);
		addInductive(5);
	}
	else if(q5c.checked == true){
		addLogical(10);
		addAbstract(5);
		addInductive(5);
	}
	else if(q5d.checked == true){
		addLogical(10);
		addAbstract(0);
		addInductive(5);
	}
	else if(q5e.checked == true){
		addLogical(15);
		addAbstract(0);
		addInductive(10);
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
	//alert("inductive " + inductiveValue + "\nabstract: " + abstractValue + "\nlogical: " + logicalValue);
	var bestCareer = calculateBestCareer(inductiveValue, abstractValue, logicalValue);
	
	//hides questions 
	document.getElementById("listQuestions").style.display = "none";


	//display career info

	document.getElementById("resultsTitle").innerHTML = "You seem fit to become a : ";
	document.getElementById("resultsCareer").innerHTML = bestCareer.careerName;
	document.getElementsByClassName("quizButtons")[0].style.visibility = 'hidden';
	document.getElementById("careerDescription").innerHTML = bestCareer.description;
	document.careerImage.src= bestCareer.imageLink;

}


function calculateBestCareer(  inductiveV, abstractV, logicalV){

	var totalDifference, 
	abstractDifference, 
	inductiveDifference, 
	logicalDifference, 
	leastDifferenceValue, 

	//counter for current best career
	bestCareer;

	//set leastDifferenceValue to a high number
	leastDifferenceValue = 10000;


	//for loop to go through the entire list of careers

	for( var i = 0; i < careerList.length; i++){
		inductiveDifference = Math.abs(inductiveV - careerList[i].inductiveValue); 
		abstractDifference = Math.abs(abstractV - careerList[i].abstractValue);
		logicalDifference = Math.abs(logicalV - careerList[i].logicalValue);
		totalDifference = abstractDifference + inductiveDifference + logicalDifference;

		if(leastDifferenceValue > totalDifference){
			leastDifferenceValue = totalDifference;
			bestCareer = careerList[i];	
		}
	}
	inductiveValue = 0;
	abstractValue = 0;
 	logicalValue = 0;
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
	careerName		: "Mechanic",
	inductiveValue	: 30,
	abstractValue	: 15,
	logicalValue	: 50,
	imageLink: 'img/mechanic.jpg',
	description: " Mechanics are professionals known for inspecting, repairing, and performing high level maintenance on machines and vehicles. Mechanics often practice problem solving skills, working in teams, and thrive in environments with good communication."	 
};

var putech = {
	careerName		: "Power Utility Tech",
	inductiveValue	: 30,
	abstractValue	: 30,
	logicalValue	: 30,
	imageLink: 'img/putech.jpg',
	description: "Power Utility technicians monitor energy output for utility companies. Their tasks vary from regulating energy distribution and operating power equipment to measuring power flow. Utility Technicians practice critical thinking and working in small groups while traveling to different locations of the city daily."	 
};

var mason = {
	careerName		: "Mason",
	inductiveValue	: 35,
	abstractValue	: 20,
	logicalValue	: 40,
	imageLink: 'img/mason.jpg',
	description: "Masons are a type of construction worker that are responsible for building structures such as walkways, chimneys, and etc. They are expected to carry heavy objects as well as restore old and damaged structures. Since safety in the work environment is their main concern, they must carefully plan out everything before physically following through their plan."	 
};

var photographer = {
	careerName		: "Photographer",
	inductiveValue	: 20,
	abstractValue	: 40,
	logicalValue	: 20,
	imageLink: 'img/photographer.jpg',
	description: "Photographers are often free lance workers hired by contractors to take professional photos of various events, from sports, to celebrations. They can also  creating their own art through photography"
};

var teacher = {
	careerName		: "Teacher",
	inductiveValue	: 35,
	abstractValue	: 15,
	logicalValue	: 50,
	imageLink: 'img/teacher.jpg',
	description: "Teachers are leaders who specialize in communicating hard topics to students in an easy to understand way by using examples. They must also be good listeners to understand the problems or requests students might have."	 
};

var nurse = { 
	careerName		: "Nurse",
	inductiveValue	: 25,
	abstractValue	: 15,
	logicalValue	: 35,
	imageLink: 'img/nurse.jpg',
	description: "Nurses oversee doctors by assisting them and the patients that are hospitalized. They must have great communication skills while also being able to follow required protocol."	 
};

var electrician = {
	careerName		: "Electrician",
	inductiveValue	: 25,
	abstractValue	: 40,
	logicalValue	: 20,
	imageLink: 'img/electrician.jpg',
	description: "Electricians oversee installing, and maintaining, and repairing electrical wiring, any equipment, and fixtures. They are great problem solvers by by using the many skills they have to create new solutions based on their current location."	 
};
var careerList = [mechanic, putech, mason, photographer, teacher, nurse, electrician];

