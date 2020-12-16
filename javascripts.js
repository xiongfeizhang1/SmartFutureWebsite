





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

		if(bestCareer.industry = careerList[i].industry && counter < 3)
		{
			
			top3Careers[counter] = careerList[i];

			counter++;
		}
	}
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

var school_counselor = {
	industry		: "Education",
    career            : "school_counselor", 
    careerName        : "School Counselor",
    cognitiveValue    : 25,
    physicalValue    : 40,
    psychomotorValue: 20,
    sensoryValue    : 30,
    imageLink: 'img/schoolcounselor_feed.jpg',
    description: "School counselors foster academic, social, and life skills in students, which translate to academic and vocational success. They are also responsible for maintaining a student’s records in accordance with academic policies and regulations."     
};
 
var teacher_assistant = {
	industry		: "Education",
    career            : "teacher_assistant", 
    careerName        : "Teacher Assistant",
    cognitiveValue    : 25,
    physicalValue    : 40,
    psychomotorValue: 20,
    sensoryValue    : 30,
    imageLink: 'img/teacherassistant_feed_0.jpg',
    description: "Teachers have incredibly busy jobs, which is why many need help. A Teacher Assistant helps licensed teachers in a variety of ways. They act as classroom rule enforcers, modeling proper social skills while ensuring students stay well-behaved and on-task. They lend a hand preparing classrooms, setting up equipment, and getting materials ready for an upcoming lesson. They observe students and offer tutoring assistance to individuals and small groups during activities, answering questions, or giving guidance as needed. "     
};
 
var music_director = {
	industry		: "Education",
    career            : "music_director", 
    careerName        : "Music Director",
    cognitiveValue    : 25,
    physicalValue    : 40,
    psychomotorValue: 20,
    sensoryValue    : 30,
    imageLink: 'img/music20educator_feed.jpg',
    description: "Music teachers (postsecondary level) plan and execute lessons which instruct their pupils in playing an instrument, understanding music theory, and/or exploring music history. Additional responsibilities include organizing school concerts and directing student orchestras and choirs."     
};
 
var advert_acct_exec = {
	industry		: "Entertainment, Media & Sports",
    career            : "advert_acct_exec", 
    careerName        : "Advertising Account Executive",
    cognitiveValue    : 25,
    physicalValue    : 40,
    psychomotorValue: 20,
    sensoryValue    : 30,
    imageLink: 'img/Advertising20account.jpg',
    description: "Advertising account executives (AE) are the liaison between the client and the creative team to ensure the client's needs and goals are being met on every project. The AEs are the ones responsible for managing the relationship between the client and the advertising agency."     
};
 
var assistant_director = {
	industry		: "Entertainment, Media & Sports",
    career            : "assistant_director", 
    careerName        : "Assistant Director",
    cognitiveValue    : 25,
    physicalValue    : 40,
    psychomotorValue: 20,
    sensoryValue    : 30,
    imageLink: 'img/assistant20director_feed.jpg',
    description: "This is NOT the assistant to the director. Assistant Director (AD) is somewhat of a misnomer. The AD is usually hired by the producer, director, or unit production manager to make sure the director has all the elements in place to complete their vision while also ensuring that the principal photography (aka “shooting”) is completed on budget and in a timely, efficient and safe manner."     
};
 
var audio_engineer = {
	industry		: "Entertainment, Media & Sports",
    career            : "audio_engineer", 
    careerName        : "Audio Engineer",
    cognitiveValue    : 25,
    physicalValue    : 40,
    psychomotorValue: 20,
    sensoryValue    : 30,
    imageLink: 'img/Audio20Engineer_feed.jpg',
    description: "Audio engineering refers to a wide range of jobs, typically in the entertainment industry, that all involve setting up, operating and maintaining equipment utilized in working with sound to create a more polished or complex end product. Jobs under the audio engineer blanket can vary from music producers to post-production sound design for movies, but a key element of the job is being knowledgeable in a subject and personable enough to help bring out a creator’s best work."     
};
 
var architect = {
	industry		: "Architecture, Art & Design",
    career            : "architect", 
    careerName        : "Architect",
    cognitiveValue    : 25,
    physicalValue    : 40,
    psychomotorValue: 20,
    sensoryValue    : 30,
    imageLink: 'img/architect_feed.jpg',
    description: "Architects plan and design building and structures, such as private residences, office buildings, theaters, factories, hospitals, and museums."     
};
 
