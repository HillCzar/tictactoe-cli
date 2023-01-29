import readline from "readline";


function run(debug: boolean) {
    if(debug) console.log("We're starting the program XD");
    if(debug) console.log("Initializing the board");
    const board : Board = newBoard();
    const user1 = randomTeam();
    const user2 = user1 === "X" ? "O" : "X";
    console.log(`Player 1 is ${user1}, player 2 is ${user2}!`);
    console.log("I want to play a game");
}


run(true);


type Board = Map<number, "X" | "O" | null>;


function promptForUserInput(message: string) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => rl.question(message, answer => {
        rl.close();
        resolve(answer);
    }));
}


function randomTeam() {
    return Math.random() < 0.5 ? "X" : "O";
}


function newBoard() {
    return new Map([
        [1, null],
        [2, null],
        [3, null],
        [4, null],
        [5, null],
        [6, null],
        [7, null],
        [8, null],
        [9, null],
    ]);
}