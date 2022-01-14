var pos = 0, test, test_status, questions,  choice, choices, chA, chB, chC, correct = 0; 
	var questions = [
		["Am I Handsome?", "Yes, Very Very", "You still dey try sha", "Not at all", "A" ],
		["How old am I?", "19", "18", "17", "A"],
		["What is my Hobby?", "Looking for trouble", "Reading", "Saying Nonsense", "A"],
		["Where do I stay?", "Lagos", "Kaduna", "Abuja", "A"],
		["Which of these do I do best", "Eat", "Read", "Fight", "A"],
		["How Good am I as a friend?", "Bad", "Very Good", "Worst  of all", "B"],
		["Who is my role model?", "Boknoi Villaflor", "Bobrisky", "Pastor E. A . Adeboye", "B"],
		["How many website have I created personally?", "12", "3", "1", "A"],
		["What's my favourite food?", "Beans and Eba", "Eba and Egusi", "Spagetti and Custard", "B"],	
		["Rate this site", "10", "5", "Below both", "A"]
	];
	function _(x){
		return document.getElementById(x);
	}
	function renderQuestion(){
		test = _("test");
		if(pos >= questions.length){
			test.innerHTML = "<h3>You got "+correct+" of "+questions.length+" questions correct</h3>";
			_("test_status").innerHTML = "Exam Completed";
			pos = 0;
			correct =0;
			return false;
		}
		_("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
		question = questions[pos][0];
		chA = questions[pos][1];
		chB = questions[pos][2];
		chC = questions[pos][3];
		
		
		test.innerHTML = "<h3>"+question+"</h3>";
		test.innerHTML += "<input type='radio' name='choices' value='A'> "+chA+"<br>";
		test.innerHTML += "<input type='radio' name='choices' value='B'> "+chB+"<br>";
		test.innerHTML += "<input type='radio' name='choices' value='C'> "+chC+"<br><br>";

		test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";	
	}
	function checkAnswer(){
		choices = document.getElementsByName("choices");
		for(var i=0; i<choices.length; i++){
			if(choices[i].checked){
				choice = choices[i].value;
			}
		}
		if (choice == questions[pos][4]){
			correct++;
		}
		pos++;
		renderQuestion();
	}
	window.addEventListener("load", renderQuestion, false);