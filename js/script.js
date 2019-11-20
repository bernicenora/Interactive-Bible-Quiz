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
var btn = document.getElementById("next");
//var choices = document.getElementsByClassName("choices");

var i=1; //counter
var score=0; //To calculate the score
// When the window loads, load the question related details
window.onload = function(){
    let dis = ". "; //Append the .
    let qMark = " ?" //Append the ? symbol at the end of the question
    //Getting the Question 1 and the relevant Options to display on the page
    questionDesc.innerHTML = 1+dis+qaArray[0].question+qMark;
    choice1.firstChild.nodeValue = qaArray[0].options[0];
    choice2.firstChild.nodeValue = qaArray[0].options[1];
    choice3.firstChild.nodeValue = qaArray[0].options[2];
    choice4.firstChild.nodeValue = qaArray[0].options[3];

    // When the NEXT button is clicked, display the next question in the array
    btn.onclick = function(){
        //console.log(i);
        //Check first question's answer
        console.log(qaArray[0].answer);
        console.log(choiceB.checked);
        console.log(qaArray[i].answer);


        //Display the question and the relevant choices
        questionDesc.innerHTML = i+1+dis+qaArray[i].question+qMark;
        choice1.firstChild.nodeValue = qaArray[i].options[0];
        choice2.firstChild.nodeValue = qaArray[i].options[1];
        choice3.firstChild.nodeValue = qaArray[i].options[2];
        choice4.firstChild.nodeValue = qaArray[i].options[3];
        i+=1; //increment the counter to go to the next question in the array
        if (i>9){ // All 10 questions are done, and so check for the end of the question array
            //Once done, log out ti console
            console.log("done and ready for scoring!");
            // Diable the next button and shift the focus to the SUBMIT button
            btn.disabled = true;
        }
    }
}