var art_director = {
	industry		: "Architecture, Art & Design",
    career            : "art_director", 
    careerName        : "Art Director",
    cognitiveValue    : 25,
    physicalValue    : 40,
    psychomotorValue: 20,
    sensoryValue    : 30,
    imageLink: 'img/artdirector_feed.jpg',
    description: "Art directors oversee the creation of visual material for advertisements, print publications, product packaging, film productions and other outlets. They may look over specific elements, such as design concepts, original or stock artwork, layouts and the stylistic components of written materials. Art directors also oversee the work of staff members, such as writer, designers, or artists. They may also create budgets and deadlines, collaborate with other departments like copywriting or production and communicate with clients over the course of a project."     
};
 
var film_editor = {
	industry		: "Architecture, Art & Design",
    career            : "film_editor", 
    careerName        : "Film Editor",
    cognitiveValue    : 25,
    physicalValue    : 40,
    psychomotorValue: 20,
    sensoryValue    : 30,
    imageLink: 'img/editor20film_feed.jpg',
    description: "Film/TV/Video editors edit moving images on film, video, or other media.  They may edit or synchronize soundtracks with images. They collaborate with producers and directors to create the final production."     
};
 
var ai_engineer = {
	industry		: "Computer & Information Technology",
    career            : "ai_engineer", 
    careerName        : "AI Engineer",
    cognitiveValue    : 25,
    physicalValue    : 40,
    psychomotorValue: 20,
    sensoryValue    : 30,
    imageLink: 'img/ai_gladeo_feed.jpg',
    description: "Artificial Intelligence Specialists are at the forefront of this computer science movement aimed at teaching computers to think and engage with people in a human-y manner. Today, our devices use AI for speech recognition and to communicate with us as virtual assistants. AI recognizes our faces, voices, and fingerprints. It predicts and suggests, filters online search results, scans our emails for spam, translates languages, and operates machines. Most of us engage with this wondrous tech every day without thinking about it, or in some cases even realizing it. "     
};
 
var back_end_dev = {
	industry		: "Computer & Information Technology",
    career            : "back_end_dev", 
    careerName        : "Back End Developer",
    cognitiveValue    : 25,
    physicalValue    : 40,
    psychomotorValue: 20,
    sensoryValue    : 30,
    imageLink: 'img/backenddeveloper_gladeo_feed.jpg',
    description: "Creating responsive, powerful websites that receive millions of views requires a team of skilled specialists. While Front-End Developers focus on interface with users, Back-End Developers are in charge of the unseen technical side of things — the servers, databases, and applications. These workers are the gurus behind the curtain who build site frameworks and collaborate with other team members to ensure everything integrates smoothly and functions as it should. "     
};
 
var cloud_engineer = {
	industry		: "Computer & Information Technology",
    career            : "cloud_engineer", 
    careerName        : "Cloud Engineer",
    cognitiveValue    : 25,
    physicalValue    : 40,
    psychomotorValue: 20,
    sensoryValue    : 30,
    imageLink: 'img/cloudengineer_gladeo_feed.png',
    description: "Few things have shaken up the traditional IT world as much as cloud computing. Instead of companies and organizations relying on internal networks, they can simply use private computer resources accessed over the Internet. This saves them time and money, which is why ~94% of enterprises have already adopted it to some degree. Cloud Engineers manage cloud-based systems created by architects, whom they may collaborate with to identify external customer needs and offer improvement ideas or solutions to problems."     
};
 
var biomed_engineer = {
	industry		: "Engineering",
    career            : "biomed_engineer", 
    careerName        : "Biomedical Engineer",
    cognitiveValue    : 25,
    physicalValue    : 40,
    psychomotorValue: 20,
    sensoryValue    : 30,
    imageLink: 'img/biomedicalengineer_gladeo_feed.jpg',
    description: "Biomedical Engineers work in a broad field that currently has a relatively small number of workers. Collaborating with scientists and chemists, they help make cutting-edge medical IT, devices, and equipment used in modern hospitals and clinics around the world. They also work on life-saving artificial organs and replacements for other parts of the human body such as knee joints. "     
};
 
