let buttonColours=["red","blue","green","yellow"];
let gamePattern=[];
let userClickedPattern=[];

let gameStarted = false;
let level = 0;


$(document).keydown(function(){
    if (!gameStarted){
        gameStarted = true;
        nextSequence();
        $("h1").text("Level " + level);
    }
});

function nextSequence(){
    userClickedPattern = [];
    let randomNumber = Math.floor(Math.random()*4);
    let randomChosenColor = buttonColours[randomNumber];
    gamePattern.push(randomChosenColor);

    $("#"+randomChosenColor).fadeOut(200).fadeIn(200);
    playSound(randomChosenColor);
    animatePress(randomChosenColor);

    level++;
    $("h1").text("Level " + level);
}

$(".btn").on("click",function(){
    let userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length-1);

})

function playSound(name){
    let audio = new Audio("sounds/"+name+".mp3")
    audio.play();
}

function animatePress(currentColor){
    $("."+currentColor).addClass("pressed");
    setTimeout(function(){
        $("."+currentColor).removeClass("pressed");
    },100);
}

function checkAnswer(currentLevel){
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length){
            setTimeout(function () {
                nextSequence();
            }, 500);
        }
    }else{
        console.log("wrong");

        let audio = new Audio("sounds/wrong.mp3")
        audio.play();

        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);
        
        startOver();
    }
}
function startOver(){
    level = 0;
    gamePattern=[];
    gameStarted = false;
    $("h1").text("Game Over, Press Any Key to Restart");
}