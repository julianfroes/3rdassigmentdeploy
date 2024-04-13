const story =`
In the realm of shadows, where darkness reigns and the malevolent whispers of an evil sorcerer threaten the peace of the world, stands the ominous tower of the Dark Mage. For ages, he has plotted in the shadows, weaving his dark magic to disrupt the delicate balance of peace in the mortal realm.

As the lands are shrouded in darkness and fear grips the hearts of men, a glimmer of hope emerges from ancient lore: the Dark Mage holds a singular weakness, a game as old as time itself—rock, paper, scissors.

This simple truth becomes the last hope for the mortal world. Summoned to face the Dark Mage in his lair, a brave warrior enters armed not with sword or shield, but with the determination of a valiant heart and the will of a resolute soul.

In a final showdown, the battlefield unfolds on a simple console in an empty HTML. Here, the fate of the world will be decided. With each choice of rock, paper, or scissors, the warrior challenges the Dark Mage, each move bringing them closer to victory or defeat.

In this epic clash of light and darkness, good and evil, only one will emerge triumphant. Will the warrior prove cunning enough to overcome the Dark Mage and restore peace to the world? Only time and the course of the game will reveal the final verdict in this battle for the fate of the mortal realm.`;

const rules ={
    "rock": { "rock": 3, "scissors": 1, "paper": 2 },
    "scissors": { "rock": 2, "scissors": 3, "paper": 1 },
    "paper": { "rock": 1, "scissors": 2, "paper": 3 }
}
const displayOptions =['●1   rock','●2   scissors','●3   paper']
const options = ["rock","scissors","paper"]
const numberOptions =['1','2','3']
let round = 1
let roundsWon = 0
let roundsLost = 0
let playerSelection = ""
let computerSelection = ""
let playerSelectionLowerCase =""
let validInputFlag = true
let leaveGame = false

function roundMessage(result){
    switch(result){
        case 1:
            roundsWon++; 
            return "You won the round";
        case 2:
            roundsLost++; 
            return "You lost the round";    
        case 3: 
            return "This round was a draw";
    }
    
}
function setComputerSelection(){
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return("rock");
        case 1:
            return("scissors");
        case 2:
            return("paper");
    }
}
function setWinnerOfTheRound(player, computer){
    return rules[player][computer]
}
function validateInput(){
    if(validInputFlag){
        playerSelection = window.prompt(`${'Write an option.'} | round: ${round}\n${ displayOptions.join("\n")}`);
    }
    else{
        playerSelection = window.prompt(`${'Write an option.'} | round: ${round}\n${'write a correct input'}\n${ displayOptions.join("\n")}`);
    }
    if(playerSelection === null){
        leaveGame = window.confirm('Do you want to leave the battlefield and let the evil wizard win?')
        if(!leaveGame){
            console.log("thank you for your loyalty");
            return
        } 
        else{
            console.log('Thank you for your time');
            return
        }
    }
}
function playRound(){
    do {
        //validateInput
        validateInput();
        playerSelectionLowerCase = playerSelection.toLowerCase();
        validInputFlag = options.includes(playerSelectionLowerCase)
        if(numberOptions.includes(playerSelectionLowerCase)){
            switch (playerSelectionLowerCase) {
                case '1':
                    playerSelectionLowerCase = "rock"
                    break;
                case '2':
                    playerSelectionLowerCase = "scissors"
                    break;
                case '3':
                    playerSelectionLowerCase = "paper"
                    break;
            }
            validInputFlag = true;
        }
    } while (!validInputFlag);

    computerSelection = setComputerSelection();
    const message = `Round: ${round}\n
    You played: ${playerSelectionLowerCase}\n
    The evil wizard played: ${computerSelection}\n
    ${playerSelectionLowerCase} vs ${computerSelection}\n
    ${roundMessage(setWinnerOfTheRound(playerSelectionLowerCase, computerSelection))}\n
    Scores | You: ${roundsWon} | Evil wizard: ${roundsLost} | Draws: ${round - (roundsLost + roundsWon)}`;
    window.alert(message);
    console.log(message);
    round++;
}

console.log("Disclaimer any scissor, rock or paper were not harmed")
function startGame(){
    window.alert(story);
    do {
        playRound()
        if(leaveGame) return;
        if(roundsWon == 3 || roundsLost == 3)break
    } while (round <= 5 );
    if(roundsWon === 3 || roundsWon > roundsLost){
        window.alert("Congratulations, mighty warrior! With your valiant efforts, you have vanquished the malevolent wizard and restored harmony to the world");
    }
    else if(roundsLost === 3 || roundsLost > roundsWon){
        window.alert("Though the battle may be lost, the spirit of a warrior is indomitable. Rise again, brave soul, for redemption awaits on the battlefield. Your resilience shall forge a path to victory!");
    }
    else{
        window.alert("In the balance of fate, a draw is but a pause in the eternal struggle. Press onward, gallant challenger, for in the ebb and flow of conflict lies the promise of triumph. Let hope guide your blade in the battles yet to come!");
        
    }
    const playAgain = window.confirm('Do you want to play again?');
    if(playAgain) {
        round = 1
        roundsWon = 0
        roundsLost = 0
        playerSelection = ""
        computerSelection = ""
        playerSelectionLowerCase =""
        validInputFlag = true
        leaveGame = false
        startGame();
    }
    console.log('Thank you for playing the game!')
}

startGame();
console.log("Is this the end?");
console.log("Maybe if you refresh the page it won't be");