var civil_engineer = {
	industry		: "Engineering",
    career            : "civil_engineer", 
    careerName        : "Civil Engineer",
    cognitiveValue    : 25,
    physicalValue    : 40,
    psychomotorValue: 20,
    sensoryValue    : 30,
    imageLink: 'img/CivilEngineer_feed.jpg',
    description: "Civil engineers conceive, design, build, supervise, operate, construct, and maintain infrastructure projects and systems in the public and private sector, including roads, buildings, airports, tunnels, dams, bridges, and systems for water supply and sewage treatment."     
};
 
var electrical_engineer = {
	industry		: "Engineering",
    career            : "electrical_engineer", 
    careerName        : "Electrical Engineer",
    cognitiveValue    : 25,
    physicalValue    : 40,
    psychomotorValue: 20,
    sensoryValue    : 30,
    imageLink: 'img/electriclaengineer_feed.jpg',
    description: "Electrical Engineering is considered one of the “newest” of all engineering fields, though it dates back to the early 19th century! Engineers in this field use physics and math principles related to electricity, electronics, and electromagnetism in order to work on existing equipment and develop new ideas for the future. Our entire modern age of lights, power, television, radio, computers, and mobile devices can be traced back to the efforts of Electrical Engineering pioneers like Tesla, Edison, Westinghouse, Marconi, and Farnsworth."     
};
var business_affairs = {
	industry		: "Legal",
    career            : "business_affairs", 
    careerName        : "Business Affairs In Entertainment",
    cognitiveValue    : 25,
    physicalValue    : 40,
    psychomotorValue: 20,
    sensoryValue    : 30,
    imageLink: 'img/director20of20business20affairs_gladeo_feed.jpg',
    description: "Develops and implements growth-oriented sales strategies for the indoor play business primarily in the Amusement, Attractions, and Themed Environment segments.  This position will focus on business development for the Soft Play brand, but could also include facilitating sales of other PlayPower brands to provide a turnkey package to target customers.  The Business Development Manager will be responsible for attaining specific growth plans to meet or exceed the sales targets established for the Soft Play brand."     
};
 
var legal_assistant = {
	industry		: "Legal",
    career            : "legal_assistant", 
    careerName        : "Legal Assistant",
    cognitiveValue    : 25,
    physicalValue    : 40,
    psychomotorValue: 20,
    sensoryValue    : 30,
    imageLink: 'img/legal.jpg',
    description: "A paralegal often works in a legal office to support the lawyer team. Their role is supportive. Paralegals do much of the legwork in preparing the important documents a lawyer might need. They often need to research law and support the lawyer’s role in at a trial, hearing, or meeting. This involves meeting with the lawyer to determine the best way to approach a client’s needs. The paralegal will then research laws and precedent (similar cases and their decisions) for the lawyer."     
};
 
var patent_attorney = {
	industry		: "Legal",
    career            : "patent_attorney", 
    careerName        : "Patent Attorney",
    cognitiveValue    : 25,
    physicalValue    : 40,
    psychomotorValue: 20,
    sensoryValue    : 30,
    imageLink: 'img/patent20attorney_feed.jpg',
    description: "Patent attorneys obtain and/or renew patents on behalf of  inventors and companies. They also advise and represent clients on patent infringement issues and other areas related to intellectual property rights."     
};


var social_worker = {
	industry		: "Community & Social Service",
    career            : "social_worker", 
    careerName        : "Social Worker",
    cognitiveValue    : 25,
    physicalValue    : 40,
    psychomotorValue: 20,
    sensoryValue    : 30,
    imageLink: 'img/socialworker.jpg',
    description: "Social workers assists people within a wide range of settings, from mental health clinics to schools and hospitals. they can work with individuals or within large communities or organizations and assist with a variety of ailments from addiction treatment to chronic illness and child support services"     
};
var sanitation = {
	industry		: "Community & Social Service",
    career            : "sanitation", 
    careerName        : "Sanitation",
    cognitiveValue    : 25,
    physicalValue    : 40,
    psychomotorValue: 20,
    sensoryValue    : 30,
    imageLink: 'img/sanitation.jpg',
    description: "Sanitation workers are responsible for cleaning residences and businesses. They're often contracted to private waste disposal companies to collect garbage and moving it to disposal areas, like landfills"     
};

var therapist = {
	industry		: "Community & Social Service",
    career            : "therapist", 
    careerName        : "Therapist",
    cognitiveValue    : 25,
    physicalValue    : 40,
    psychomotorValue: 20,
    sensoryValue    : 30,
    imageLink: 'img/therapist.jpg',
    description: "Therapists, are licensed mental health professionals who specialize in helping clients develop better cognitive and emotional skills, reduce symptoms of mental illness, and cope with various life challenges to improve their lives."     
};

