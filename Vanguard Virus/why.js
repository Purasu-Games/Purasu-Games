var image = document.querySelector('img');
var imagew = image.width/2;
var imageh = image.height/2;
const body = document.querySelector('body');
const audio = document.querySelector('audio');
const div = document.querySelector('div');
const audio2 = new Audio('sfx3.wav')
const audio3 = new Audio('sfx2.wav')
const audio4 = new Audio('sfx4.wav')
var image2 = new Image(imagew*2, imageh*2)
const bodyw = body.clientWidth;
const bodyh = body.clientHeight;
let score = 0;
let centerw = bodyw/2-imagew;
let centery = bodyh/2 + 'px';
let Gamemode = 0;
const title = document.querySelector('h1');
var Infected = false;
const gameOverDiv = document.getElementById("gameOverDiv")
var retry = gameOverDiv.children.namedItem('Retry');
var menu = gameOverDiv.children.namedItem('Menu');


console.log(bodyw)
console.log(imageh + ' ' + bodyw + ' ' + bodyh + ' ' + imagew)
const bnInfected = div.children.namedItem('Infected');
const bnEasy = div.children.namedItem('Easy');
const bnNormal = div.children.namedItem('Normal');
const bnHard = div.children.namedItem('Hard');
const bnImpossible = div.children.namedItem('Impossible');
// lower case bn means it's a button

const bnWidthCombined = bnInfected.clientWidth + bnEasy.clientWidth + bnNormal.clientWidth + bnHard.clientWidth + bnImpossible.clientWidth;
const bnWidthCombinedMinusCenter = centerw - bnWidthCombined/3.4 + 'px';
var titleWidthMath = title.clientWidth/3 + 'px';

div.children.namedItem('Infected').style = "transform: translate(" + bnWidthCombinedMinusCenter + ", " + centery + "); color: purple;";
div.children.namedItem('Easy').style = "transform: translate(" + bnWidthCombinedMinusCenter + ", " + centery + "); color: royalblue;";
div.children.namedItem('Normal').style = "transform: translate(" + bnWidthCombinedMinusCenter + ", " + centery + "); color: seagreen;";
div.children.namedItem('Hard').style = "transform: translate(" + bnWidthCombinedMinusCenter + ", " + centery + "); color: orange; ";
div.children.namedItem('Impossible').style = "transform: translate(" + bnWidthCombinedMinusCenter + ", " + centery + "); color: crimson; ";
title.style = "transform: translate(" + titleWidthMath + ", " + centery + "); color: brown; ";

menu.style = "transform: translate(" + bnWidthCombinedMinusCenter + ", " + centery + "); color: royalblue; display:none;";
retry.style = "transform: translate(" + bnWidthCombinedMinusCenter + ", " + centery + "); color: purple; display:none;";
//My child is ALIVE!
image2.src = "toxicvader.png";
document.body.appendChild(image2);



//setup i guess
centerw = centerw + 'px';
image2.style = "transform: translate(" + centerw + ", " + centery + "); display:none;";
image.style = "transform: translate(" + centerw + ", " + centery + "); display:none;";
function Reset() {
    score = 0;

    image.style ="display:block; transform: translate(" + centerw + ", " + centery + ");"
    div.style ="display:none;"
    audio3.play()
    title.style = 'display:none;';
    menu.style = "transform: translate(" + bnWidthCombinedMinusCenter + ", " + centery + "); color: royalblue; display:none;";
    retry.style = "transform: translate(" + bnWidthCombinedMinusCenter + ", " + centery + "); color: yellow; display:none;";
    document.getElementById("demo").innerHTML = "score: " + score;
}

function Infected(params){
    Gamemode = 1000;
    image2.style ="display:block; transform: translate(" + centerw + ", " + centery + ");"
    image.style ="display:block; transform: translate(" + centerw + ", " + centery + ");"
    div.style ="display:none;"
    audio3.play()
    title.style = 'display:none;';
    Infected = true;
}

function Easy(params){
    Gamemode = 1300;
    image.style ="display:block; transform: translate(" + centerw + ", " + centery + ");"
    div.style ="display:none;"
    audio3.play()
    title.style = 'display:none;';
}

function Normal(params) {
    Gamemode = 1000;
    image.style ="display:block; transform: translate(" + centerw + ", " + centery + ");"
    div.style ="display:none;"
    audio3.play()
    title.style = 'display:none;';
}

