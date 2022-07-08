//live server port: http://127.0.0.1:5500/
var generatedNum = 0;
var grades = ['A+','A','A-','B+','B','B-','C+','C','C-','D+','D','D-','F'];
var classTag = ["CIS120", "CIS131", "CIS150", "CIS220", "CIS235", "CIS295", "CIS250"];
var className = ["Python", "Web Dev II", "C#","Game Dev","Cloud Computing","3D Modeling","Database & Query"]
var slider1 = document.getElementById('customRange1');
var slider2 = document.getElementById('customRange2');
var slider3 = document.getElementById('customRange3');
var slider4 = document.getElementById('customRange4');
var label1 = document.getElementById('custran1');
var label2 = document.getElementById('custran2');
var label3 = document.getElementById('custran3');
var label4 = document.getElementById('custran4');
var viewport = document.getElementById('viewport');
var box = document.getElementById('cube');
window.addEventListener('load', function(){
    console.log('%cCreated by Josh!!!', 'font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)');
    console.log('%cVersion 1.4.2', 'font-size: 30px;color: white; text-shadow: 2px 2px 0 rgb(200,200,200) , 4px 4px 0 rgb(160,160,160) , 6px 6px 0 rgb(130,130,130) , 8px 8px 0 rgb(100,100,100) , 10px 10px 0 rgb(70,70,70) , 12px 12px 0 rgb(30,30,30) , 14px 14px 0 rgb(0,0,0)');
    // orientation on start
    // 187, 230, 220
    var rotX = 187.00;
    var rotY = 230.00;
    var rotZ = 220.00;
    label2.innerHTML = "X: " + rotX + " deg";
    label3.innerHTML = "Y: " + rotY + " deg";
    label4.innerHTML = "Z: " + rotZ + " deg";
    slider2.value = rotX/360*100;
    slider3.value = rotY/360*100;
    slider4.value = rotZ/360*100;
    box.style.transform= "rotateX("+rotX+"deg) rotateY("+rotY+"deg) rotateZ("+rotZ+"deg)";
    // moving the player call this func
    playerMove();
});
var body = document.getElementsByTagName('body')[0];
var playerActive = 1;
var curturn = document.getElementById('turn');
var boardHeight = 500;
var oneMoveDistance = 100;
var player1 = document.getElementById('player1');
var player2 = document.getElementById('player2');
var player1Travel = 0;
var player2Travel = 0;
var i = 0;
var gameBoard = document.getElementById('game_board');
var gradeUpdate = document.getElementById('current_grade');
var classTagH = document.getElementById('classTag');
var classNameH = document.getElementById('className');
var gtoggle = 0;
gradeUpdate.addEventListener('click',function(){
    if(gtoggle==0){
        gradeUpdate.style.opacity = "100%";
        gtoggle=1;
    }else if(gtoggle=1){
        gradeUpdate.style.opacity = "0%";
        gtoggle=0;
    }
});
function playerMove(curPlayer, diceRolled){
    //get screen size to change distance of 1 move
    //also changes width of board based on height of screen
    if(window.getComputedStyle(body).backgroundColor=="rgb(107, 107, 107)"){
        const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
        boardHeight = vh;
        boardHeight = (parseInt(boardHeight))*0.5;
        oneMoveDistance = boardHeight/6;
        boardHeight = boardHeight.toString();
        gameBoard.style.width = `${boardHeight}px`;
        gameBoard.style.height = `${boardHeight}px`;
        gameBoard.style.boxShadow = `inset 0px 0px 0px ${parseInt(boardHeight)/6}px rgb(255, 255, 255), inset 0px 0px 0px ${parseInt(boardHeight)/6}px rgb(0, 0, 0), 0px 0px 0px 5px black`;
    }else{
        const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
        boardHeight = vh;
        boardHeight = (parseInt(boardHeight))*0.7;
        oneMoveDistance = boardHeight/6;
        boardHeight = boardHeight.toString();
        gameBoard.style.width = `${boardHeight}px`;
        gameBoard.style.height = `${boardHeight}px`;
        gameBoard.style.boxShadow = `inset 0px 0px 0px ${parseInt(boardHeight)/6}px rgb(255, 255, 255), inset 0px 0px 0px ${parseInt(boardHeight)/6}px rgb(0, 0, 0), 0px 0px 0px 5px black`;
    }
    oneMoveDistance = oneMoveDistance.toFixed(2);
    A1 = `translateX(${oneMoveDistance*0}px) translateY(0px)`;
    A2 = `translateX(${oneMoveDistance*1}px) translateY(0px)`;
    A3 = `translateX(${oneMoveDistance*2}px) translateY(0px)`;
    A4 = `translateX(${oneMoveDistance*3}px) translateY(0px)`;
    A5 = `translateX(${oneMoveDistance*4}px) translateY(0px)`;
    A6 = `translateX(${oneMoveDistance*5}px) translateY(0px)`;

    B2 = `translateX(${oneMoveDistance*5}px) translateY(${oneMoveDistance*1}px)`;
    C2 = `translateX(${oneMoveDistance*5}px) translateY(${oneMoveDistance*2}px)`;
    D2 = `translateX(${oneMoveDistance*5}px) translateY(${oneMoveDistance*3}px)`;
    E2 = `translateX(${oneMoveDistance*5}px) translateY(${oneMoveDistance*4}px)`;

    F6 = `translateX(${oneMoveDistance*5}px) translateY(${oneMoveDistance*5}px)`;
    F5 = `translateX(${oneMoveDistance*4}px) translateY(${oneMoveDistance*5}px)`;
    F4 = `translateX(${oneMoveDistance*3}px) translateY(${oneMoveDistance*5}px)`;
    F3 = `translateX(${oneMoveDistance*2}px) translateY(${oneMoveDistance*5}px)`;
    F2 = `translateX(${oneMoveDistance*1}px) translateY(${oneMoveDistance*5}px)`;
    F1 = `translateX(0px) translateY(${oneMoveDistance*5}px)`;

    E1 = `translateX(0px) translateY(${oneMoveDistance*4}px)`;
    D1 = `translateX(0px) translateY(${oneMoveDistance*3}px)`;
    C1 = `translateX(0px) translateY(${oneMoveDistance*2}px)`;
    B1 = `translateX(0px) translateY(${oneMoveDistance*1}px)`;
    var boardLand = [A1,A2,A3,A4,A5,A6,B2,C2,D2,E2,F6,F5,F4,F3,F2,F1,E1,D1,C1,B1];
    //each player will have the same code going on
    //each board piece is stored in an array with styles that will translate the players to that position
    //the dice that is rolled on the current move is stored in an array
    //based on what number is rolled, the player will move to the corresponding board piece
    if(curPlayer==1){
        //check if board piece goes around corner
        player1Travel += diceRolled;
        if(player1Travel>=20){
            //since the player can loop around the board, and the board has 20 pieces
            //if the total combined moves is greater than 20
            // subtract 20 so that the variable can be used as an index to guide the player
            //to the correct board piece, or else the playertravel would increase but it wouldn't move anywhere
            player1Travel = player1Travel-20;
        }
        player1.style.transform = `${boardLand[player1Travel]}`;
        getBoardPeice(curPlayer, player1Travel);
        player1.style.filter = "drop-shadow(-3px -3px 2px black) grayscale(100%) saturate(0%)";
        player2.style.filter = "drop-shadow(-3px -3px 2px black) grayscale(0%) saturate(999%)";
    }
    if(curPlayer==2){
        player2Travel += diceRolled;
        if(player2Travel>=20){
            player2Travel = player2Travel-20;
        }
        player2.style.transform = `${boardLand[player2Travel]}`;
        getBoardPeice(curPlayer, player2Travel);
        player1.style.filter = "drop-shadow(-3px -3px 2px black) grayscale(0%) saturate(999%)";
        player2.style.filter = "drop-shadow(-3px -3px 2px black) grayscale(100%) saturate(0%)";
    }
    gradeUpdate.style.opacity = "0%";
}
// if you roll the same number more than 3 times
//the toggles will automatically switch between different
// transform styles to make the cabe appear as though it is spinning
cube.addEventListener('click', spinCube);
var previousRoll = 0;
function spinCube(){
    var diceRolled = getRandomInt(6)+1;
    diceRolling(diceRolled);
    // get the string for the current style
    var txt = box.style.transform;
    const splitArr = txt.split(" ");
    // each axis orientation will be stored in an array
    re = /\((.*)\)/;
    //this will only get the style between the parenthesis
    x = splitArr[0].match(re)[1];
    y = splitArr[1].match(re)[1];
    z = splitArr[2].match(re)[1];
    //now get only the numbers from the string
    x = x.replace(/\D/g, "");
    y = y.replace(/\D/g, "");
    z = z.replace(/\D/g, "");
    slider2.value = x/360*100;
    slider3.value = y/360*100;
    slider4.value = z/360*100;
    label2.innerHTML = "X: " + x + " deg";
    label3.innerHTML = "Y: " + y + " deg";
    label4.innerHTML = "Z: " + z + " deg";
    //uncomment the next like to see what was rolled on each dice click
    //console.log("dice rolled ", diceRolled)
    if(playerActive==1){
        curturn.innerHTML = "Player 2 turn";
        playerMove(playerActive,diceRolled);
        playerActive = 2;
    }else{
        curturn.innerHTML = "Player 1 turn";
        playerMove(playerActive,diceRolled);
        playerActive = 1;
    }
    //gradeUpdate.innerHTML = passFail();
    //classTagH.innerHTML = getClassTag();
    //classNameH.innerHTML = getClassName();
}
// change color of every board peice on load
var boardPiece = document.getElementsByClassName('board_land');
const PATH = "images/classes/";
var boardImgs = ["3d.png","csharp.png","cloud.png","game.png","html.png","java.png","sql.png","python.png"];
var currentBoardMap = [];
var currentBoarMapIndexes = [];
// the following quantity of variables is a sin, and im sorry :/
var atIndex6;
var atIndex7;
var atIndex8;
var atIndex9;
var atIndex10;
var atIndex11;
var atIndex12;
var atIndex13;
var atIndex14;
var atIndex15;
var atIndex16;
var atIndex17;
var atIndex18;
var atIndex19;

