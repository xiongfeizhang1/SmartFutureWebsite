

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

//function that check whether quiz answer input is correct 
function grade1(){
	if(q1a.checked == true){
		addInductive(00);
	}
	else if(q1b.checked == true){
		addInductive(10);
	}
	else if(q1c.checked == true){
		addInductive(20);
	}
	else if(q1d.checked == true){
		addInductive(30);
	}
	else if(q1e.checked == true){
		addInductive(40);
	}
}
function grade2(){
	if(q2a.checked == true){
		addAbstract(00);
	}
	else if(q2b.checked == true){
		addAbstract(10);
	}
	else if(q2c.checked == true){
		addAbstract(20);
	}
	else if(q2d.checked == true){
		addAbstract(30);
	}
	else if(q2e.checked == true){
		addAbstract(40);
	}
}
function grade3(){
	if(q3a.checked == true){
		addLogical(00);
	}
	else if(q3b.checked == true){
		addLogical(10);
	}
	else if(q3c.checked == true){
		addLogical(20);
	}
	else if(q3d.checked == true){
		addLogical(30);
	}
	else if(q3e.checked == true){
		addLogical(40);
	}
}


//grade function that runs all the others and outputs response
function grade(){
	//adds up all user result values
	grade1();
	grade2();
	grade3();
	
	//finds best career
	var bestCareer = calculateBestCareer(inductiveValue, abstractValue, logicalValue);

	//display career name and photo
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



/*
Cognitive Abilities influence the acquisition and application of knowledge in problem solving.
Physical Abilities influence strength, endurance, flexibility, balance and coordination.
Psychomotor Abilities influence the capacity to manipulate and control objects
Sensory Abilities influence visual, auditory and speech perception.
*/


var mechanic = {
	careerName		: "Mechanic",
	inductiveValue	: 30,
	logicalValue	: 30,
	abstractValue	: 30,
	imageLink: 'img/mechanic.jpg',
	description: "Description of career here"	 
};

var putech = {
	careerName		: "Power Utility Tech",
	inductiveValue	: 32,
	logicalValue	: 55,
	abstractValue	: 12,
	imageLink: 'img/putech.jpg',
	description: "Description of career here"	 
};

var mason = {
	careerName		: "Mason",
	inductiveValue	: 27,
	logicalValue	: 11,
	abstractValue	: 36,
	imageLink: 'img/mason.jpg',
	description: "Description of career here"	 
};

var carpenter = {
	careerName		: "Carpenter",
	inductiveValue	: 10,
	logicalValue	: 10,
	abstractValue	: 10,
	imageLink: 'img/carpenter.jpg',
	description: "Description of career here"	 
};

var construction = {
	careerName		: "Construction Worker",
	inductiveValue	: 22,
	logicalValue	: 11,
	abstractValue	: 51,
	imageLink: 'img/construction.jpg',
	description: "Description of career here"	 
};

var nurse = { 
	careerName		: "Nurse",
	inductiveValue	: 40,
	logicalValue	: 20,
	abstractValue	: 20,
	imageLink: 'img/nurse.jpg',
	description: "Description of career here"	 
};

var electrician = {
	careerName		: "Electrician",
	inductiveValue	: 10,
	logicalValue	: 30,
	abstractValue	: 10,
	imageLink: 'img/electrician.jpg',
	description: "Description of career here"	 
};
var careerList = [mechanic, putech, mason, carpenter, construction, nurse, electrician];