var campaign_manager = {
	industry		: "Government & Public Service",
    career            : "campaign_manager", 
    careerName        : "Campaign Manager",
    cognitiveValue    : 25,
    physicalValue    : 40,
    psychomotorValue: 20,
    sensoryValue    : 30,
    imageLink: 'img/campaign.jpg',
    description: "A Campaign Manager is an individual responsible for coordinating another individual’s attempt to win a political office. They work with the candidate to help fundraise, lead advertising, check polling, convince people to vote, and other activities which directly support the candidate. There are times they will speak to the press in lieu of the candidate."     
};

var legislative_aide = {
	industry		: "Government & Public Service",
    career            : "legislative_aide", 
    careerName        : "Legislative Aide",
    cognitiveValue    : 25,
    physicalValue    : 40,
    psychomotorValue: 20,
    sensoryValue    : 30,
    imageLink: 'img/aide.jpg',
    description: "A Legislative Aide provides support to legislators or other elected officials. This can involve hearing constituent concerns, helping draft speeches or legislation, and preparing reports for the official. They also can be responsible for helping the official with his or her schedule."     
};


var political_media_strategist = {
	industry		: "Government & Public Service",
    career            : "political_media_strategist", 
    careerName        : "Political Media Strategists",
    cognitiveValue    : 25,
    physicalValue    : 40,
    psychomotorValue: 20,
    sensoryValue    : 30,
    imageLink: 'img/politicalmediaspecialist.jpg',
    description: "Political Media Strategists lead the planning of how best for a campaign to use television, radio, social media, and other forms of media to help influence voters. They are especially influential as social media has come to dominate the landscape. Job responsibilities are specific to the type of election."     
};

var ux_designer = {
	industry		: "Internet",
    career            : "ux_designer", 
    careerName        : "User Experience (UX) Designer",
    cognitiveValue    : 25,
    physicalValue    : 40,
    psychomotorValue: 20,
    sensoryValue    : 30,
    imageLink: 'img/ux.jpeg',
    description: "A UX Designer works on websites, applications, intranets, online communities or software and they encompass one or more of the following elements (depending on the company): Information Architecture: Designs the structure, the “blueprint” of the site (i.e. How the pages group together, navigation) that support the objectives of the system they are designing. What is the flow of users through our site? How does the software help the user catalog their information? How is that presented back to the user?"     
};


var information_technology = {
	industry		: "Internet",
    career            : "information_technology", 
    careerName        : "Information Technology",
    cognitiveValue    : 25,
    physicalValue    : 40,
    psychomotorValue: 20,
    sensoryValue    : 30,
    imageLink: 'img/infotech.jpg',
    description: "Information technology (IT) is the use of any computers, storage, networking and other physical devices, infrastructure and processes to create, process, store, secure and exchange all forms of electronic data. Typically, IT is used in the context of enterprise operations as opposed to personal or entertainment technologies."     
};

var software_developer = {
	industry		: "Internet",
    career            : "software_developer", 
    careerName        : "Software Developer",
    cognitiveValue    : 25,
    physicalValue    : 40,
    psychomotorValue: 20,
    sensoryValue    : 30,
    imageLink: 'img/software.jpg',
    description: "Software developers are the creative minds behind computer programs. Some develop the applications that allow people to do specific tasks on a computer or another device. Others develop the underlying systems that run the devices or that control networks."     
};

var hr_specialist = {
	industry		: "Human Resources",
    career            : "hr_specialist", 
    careerName        : "Human Resources Specialist",
    cognitiveValue    : 25,
    physicalValue    : 40,
    psychomotorValue: 20,
    sensoryValue    : 30,
    imageLink: 'img/hrspecialist.jpg',
    description: "Human resources specialists recruit, screen, interview, and place workers in a company or organization. They also may handle human resources work in a variety of other areas, such as employee relations, payroll and benefits, and training."     
};

var project_manager = {
	industry		: "Human Resources",
    career            : "project_manager", 
    careerName        : "Project Manager",
    cognitiveValue    : 25,
    physicalValue    : 40,
    psychomotorValue: 20,
    sensoryValue    : 30,
    imageLink: 'img/projectManager.jpg',
    description: "Project managers play the lead role in planning, executing, monitoring, controlling and closing projects. They are accountable for the entire project scope, project team, resources, and the success or failure of the project."     
};

