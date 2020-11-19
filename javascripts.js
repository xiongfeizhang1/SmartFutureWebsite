

//variable that counts correct answers
var inductiveValue = 0;
var abstractValue = 0;
var logicalValue = 0;


//functions that add values to inductive, abstract, and logical
function addInductive( amount)
{
	inductiveValue = inductiveValue + amount;
}
function addAbstract( amount)
{
	abstractValue = abstractValue + amount;
}
function addLogical( amount)
{
	logicalValue = logicalValue + amount;
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
	grade1();
	grade2();
	grade3();

	//temp pop up 

	alert("induct: " + inductiveValue + "\nabstract: " + abstractValue + "\nlogical: " + logicalValue + "\nResult: " + calculateBestCareer( inductiveValue, abstractValue, logicalValue));
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

	//for loop to go through the entire list of 
	for( var i = 0; i < careerList.size; i++){
		inductiveDifference = Math.abs(inductiveV - careerList[i].inductiveValue); 
		abstractDifference = Math.abs(abstractV - careerList[i].abstractValue);
		logicalDifference = Math.abs(logicalV - careerList[i].logicalValue);
		totalDifference = abstractDifference + inductiveDifference + logicalDifference;


		if(leastDifferenceValue > totalDifference){
			leastDifferenceValue = totalDifference;
			bestCareer = careerList[i].careerName;
			//alert("inside if statement " + bestCareer + "\n totalDifference " + totalDifference);
			
		}
	}
	return bestCareer;
} 


/*
var career = {
	name: "name",
	inductiveValue: 0,
	abstractValue: 0,
	logicalValue: 0,
}
*/

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
	abstractValue	: 30	 
};

var putech = {
	careerName		: "Power Utility Tech",
	inductiveValue	: 32,
	logicalValue	: 55,
	abstractValue	: 12	 
};

var mason = {
	careerName		: "Mason",
	inductiveValue	: 27,
	logicalValue	: 11,
	abstractValue	: 36	 
};

var carpenter = {
	careerName		: "Carpenter",
	inductiveValue	: 10,
	logicalValue	: 10,
	abstractValue	: 10	 
};

var construction = {
	careerName		: "Construction Worker",
	inductiveValue	: 22,
	logicalValue	: 11,
	abstractValue	: 51	 
};

var nurse = { 
	careerName		: "Nurse",
	inductiveValue	: 71,
	logicalValue	: 62,
	abstractValue	: 21	 
};

var electrician = {
	careerName		: "Electrician",
	inductiveValue	: 60,
	logicalValue	: 85,
	abstractValue	: 41	 
};

var careerList = [mechanic, putech, mason, carpenter, construction, nurse, electrician];

