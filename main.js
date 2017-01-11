var Universal = {};

var quiz = [
	{
		question: "Epithelial tissue is characterized by each of these traits, except that ____________.",
		choices: ["it lacks blood vessels", "it functions in secretion, absorption, and excretion", "epithelial cells are loosely packed and have much intercellular material", "it is anchored to a basement membrane"],
		correctAnswer:2
	},
	{
		question: "Microvilli, which function to increase surface area, are more likely to be found in ____________ epithelium.",
		choices: ["simple cuboidal", "simple squamous", "transitional", "simple columnar"],
		correctAnswer:3
	},
	{
		question: "Epithelium that appears layered due to the varying levels at which nuclei are found in cells, but in reality is not layered, is _________________.",
		choices: ["transitional epithelium", "pseudostratified columnar epithelium", "stratified squamous epithelium", "stratified columnar epithelium"],
		correctAnswer:1
	},
	{
		question: "The outer layer of the skin is composed of ______________________.",
		choices: ["transitional epithelium", "pseudostratified columnar epithelium", "stratified squamous epithelium", "stratified columnar epithelium"],
		correctAnswer:2
	},
	{
		question: "The primary purpose of stratification, or layering, in epithelial tissue is for increased _____________.",
		choices: ["protection", "secretion", "absorption", "thickening of the basement membrane"],
		correctAnswer:0
	},
	{
		question: "What type of epithelium lines the urinary bladder and is capable of distention?",
		choices: ["stratified cuboidal epithelium", "stratified squamous epithelium", "transitional epithelium", "stratified columnar epithelium"],
		correctAnswer:2
	},
	{
		question: "An exocrine gland that loses small parts of its cell bodies during secretion, as is the case for the mammary gland, is further classified as a(n) ____________ gland.",
		choices: ["merocrine", "apocrine", "holocrine", "endocrine"],
		correctAnswer:1
	}
];

var html = "<div>";
	html+="<ul>";
   		for (var i = 0; i < quiz.length; i++) {
    		html+="<li data-questions-index=" + i + " class=individualQuestion><h4>"+quiz[i].question+"</h4>";
			for(var j = 0; j < quiz[i].choices.length; j++) {
				html+="<input class=radioOptions type = radio name=quizChoices_" + i + " value=" + j + "> " + quiz[i].choices[j]+ "</input><br>";
				//console.log("quiz choices", quiz[i].choices[j].checked);
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
$('.individualQuestion input').on('click', function() {
	var selectedAnswer = parseInt($(this).val()),
		questionIndex = $(this).closest('li').data('questions-index'),
		correctAnswer = quiz[questionIndex].correctAnswer;
		
		console.log("selectedAnswer", selectedAnswer);
		console.log("questionIndex", questionIndex);
		console.log("correctAnswer", correctAnswer);
		console.log("input", $('.individualQuestion').val());
		
    
	if(selectedAnswer === correctAnswer){
	  	totalCorrect ++;
		document.getElementById('score').innerHTML = totalCorrect + "/ " + totalQuestions + " " + Math.floor(totalCorrect/totalQuestions * 100) + "%";
	    console.log('total correct', totalCorrect);
		console.log('correct');
	} else {
		console.log('false');
	}
	return selectedAnswer;
});

var counter = 1;
console.log(totalQuestions);
if(counter < totalQuestions){
	$('#next').show();
} else if (counter === totalQuestions) {
	$('#next').hide();
}
var radioCheck = document.getElementsByName('quizChoices_i');
$(".individualQuestion:nth-child(" + counter + ")").fadeIn('slow');
$('#submit').hide();
$("#next").click(function(event){
	var answerSelected = $('.radioOptions').is(':checked');
	console.log("is answer selected", answerSelected);
	if(answerSelected === true && counter < quiz.length) {
		// console.log(radioCheck);
		counter++; 
		$('#submit').hide();
		$(".individualQuestion").hide();
		$(".individualQuestion:nth-child(" + counter + ")").fadeIn('slow');
	} else if(answerSelected === true && counter === quiz.length) {
		$('#submit').show();
	} else {
		event.preventDefault();
		alert("You must select an answer before moving to the next question.");
	}
});
$("#previous").click(function(){
	if(counter > 1) {
		counter--; 
		$(".individualQuestion").hide();
		$(".individualQuestion:nth-child(" + counter + ")").fadeIn('slow');
		$('#submit').hide();
	};
});






