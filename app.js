let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#userScore");
const compScorePara = document.querySelector("#compScore");


const genComputerChoice = () => {
    const option = ["rock","paper" ,"scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return option[randIdx];
}


const drawgame = () =>{
    msg.innerText ="Game was Draw! Play again" ;
    msg.style.backgroundColor = "#081b31";
}

const  showWinner = (userwin ,userchoice ,compchoice) => {
    if(userwin){
        userScore++ ;
        userScorePara.innerText = userScore;
        msg.innerText =`You Win! your ${userchoice} beats ${compchoice}` ;
        msg.style.backgroundColor = "green";
    }

    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose! ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playgame = (userchoice) => {
    console.log("User choice =", userchoice);

    const compchoice = genComputerChoice();
    console.log("Computer choice =", compchoice);

    if(userchoice === compchoice){
       drawgame();
    }  
    else{

        let userwin = true;
        if(userchoice === "rock" ){
            userwin = compchoice === "paper" ? false : true;
        } 
        else if (userchoice === "paper") {
            userwin = compchoice === "scissor" ? false : true;
        } 
        else {
            userwin = compchoice === "rock" ? false : true;
        }
        
        showWinner(userwin , userchoice , compchoice);

        }

     };
    

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener ("click",() => {
        const userchoice = choice.getAttribute("Id");
        playgame(userchoice);

    });
});


