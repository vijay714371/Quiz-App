const questions=[
    {
        question:"which is largest animal in the world?",
        answers:[
            { text :"shark",correct:false},
            { text :"Blue whale",correct:true},
            { text :"Elephent",correct:false},
            { text :"Giraffe",correct:false},
        ]
    },
    {
        question:"which is smallest country in the world?",
        answers:[
            { text :"Vatican City",correct:true},
            { text :"Bhutan",correct:false},
            { text :"Nepal",correct:false},
            { text :"Shri Lanka",correct:false},
        ]
    },
    {
        question:"which is largest desert in the world?",
        answers:[
            { text :"Kalahari",correct:false},
            { text :"Gobi",correct:false},
            { text :"Sahara",correct:false},
            { text :"Antactica",correct:true},
        ]
    },
    {
        question:"which is smallest continent in the world?",
        answers:[
            { text :"Asia",correct:false},
            { text :"Australia",correct:true},
            { text :"Arctic",correct:false},
            { text :"Africe",correct:false},
        ]
    },
]

const questionElement=document.getElementById("question");
const answerButton=document.getElementById("answer-buttons");
const nextBotton=document.getElementById("next");

let currentQuestionIndex;
let score;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    console.log(currentQuestionIndex);
    nextBotton.innerHTML= "Next";
    console.log(currentQuestionIndex);
    showQuestion();
}

function showQuestion(){
    let currentQuestion=questions[currentQuestionIndex];
    console.log(currentQuestion.question);
    let questionNo=currentQuestionIndex+1;
    questionElement.innerHTML=questionNo+". "+currentQuestion.question;
    currentQuestion.answers.forEach(answer=>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
    });
}
startQuiz();

