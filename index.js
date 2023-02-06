var colours = ["green","red","yellow","blue"];
var currentSeq = [];
var userSeq =[]
var currentLevel = 0;
var count =0;

function nextSeq(){
    ++currentLevel;
    $(".title").text("Level " + currentLevel)
    var number = Math.floor(Math.random()*4);
    console.log(number);
    var randomColor = colours[number];
    console.log(randomColor);
    currentSeq.push(randomColor);
    $("." + randomColor).fadeOut(100).fadeIn(100);
    var audio = new Audio("sounds/" + randomColor+ ".mp3");
    audio.play();
}

$(".btn").click(function(event){
    var chosen = event.target.id;
    userSeq.push(chosen);
    console.log(chosen);
    $("." + chosen).fadeOut(100).fadeIn(100);
    var audio = new Audio("sounds/" +chosen+ ".mp3");
    audio.play();
    if(userSeq[count] != currentSeq[count]){
        $(".title").text("Game Over")
        var audio = new Audio("sounds/wrong.mp3");
        audio.play();
        
        userSeq =[];
        count =0;
        currentSeq =[];
        currentLevel =0;
        setTimeout(function(){
            $(".title").text("Retry ?").one("click",nextSeq);
        }, 2000);
    }

    else if(currentSeq.length == userSeq.length){
        setTimeout(nextSeq, 1000);
        userSeq =[];
        count =0;
    }
    else{
        count ++;
    }

    
})

$("body").one("click",nextSeq);