for(i=0; i<boardPiece.length; i++){
    R = getRandomInt(255);
    G = getRandomInt(255);
    B = getRandomInt(255);
    A = (getRandomInt(99)+1)/100;
    var index = getRandomInt(boardImgs.length);
    //for radnom rgba values
    boardPiece[i].style.backgroundColor = "rgba("+R+","+G+","+B+","+A+")";
    //for random classes
    boardPiece[i].style.backgroundImage = `url(${PATH+boardImgs[index]})`;
    currentBoardMap.push(boardImgs[index]);
    currentBoarMapIndexes.push(index);
    // to see the error in tracking board peices uncomment the following
    //boardPiece[i].innerHTML = i;
    if(i==6){atIndex6 = boardImgs[index];}
    if(i==7){atIndex7 = boardImgs[index];}
    if(i==8){atIndex8 = boardImgs[index];}
    if(i==9){atIndex9 = boardImgs[index];}
    if(i==10){atIndex10 = boardImgs[index];}
    if(i==11){atIndex11 = boardImgs[index];}
    if(i==12){atIndex12 = boardImgs[index];}
    if(i==13){atIndex13 = boardImgs[index];}
    if(i==14){atIndex14 = boardImgs[index];}
    if(i==15){atIndex15 = boardImgs[index];}
    if(i==16){atIndex16 = boardImgs[index];}
    if(i==17){atIndex17 = boardImgs[index];}
    if(i==18){atIndex18 = boardImgs[index];}
    if(i==19){atIndex19 = boardImgs[index];}
}
boardPiece[6].style.backgroundImage = `url(${PATH+atIndex19})`;
boardPiece[7].style.backgroundImage = `url(${PATH+atIndex6})`;
boardPiece[8].style.backgroundImage = `url(${PATH+atIndex18})`;
boardPiece[9].style.backgroundImage = `url(${PATH+atIndex7})`;
boardPiece[10].style.backgroundImage = `url(${PATH+atIndex17})`;
boardPiece[11].style.backgroundImage = `url(${PATH+atIndex8})`;
boardPiece[12].style.backgroundImage = `url(${PATH+atIndex16})`;
boardPiece[13].style.backgroundImage = `url(${PATH+atIndex9})`;
boardPiece[14].style.backgroundImage = `url(${PATH+atIndex15})`;
boardPiece[15].style.backgroundImage = `url(${PATH+atIndex14})`;
boardPiece[16].style.backgroundImage = `url(${PATH+atIndex13})`;
boardPiece[17].style.backgroundImage = `url(${PATH+atIndex12})`;
boardPiece[18].style.backgroundImage = `url(${PATH+atIndex11})`;
boardPiece[19].style.backgroundImage = `url(${PATH+atIndex10})`;

