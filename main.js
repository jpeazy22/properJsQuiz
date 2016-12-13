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
    		html+="<li class=individualQuestion><h4>"+quiz[i].question+"</h4>";
			for(var j = 0; j < quiz[i].choices.length; j++) {
				html+="<input type = radio name=quizChoices> " + quiz[i].choices[j]+ "</input><br>";
			}
			html+="</li>";
	//    console.log(quiz[i].choices);
	//    html+="<p>"+quiz[i].correctAnswer+"</p>";
   }
   	html+="</ul>";
html+="</div>";
document.getElementById("questions").innerHTML = html;

var counter = 1;
$(".individualQuestion:nth-child(" + counter + ")").show();
$("#next").click(function(){
	$(".individualQuestion:nth-child(" + counter + ")").hide();
	counter++; 
	$(".individualQuestion:nth-child(" + counter + ")").show();
});
$("#back").click(function(){
	$(".individualQuestion:nth-child(" + counter + ")").hide();
	counter--; 
	$(".individualQuestion:nth-child(" + counter + ")").show();
});





