class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

const paper = new Node("paper");
const rock = new Node("rock");
const scissors = new Node("scissors");

paper.next = rock;
rock.next = scissors;
scissors.next = paper;

let unknownResult =
    "Something went wrong!\n (As mentioned in the rules... I guess you have a tough life!)\n";
const allowedAnswers = ["paper", "rock", "scissors"];

function rockPaperScissors(myGuess) {
    console.log(
        "The game is simple.\n You choose ['rock', 'paper', 'scissors'] same does the robot and the combinations are compared.\n If you struggle with understand the rules... Seems like you have some serious problems...(((\n",
    );
    if (!allowedAnswers.includes(myGuess)) {
        return unknownResult;
    }

    const steps = Math.floor(Math.random() * 3);

    let currentNode = paper;
    for (let i = 0; i < steps; i++) {
        currentNode = currentNode.next;
    }

    let robotGuess = currentNode.value;
    console.log(`Robot choose -> ${robotGuess}!\n`);
    myGuess = myGuess.toLowerCase();
    console.log(`You choose -> ${myGuess}!\n`);

    if (currentNode.value === myGuess) {
        return "Ai is getting closer! (Draw)\n";
    } else if (currentNode.next.value === myGuess) {
        return "You lose!\n";
    } else if (currentNode.next.next.value === myGuess) {
        return "Congrats! You win!\n";
    }
}

console.log(
    rockPaperScissors(
        allowedAnswers[Math.floor(Math.random() * allowedAnswers.length)],
    ),
);