function Hard(params) {
    Gamemode = 750;
    image.style ="display:block; transform: translate(" + centerw + ", " + centery + ");"
    div.style ="display:none;"
    audio3.play()
    title.style = 'display:none;';
}

function Impossible(params) {
    Gamemode = 500;
    image.style ="display:block; transform: translate(" + centerw + ", " + centery + ");"
    div.style ="display:none;"
    audio3.play()
    title.style = 'display:none;';
}

function ReloadP() {
    audio3.play()
    location.reload();
}
 
// this is the game part yay OwO

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

var randomX =  Math.round(getRandomArbitrary(1, bodyw));
var randomY =  Math.round(getRandomArbitrary(1, bodyh));

function Gameover() {
image2.style = "transform: translate(" + centerw + ", " + centery + "); display:none;";
image.style = "transform: translate(" + centerw + ", " + centery + "); display:none;";

title.style = " color: red; display:block; margin:0; width: 160px;";
var titleWidth = title.clientWidth;
titleWidth = bodyw/2 - titleWidth/2 + 'px';
title.innerHTML = "Gameover";
title.style = "transform: translate(" + titleWidth + ", " + centery + "); color: red; display:block; margin:0; width: 160px;";

menu.style = "transform: translate(" + okay + ", " + centery + "); color: blue; display:block; width:150px; margin:0;";
var okay = menu.clientWidth;
var okay =  bodyw/2 - okay/2 + 'px';
menu.style = "transform: translate(" + okay + ", " + centery + "); color: blue; display:block; width:150px; margin:0;";
retry.style = "transform: translate(" + okay + ", " + centery + "); color: yellow; display:block; width:150px; margin:0;";

console.log(bnWidthCombinedMinusCenter)
console.log(bodyw/2)
console.log(okay)
}

//score == tensTable[index]
let currentNumber = 0;
let tensTable = [];
function tens(params) {
  for (let index = 0; index < params; index++ ){
    currentNumber = currentNumber + 1;
    
    let newLength = tensTable.push(currentNumber*10)
   } 
 
}




function clicked() { 
    if (Infected == true) {
    tens(2)
    score = score + 1;
    document.getElementById("demo").innerHTML = "score: " + score;
    randomX =  Math.round(getRandomArbitrary(1, bodyw-200)) + 'px';
    randomY =  Math.round(getRandomArbitrary(1, bodyh-200)) + 'px';

    for (let index = 0; index <tensTable.length; index++){
        if (score == tensTable[index]) {
            console.log('yay')
            audio2.play();
        } else {
            audio.play();
        }
    }
    image2.style = "transform: translate(" + randomX + ", " + randomY + ");"; 
    randomX =  Math.round(getRandomArbitrary(1, bodyw-200)) + 'px';
    randomY =  Math.round(getRandomArbitrary(1, bodyh-200)) + 'px';
    image.style = "transform: translate(" + randomX + ", " + randomY + ");";
    console.log(image.x + ' ' + image.y)
     var myvary = setTimeout(Gameover,Gamemode);
    function clearT(params) {
        clearTimeout(myvary)
    }
    image.addEventListener("click",clearT)
    
    console.log(tensTable)

  
    image2.addEventListener('click', function(e) {
      clearT()
    var FTS = setTimeout(Gameover,1500)
    // For The Sound
    audio4.play()
    
    })

    }
   if (infected == false) {
       tens(2)
    score = score + 1;
    document.getElementById("demo").innerHTML = "score: " + score;
    randomX =  Math.round(getRandomArbitrary(1, bodyw-200)) + 'px';
    randomY =  Math.round(getRandomArbitrary(1, bodyh-200)) + 'px';


    for (let index = 0; index <tensTable.length; index++){
        if (score == tensTable[index]) {
            console.log('yay')
            audio2.play();
        } else {
            audio.play();
        }
    }
        
    
    image.style = "transform: translate(" + randomX + ", " + randomY + ");";
    console.log(image.x + ' ' + image.y)
     var myvary = setTimeout(Gameover,Gamemode);
    function clearT(params) {
        clearTimeout(myvary)
    }
    image.addEventListener("click",clearT)
    
    console.log(tensTable)
   }
    
}





 

//cheats




function hack(hacktype,hackparam) {
    if (hacktype == 'help') {
        return console.log(audio4)
    }
    if (hacktype == 'speed') {
        Gamemode = hackparam;
    }
}
