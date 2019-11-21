/*My Master Array Object of Questions */
/*Any random question will be populated in the front-end */
var qaArray=[
    {
        question:"How many disciples did Jesus choose",
        options:["9","12","13","15"],
        answer:"12"
    },
    {
        question:"Which King gave the order to put Daniel in the Lion's den",
        options:["Nebuchadnezzer","Caesar Augustus","Darius","Herod"],
        answer:"Darius"
    },
    {
        question:"Who is considered as Jesus' favorite disciple",
        options:["John","Peter","James","Matthew"],
        answer:"John"
    },
    {
        question:"Where was Jesus born",
        options:["Egypt","Bethlehem","Nazareth","Canaan"],
        answer:"Bethlehem"
    },
    {
        question:"What was the name of the disciple who betrayed Jesus",
        options:["John","Peter","James","Judas"],
        answer:"Judas"
    },
    {
        question:"What is the last book of the Old Testament",
        options:["Micah","Malachi","Hosea","Habbakuk"],
        answer:"Malachi"
    },
    {
        question:"How many books are there in the Bible",
        options:["27","32","64","66"],
        answer:"66"
    },
    {
        question:"What does God look at when people look at the outside appearance",
        options:["skin","heart","soul","mind"],
        answer:"heart"
    },
    {
        question:"What must we do do be saved",
        options:["Believe that Jesus is Lord","Forgive others' sins","Give alms to the poor","Read the Bible everyday"],
        answer:"Believe that Jesus is Lord"
    },
    {
        question:"Who are Noah's sons",
        options:["Japheth, Shem & Cain","Cain, Abel & Ham","Shem, Ham & Japheth","Adam, Cain & Japheth"],
        answer:"Shem, Ham & Japheth"
    }
];

//Pick a question from the array to populate the display panel

//Getting all required elements from the code
var questionNumber = document.getElementById("questionNumber");
var questionDesc = document.getElementById("questionDesc");
var answerchoice = document.getElementsByName("answer");
var choice1 = document.getElementById("choice1");
var choice2 = document.getElementById("choice2");
var choice3 = document.getElementById("choice3");
var choice4 = document.getElementById("choice4");
var choiceA = document.getElementById("choiceA");
var choiceB = document.getElementById("choiceB");
var choiceC = document.getElementById("choiceC");
var choiceD = document.getElementById("choiceD");
var btnNext = document.getElementById("next");
var btnSubmit = document.getElementById("submit");
var success = document.getElementById("success");
//var choices = document.getElementsByClassName("choices");

var i=1; //counter
var score=0; //Variable calculate the score

// When the window loads, load the question related details
window.onload = function(){
    btnSubmit.disabled = true; //Disable the Submit Button
    let dis = ". "; //Append the .
    let qMark = " ?" //Append the ? symbol at the end of the question

    //Getting the Question 1 and the relevant Options to display on the page
    questionDesc.innerHTML = 1+dis+qaArray[0].question+qMark;
    choice1.firstChild.nodeValue = qaArray[0].options[0];
    choice2.firstChild.nodeValue = qaArray[0].options[1];
    choice3.firstChild.nodeValue = qaArray[0].options[2];
    choice4.firstChild.nodeValue = qaArray[0].options[3];

    // When the NEXT button is clicked, display the next question in the array
    btnNext.onclick = function(){


        //Checking for the right answer from the array and updating score

        if (choiceA.checked){
            if (qaArray[i-1].answer == choice1.firstChild.nodeValue){
                score += 1;
            }else{
                score += 0;
            }
        }

        if (choiceB.checked){
            if (qaArray[i-1].answer == choice2.firstChild.nodeValue){
                score += 1;
            }else{
                score += 0;
            }
        }

        if (choiceC.checked){
            if (qaArray[i-1].answer == choice3.firstChild.nodeValue){
                score += 1;
            }else{
                score += 0;
            }
        }

        if (choiceD.checked){
            if (qaArray[i-1].answer == choice4.firstChild.nodeValue){
                score += 1;
            }else{
                score += 0;
            }
        }
        //Display the question and the relevant choices
        questionDesc.innerHTML = i+1+dis+qaArray[i].question+qMark;
        choice1.firstChild.nodeValue = qaArray[i].options[0];
        choice2.firstChild.nodeValue = qaArray[i].options[1];
        choice3.firstChild.nodeValue = qaArray[i].options[2];
        choice4.firstChild.nodeValue = qaArray[i].options[3];

        i+=1; //increment the counter to go to the next question in the array
        // Setting the initial state of the radio button
        choiceA.checked = true;
        if (i>9){ // All 10 questions are done, and so check for the end of the question array

            //Once done, log out to console
            console.log("done and ready for scoring!");
            // Diable the next button and shift the focus to the SUBMIT button
            btnNext.disabled = true; //Disable the Next Button after 9 questions
            btnSubmit.disabled = false; //Enable the Submit Button
            btnSubmit.onclick = function(){
                //console.log(i);
                if (choiceA.checked){
                    if (qaArray[i-1].answer == choice1.firstChild.nodeValue){
                        score += 1;
                    }else{
                        score += 0;
                    }
                }

                if (choiceB.checked){
                    if (qaArray[i-1].answer == choice2.firstChild.nodeValue){
                        score += 1;
                    }else{
                        score += 0;
                    }
                }

                if (choiceC.checked){
                    if (qaArray[i-1].answer == choice3.firstChild.nodeValue){
                        score += 1;
                    }else{
                        score += 0;
                    }
                }

                if (choiceD.checked){
                    if (qaArray[i-1].answer == choice4.firstChild.nodeValue){
                        score += 1;
                    }else{
                        score += 0;
                    }
                }
                //console.log(score);
                //Log out the score on an alert box!
                /*if (score>5){
                    alert("Wohoo!! You have scored "+score+" points. Good job!!");
                }else{
                    alert("You have scored "+score+" points. Better luck next time!!");
                }*/
                console.log(score);
                success.firstChild.nodeValue = "You have scored "+score;
                console.log(success.firstChild.nodeValue);
            } //End of checks for Submit Button
        } //End of checks for last question
    }
}
