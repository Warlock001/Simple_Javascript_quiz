function name_credentials() {
			document.getElementById('sel_name').innerHTML =document.forms["playerinfo"]["con_name"].value;
			document.getElementById('sel_email').innerHTML=document.forms["playerinfo"]["con_email"].value;
			return false;
		}
		function score() {
			var namee = document.getElementById('sel_name');
			var emaill = document.getElementById('sel_email');
			var sc = 0;
			var answers = ["Jawaharlal Nehru", "Apple", "Gujarat", "Nokia", "International Mobile Equipment Identity", "American Standard Code for Information Interchange", "Network Interface Card", "Wikipedia", "Andhra Pradesh", "1st graphical game"];
			var i;
			var questions = [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ",];
			var k = 0;
			var wrong_answers = " ";
			questions[0] = document.forms["quizform"]["q1"].value;
			questions[1] = document.forms["quizform"]["q2"].value;
			questions[2] = document.forms["quizform"]["q3"].value;
			questions[3] = document.forms["quizform"]["q4"].value;
			questions[4] = document.forms["quizform"]["q5"].value;
			questions[5] = document.forms["quizform"]["q6"].value;
			questions[6] = document.forms["quizform"]["q7"].value;
			questions[7] = document.forms["quizform"]["q8"].value;
			questions[8] = document.forms["quizform"]["q9"].value;
			questions[9] = document.forms["quizform"]["q10"].value;
			for(i = 0; i < answers.length; i++) {
				if(questions[i] == answers[i]) {
					sc = sc + 10;
				}
				else if(questions[i] != answers[i]) {
					wrong_answers = wrong_answers + (i+1) + ". "+ answers[i] + " ";
				}
			}
			var no_of_correct_ans = sc/10;
			var no_of_wrong_ans = 10 - no_of_correct_ans;
			document.getElementById("result_div").innerHTML = /*"name: "+namee+"<br>"+"Email: "+emaill+"<br>"+*/"Number of correct answers:"+no_of_correct_ans+"<br>"+"Number of wrong answers: "+no_of_wrong_ans+"<br>"+"Score: "+sc;
                        
			document.getElementById("correct_ans").innerHTML = "<h2> Answers that went wrong: </h2> <br>" +wrong_answers+"<br>"+"<h2> All Answers: </h2>"+answers;
			return false;
		}