var social_media_specialist = {
	industry		: "Human Resources",
    career            : "social_media_specialist", 
    careerName        : "Social Media Specialist",
    cognitiveValue    : 25,
    physicalValue    : 40,
    psychomotorValue: 20,
    sensoryValue    : 30,
    imageLink: 'img/socialMedia.jpeg',
    description: "Social media specialists work on the overall social media strategies for a business or organization. They communicate with the public through social media platforms such as Facebook, Twitter and Instagram. Solving customer service issues and promoting their employer’s brand online are all part of the day to day work of a social media specialist."     
};

var mason = {
	industry		: "Construction & Skilled Trades",
    career            : "mason", 
    careerName        : "Mason",
    cognitiveValue    : 25,
    physicalValue    : 40,
    psychomotorValue: 20,
    sensoryValue    : 30,
    imageLink: 'img/mason.jpg',
    description: "A mason uses bricks, concrete blocks, or natural stones to build structures that include walls, walkways, fences, and chimneys. Depending on the building material in which they specialize, these workers might be called brick masons, block masons, or stonemasons."     
};

var carpenter = {
	industry		: "Construction & Skilled Trades",
    career            : "carpenter", 
    careerName        : "Carpenter",
    cognitiveValue    : 25,
    physicalValue    : 40,
    psychomotorValue: 20,
    sensoryValue    : 30,
    imageLink: 'img/carpenter.jpg',
    description: "Carpenters build and repair building frameworks and structures made from wood and other materials."     
};

var electrician = {
	industry		: "Construction & Skilled Trades",
    career            : "electrician", 
    careerName        : "Electrician",
    cognitiveValue    : 25,
    physicalValue    : 40,
    psychomotorValue: 20,
    sensoryValue    : 30,
    imageLink: 'img/electrician.jpg',
    description: "Electricians install and maintain electrical systems in homes, businesses, and factories."     
};

var pharmacist = {
	industry		: "Healthcare",
    career            : "pharmacist", 
    careerName        : "Pharmacist",
    cognitiveValue    : 25,
    physicalValue    : 40,
    psychomotorValue: 20,
    sensoryValue    : 30,
    imageLink: 'img/pharmacist.jpg',
    description: "An Epidemiologist is a public health professional who helps stop the spread of disease or other negative health outcomes. They do this by researching specific populations. By communicating their findings to public officials, they help determine public policy for preventing disease."     
};

var dentist = {
	industry		: "Healthcare",
    career            : "dentist", 
    careerName        : "Dentist",
    cognitiveValue    : 25,
    physicalValue    : 40,
    psychomotorValue: 20,
    sensoryValue    : 30,
    imageLink: 'img/dentist.jpg',
    description: "A dentist is a type of doctor responsible for the health of teeth and gums. They work to help patients prevent decay in the mouth, as well as diagnosing and treating oral disease. They may also help fit dental appliances and refer patients to other oral doctors for a variety of problems."     
};
var epidemiologist = {
	industry		: "Healthcare",
    career            : "epidemiologist", 
    careerName        : "Epidemiologist",
    cognitiveValue    : 25,
    physicalValue    : 40,
    psychomotorValue: 20,
    sensoryValue    : 30,
    imageLink: 'img/epidemiologist.jpg',
    description: "An Epidemiologist is a public health professional who helps stop the spread of disease or other negative health outcomes. They do this by researching specific populations. By communicating their findings to public officials, they help determine public policy for preventing disease."     
};



var careerList = [school_counselor, teacher_assistant, music_director, advert_acct_exec, assistant_director, audio_engineer, architect, art_director, film_editor, ai_engineer, back_end_dev, cloud_engineer, biomed_engineer, civil_engineer, electrical_engineer, business_affairs, legal_assistant, patent_attorney, social_worker, sanitation, therapist, campaign_manager, legislative_aide, political_media_strategist, ux_designer, information_technology, software_developer, hr_specialist, project_manager, social_media_specialist, mason, carpenter, electrician, pharmacist, dentist, epidemiologist];
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

		calcTop3(savedCareer);

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
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
  center: {lat: 35.787743, lng: -78.644257},
  zoom: 15,
  mapId: '4c45ae6291c3df1f'
  });
}