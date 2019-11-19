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

var i;
var score=0; //To calculate the score
// When the window loads, load the question related details
window.onload = function displayQuestion(){
    let dis = "."; //Append the .
    let qMark = " ?" //Append the ? symbol at the end of the question
    // Take the whole Array Object in a loop
    for (i=0;i<qaArray.length;i++){

        // Displaying the number on the page
        //questionNumber.innerHTML = i+1+dis;
        // Displaying the question and question mark on the page
        //questionDesc.innerHTML = qaArray[i].question + qMark;

        //var answerchoice = document.getElementsByTagName('input');
        //console.log(answerchoice);
        console.log(qaArray[i].question);
           console.log(qaArray[i].answer);
        for(var j=0;j<qaArray[i].options.length;j++){
            console.log(qaArray[i].options[j]);
           //answerchoice.innerHTML = answerchoice[i];

        }
    }
}


/*
var btn = document.getElementById("next");
btn.onclick = function(){
    window.onload = function displayQuestionNumber(){
    let dis = ".";
    //for (var i=0;i<qaArray.length;i++){
    //dis += '${i}+1';

    questionNumber.innerHTML = 1+dis;
//}

}
}
*/