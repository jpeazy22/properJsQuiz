var Universal = {};

var quiz = [
	{
		question: "The average person does what thirteen times a day?",
		choices: ["Yawns", "Yells", "Laughs", "Cries"],
		correctAnswer:2
	},
	{
		question: "The Average American does what 22 times a day?",
		choices: ["Calls a friend", "Walks Dog", "Sits Down", "Opens Fridge"],
		correctAnswer:3
	},
	{
		question: "What is Johnny Depp afraid of?",
		choices: ["Black Cats", "Clowns", "Pirates", "Little Children"],
		correctAnswer:1
	},
	{
		question: "In California you can't legally buy a mousetrap without having a what?",
		choices: ["A parent present", "Liability Waiver", "Hunting License", "Drivers License"],
		correctAnswer:2
	},
	{
		question: "In Kansas it's illegal to eat cherry pie with what?",
		choices: ["Ice cream", "Whip cream", "Fork", "Spoon"],
		correctAnswer:0
	},
	{
		question: "What was the first puck used, in the game of ice hockey, made of?",
		choices: ["Round wood chip", "Flattened tin can", "Frozen cow manure", "Rock"],
		correctAnswer:2
	},
	{
		question: "It's illegal in Texas to put what on your neighbors Cow?",
		choices: ["Bell", "Graffiti", "Blanket", "Bow"],
		correctAnswer:1
	}
];

$('document').ready(function () {
	$('#userNameContainer').text(getUserName('input'));
});

var html = "<div>";
		html+="<ul>";
	   		for (var i = 0; i < quiz.length; i++) {
	    		html+="<li data-questions-index=" + i + " class=individualQuestion><h4>"+quiz[i].question+"</h4>";
				for(var j = 0; j < quiz[i].choices.length; j++) {
					html+="<input class=radioOptions type = radio name=quizChoices_" + i + " value=" + j + "> " + quiz[i].choices[j]+ "</input><br>";
					$("#quizItem_" + i + " input").on('click', function(){
						console.log("a value", $(this).val());
					});
				}
				html+="</li>";
			}
		html+="</ul>";
	html+="</div>";
document.getElementById("questions").innerHTML = html;

var totalQuestions = $('.individualQuestion').length;
var totalCorrect = 0;

var scoreArray = [];
$('.individualQuestion input').on('click', function() {
	var selectedAnswer = parseInt($(this).val()),
		questionIndex = $(this).closest('li').data('questions-index'),
		correctAnswer = quiz[questionIndex].correctAnswer;
	if(selectedAnswer === correctAnswer){
		scoreArray[questionIndex] = true;
	} else {
		scoreArray[questionIndex] = false;
	}
	
	var scoreArrayLength = scoreArray.length;
	var trueScore = [];
	for (var i = 0; i < scoreArrayLength; i++) {
		if(scoreArray[i] === true ){
			trueScore.push(scoreArray[i]);
		}
		totalCorrect = trueScore.length;
	}
	return selectedAnswer;
});

// hide next button after last question
var counter = 1;
if(counter < totalQuestions){
	$('#next').show();
} else if (counter === totalQuestions - 1) {
	$('#next').hide();
}


$(".individualQuestion:nth-child(" + counter + ")").fadeIn('slow');

$("#next").click(function(event){
	var answerSelected = $('[data-questions-index="'+ (counter - 1) + '"] .radioOptions').is(':checked');
	if(answerSelected === true && counter < quiz.length) {
		counter++;
		$('#previous').show();
		$('#submit').hide();
		$(".individualQuestion").hide();
		$(".individualQuestion:nth-child(" + counter + ")").fadeIn('slow');
	} else if(answerSelected === true && counter === quiz.length) {
		$('#submit').show();
		$("#next").hide();
	} else {
		event.preventDefault();
		alert("You must select an answer before moving to the next question.");
		return false;
	}
});

$("#previous").click(function(){
	if(counter > 1) {
		counter--; 
		$(".individualQuestion").hide();
		$(".individualQuestion:nth-child(" + counter + ")").fadeIn('slow');
		$('#submit').hide();
		$("#next").show();
		$('#questions').show();
		$('#score').hide();
	};
});

$('#submit').click(function() {
	$(".individualQuestion").hide();
	$('#questions').hide();
	$('#score').show();
	$('#previous').hide();
	$('#restart').show();
	$('#submit').hide();
	var htmlScore = "<div>";
		htmlScore+="<h4>You've answered " + totalCorrect + " correct out of " + totalQuestions + " total.</h4> <br> <h2>" + Math.floor(totalCorrect/totalQuestions * 100) + "%</h2>";
	htmlScore+="</div>";
	document.getElementById('score').innerHTML = htmlScore;
});

function userName() {
	var input = document.getElementById("userName").value;
	$('#userLoginName').text("Good Luck " + input + "!");
	localStorage.setItem('input', input);
}

var login = $('#login');
// login.addEventListener('click', getUserName, false);

function getUserName (userNameElement) {
	var userName = localStorage.getItem(userNameElement);
	if (userName) {
		return userName;
	}
}

$('#login').click(function() {
		$('#intro').hide();
		$('.container').show();
});