// to visualize how i track the pieces uncomment the following
// boardPiece[6].innerHTML = 19;
// boardPiece[7].innerHTML = 6;
// boardPiece[8].innerHTML = 18;
// boardPiece[9].innerHTML = 7;
// boardPiece[10].innerHTML = 17;
// boardPiece[11].innerHTML = 8;
// boardPiece[12].innerHTML = 16;
// boardPiece[13].innerHTML = 9;
// boardPiece[14].innerHTML = 15;
// boardPiece[15].innerHTML = 14;
// boardPiece[16].innerHTML = 13;
// boardPiece[17].innerHTML = 12;
// boardPiece[18].innerHTML = 11;
// boardPiece[19].innerHTML = 10;
//boardPiece[i].style.backgroundImage = `url(${PATH+boardImgs[index]})`;

var settings = document.getElementById('settings');
var devTools = document.getElementById('dev_tools');
var exitBtn = document.getElementById('exit');
settings.addEventListener('click', function(){
    devTools.style.visibility = "visible";
    devTools.style.animation ="fadein 0.5s ease forwards";
});
exitBtn.addEventListener('click', function(){
    devTools.style.visibility = "hidden";
    devTools.style.animation ="";
});
slider2.addEventListener('input', mover);
slider3.addEventListener('input', mover);
slider4.addEventListener('input', mover);
function mover(){
    box.style.animation= "";
    slideCube(slider2.value, slider3.value, slider4.value);
}
function slideCube(x,y,z){
    x = ((x/100)*360).toFixed(2);
    y = ((y/100)*360).toFixed(2);
    z = ((z/100)*360).toFixed(2);
    box.style.transform = "rotateX("+x+"deg) rotateY("+y+"deg) rotateZ("+z+"deg)"
    label2.innerHTML = "X: " + x + " deg";
    label3.innerHTML = "Y: " + y + " deg";
    label4.innerHTML = "Z: " + z + " deg";
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
var currentBoardPeice;
var daImg;

var player1Collected = [];
var player2Collected = [];
var player1CollectDisplay = document.getElementById('classImg1');
var player2CollectDisplay = document.getElementById('classImg2');
function getBoardPeice(curPlayer, playertravel){
    
    //get the amount of space travelled in total
    //using the currentBoardMap, go to the index of total travelled space
    //using this position as an index, get the image from boardImgs
    var landedOn = currentBoardMap[playertravel]
    var classImg = document.createElement('img');
    classImg.id = "collectedClass";
    gradeUpdate.innerHTML = passFail();
    if(curPlayer==1){
        if(grades.indexOf(grade)<8){
            player1Collected.push(landedOn);
        }
        //check for repeat variables in array
        for(i=0; i<player1Collected.length; i++){
            classImg.src = PATH+player1Collected[i];
            player1CollectDisplay.appendChild(classImg);
        }
    }
    if(curPlayer==2){
        //if the current grade is C or above, push it to the array
        if(grades.indexOf(grade)<8){
            player2Collected.push(landedOn);
        }
        console.log(player2Collected);
        for(i=0; i<player2Collected.length; i++){
            classImg.src = PATH+player2Collected[i];
            player2CollectDisplay.appendChild(classImg);
            console.log(classImg)
        }
    }
    classTagH.innerHTML = `Player ${curPlayer} landed on`;
    classNameH.innerHTML = "<img width='50px' src='"+PATH+landedOn+"'></img>";
}



























var grade;
var quote = document.getElementById('quote');
var quotes = ["You failed the class and your mother no longer loves you. Sorry kid.", "You didn't fail! WOW!", "It\'s not an A+, do better.", "Ayyyyyyy (minus😐)", "Your teacher didn\'t round your 89.99% to 90, tough luck.", "🅱️","I mean it\'s better than a C.", "This isn\'t CIS190, what are you doing???", "You\'re hanging on by a (single) thread, but you made it.", "Ooooh that\'s gotta hurt", "Well, atleast it\'s not a D.", "Well, atleast it\'s not a D-.", "Well, atleast it\'s not an F."];

// below is code that DOES NOT affect the gameplay or outcome
// it is PURELY for styling the page and making it responsive
// change color of the display where the Grade is displayed based on what grade you have
function passFail(){
    result = Math.floor(Math.random() * 13);
    grade = grades[result];
    var gradeCon = document.getElementById('current_grade');
    if(grade=="A+"){
        quote.innerHTML = quotes[1];
        gradeCon.style.backgroundColor= 'rgb(173, 233, 161)';
        gradeCon.style.boxShadow='inset 0px 0px 50px rgb(30, 253, 0)';
    }else if(grade=="A"){
        quote.innerHTML = quotes[2];
        gradeCon.style.backgroundColor= 'rgb(173, 233, 161)';
        gradeCon.style.boxShadow='inset 0px 0px 50px rgb(96, 151, 89)';
    }else if(grade=="A-"){
        quote.innerHTML = quotes[3];
        gradeCon.style.backgroundColor= 'rgb(173, 233, 161)';
        gradeCon.style.boxShadow='inset 0px 0px 50px rgb(255, 0, 0)';
    }else if(grade=="B+"){
        quote.innerHTML = quotes[4];
        gradeCon.style.backgroundColor= 'rgb(241, 232, 151)';
        gradeCon.style.boxShadow='inset 0px 0px 50px rgb(30, 253, 0)';
    }else if(grade=="B"){
        quote.innerHTML = quotes[5];
        gradeCon.style.backgroundColor= 'rgb(241, 232, 151)';
        gradeCon.style.boxShadow='inset 0px 0px 50px rgb(96, 151, 89)';
    }else if(grade=="B-"){
        quote.innerHTML = quotes[6];
        gradeCon.style.backgroundColor= 'rgb(241, 232, 151)';
        gradeCon.style.boxShadow='inset 0px 0px 50px rgb(255, 0, 0)';
    }else if(grade=="C+"){
        quote.innerHTML = quotes[7];
        gradeCon.style.backgroundColor= 'rgb(223, 209, 91)';
        gradeCon.style.boxShadow='inset 0px 0px 50px rgb(30, 253, 0)';
    }else if(grade=="C"){
        quote.innerHTML = quotes[8];
        gradeCon.style.backgroundColor= 'rgb(230, 212, 57)';
        gradeCon.style.boxShadow='inset 0px 0px 50px rgb(96, 151, 89)';
    }else if(grade=="C-"){
        quote.innerHTML = quotes[9];
        gradeCon.style.backgroundColor= 'rgb(230, 212, 57)';
        gradeCon.style.boxShadow='inset 0px 0px 50px rgb(255, 0, 0)';
    }else if(grade=="D+"){
        quote.innerHTML = quotes[10];
        gradeCon.style.backgroundColor= 'rgb(214, 98, 30)';
        gradeCon.style.boxShadow='inset 0px 0px 50px rgb(30, 253, 0)';
    }else if(grade=="D"){
        quote.innerHTML = quotes[11];
        gradeCon.style.backgroundColor= 'rgb(247, 143, 83)';
        gradeCon.style.boxShadow='inset 0px 0px 50px rgb(96, 151, 89)';
    }else if(grade=="D-"){
        quote.innerHTML = quotes[12];
        gradeCon.style.backgroundColor= 'rgb(214, 98, 30)';
        gradeCon.style.boxShadow='inset 0px 0px 50px rgb(255, 0, 0)';
    }else if(grade=="F"){
        quote.innerHTML = quotes[0];
        gradeCon.style.backgroundColor= 'rgb(216, 110, 96)';
        gradeCon.style.boxShadow='inset 0px 0px 50px rgb(148, 11, 11)';
    }
    return grade;
}
// logic for rolling dice so that even if you get the same number an infinite amount of times, it will always have a spinning transformation and not be stuck on the same side
var toggle1 = 0;
var toggle2 = 0;
var toggle3 = 0;
var toggle4 = 0;
var toggle5 = 0;
var toggle6 = 0;
function diceRolling(diceRolled){
    if(diceRolled==1){
        if(previousRoll==diceRolled){
            if(toggle1==0){
                box.style.transform = "rotateX(360deg) rotateY(360deg) rotateZ(360deg)";
                toggle1 = 1;
            }else{
                box.style.transform = "rotateX(0deg) rotateY(0deg) rotateZ(0deg)";
                toggle1 = 0;
            }
        }else{
            box.style.transform = "rotateX(0deg) rotateY(0deg) rotateZ(0deg)";
        }
        previousRoll = diceRolled;
    }
    if(diceRolled==2){
        if(previousRoll==diceRolled){
            if(toggle2==0){
                box.style.transform = "rotateX(720deg) rotateY(630deg) rotateZ(360deg)";
                toggle2 = 1;
            }else{
                box.style.transform = "rotateX(360deg) rotateY(270deg) rotateZ(0deg)";
                toggle2 = 0;
            }
        }else{
            box.style.transform = "rotateX(360deg) rotateY(270deg) rotateZ(0deg)";
        }
        previousRoll = diceRolled;
    }
    if(diceRolled==3){
        if(previousRoll==diceRolled){
            if(toggle3==0){
                box.style.transform = "rotateX(540deg) rotateY(720deg) rotateZ(540deg)";
                toggle3 = 1;
            }else{
                box.style.transform = "rotateX(180deg) rotateY(360deg) rotateZ(180deg)";
                toggle3 = 0;
            }
        }else{
            box.style.transform = "rotateX(180deg) rotateY(360deg) rotateZ(180deg)";
        }
        previousRoll = diceRolled;
    }
    if(diceRolled==4){
        if(previousRoll==diceRolled){
            if(toggle4==0){
                box.style.transform = "rotateX(540deg) rotateY(450deg) rotateZ(540deg)";
                toggle4 = 1;
            }else{
                box.style.transform = "rotateX(180deg) rotateY(90deg) rotateZ(180deg)";
                toggle4 = 0;
            }
        }else{
            box.style.transform = "rotateX(180deg) rotateY(90deg) rotateZ(180deg)";
        }
        previousRoll = diceRolled;
    }
    if(diceRolled==5){
        if(previousRoll==diceRolled){
            if(toggle5==0){
                box.style.transform = "rotateX(450deg) rotateY(540deg) rotateZ(540deg)";
                toggle5 = 1;
            }else{
                box.style.transform = "rotateX(90deg) rotateY(180deg) rotateZ(180deg)";
                toggle5 = 0;
            }
        }else{
            box.style.transform = "rotateX(90deg) rotateY(180deg) rotateZ(180deg)";
        }
        previousRoll = diceRolled;
    }
    if(diceRolled==6){
        if(previousRoll==diceRolled){
            if(toggle6==0){
                box.style.animation = "cube2 5s linear forwards";
                box.style.transform = "rotateX(630deg) rotateY(540deg) rotateZ(540deg)";
                toggle6 = 1;
            }else{
                box.style.animation = "cube 5s linear forwards";
                box.style.transform = "rotateX(270deg) rotateY(180deg) rotateZ(180deg)";
                toggle6 = 0;
            }
        }else{
            box.style.animation = "cube 5s linear forwards";
            box.style.transform = "rotateX(270deg) rotateY(180deg) rotateZ(180deg)";
        }
        previousRoll = diceRolled;
        var sides = document.getElementsByClassName('side');
        for(i=0;i<sides.length;i++){
            sides[i].style.animation = "color 2s linear infinite, glowEdges 2s linear infinite";
            sides[i].innerHTML = "6";
        }
    }else{
        var sides = document.getElementsByClassName('side');
        for(i=0;i<sides.length;i++){
            sides[i].style.boxShadow = "inset 0px 0px 60px 20px red, 0px 0px 5px 0px rgb(255, 255, 255)"; 
            sides[i].style.animation = "";
            sides[i].innerHTML = i+1;
        }
        box.style.animation = "";
    }
}
// const pickr1 = new Pickr({
//     el: '#color-picker-1',
//     default: "303030",
//     components: {
//       preview: true,
//       opacity: true,
//       hue: true,
  
//       interaction: {
//         hex: true,
//         rgba: true,
//         hsla: true,
//         hsva: true,
//         cmyk: true,
//         input: true,
//         clear: true,
//         save: true
//       }
//     }
//   });
