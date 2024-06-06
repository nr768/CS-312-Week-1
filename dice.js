// add event listener for if page is refreshed ( unloaded )
function main() {
    // when page is refreshed
    // grab a random int from 1 to 6 for player 1 ( Pseudo Random number generator)
    let num1 = getRandDice();
    let num2 = getRandDice();
    
    // determine which player has the larger number
    // if player 1 had the larger num
    if( num1 > num2) {
        // display the header for player 1 win with the flag on the left side
        document.querySelector("h1").innerHTML = "🚩 Player 1 Wins";
    }
    
    // otherwise check if player 2 has the bigger num
    else if(num1 < num2){
        // display the header for player 2 win with the flag on the right side
        document.querySelector("h1").innerHTML = "Player 2 Wins 🚩";
    }
    
    // otherwise assume draw
    else{
        // display the header for tie
        document.querySelector("h1").innerHTML = "Draw";
    }

    // display the dice
    let dice1Img = getDiceImg(num1);
    let dice2Img = getDiceImg(num2);
    
    // display the dice that matches the number for player 1
    document.querySelector(".img1").src = dice1Img;
    
    // display the dice that matches the number for player 2
    document.querySelector(".img2").src = dice2Img;
    
}
    
function getRandDice(){
    return Math.floor(Math.random() * 6 ) + 1;
}
    
function getDiceImg(diceNum){
    // create name of image dice(NUM).png
    return diceLoc = "images/dice" + diceNum + ".png";
}

main();