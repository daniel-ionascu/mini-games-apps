function rngNumber(){
    let numberLeft = Math.floor(Math.random() * 6)+1;
    let numberRight = Math.floor(Math.random() * 6)+1;

    const diceLeft = document.getElementById("img1");
    const diceRight = document.getElementById("img2");

    if (x = numberLeft){
        diceLeft.src = "images/dice"+x+".png";
    }
    if (y = numberRight){
        diceRight.src = "images/dice"+y+".png";
    }

    const rollDices = document.getElementById("roll--dice");

    if(x==y){
        rollDices.innerHTML = "Draw!";
    }
    else if(x>y){
        rollDices.innerHTML = "Left Wins!";
    }
    else{
        rollDices.innerHTML = "Right Wins!";
    }
}



