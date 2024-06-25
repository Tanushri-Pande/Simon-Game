let gameSeq=[];
let userSeq=[];
let btns=["red","green","yellow","purple"];
let started=false;
let level=0;

// if any key is pressed
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started");
        started=true;
        levelUp();
    }
});

// flashing btn by game
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },300);

}

//flashing btn by user 
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);

}

let h2=document.querySelector("h2");

 function levelUp(){
    userSeq=[];//after game is over make arrya null
    level++;
    h2.innerText=`Level ${level}`;

    //generating random flash
   let randIdx=Math.floor(Math.random()*3);
   let randColor=btns[randIdx];
   let randBtn=document.querySelector(`.${randColor}`);
//    console.log(randIdx);
//    console.log(randColor);
//    console.log(randBtn);
     gameSeq.push(randColor); //pushing genrated color in gameseq array
     console.log(gameSeq);
     
     gameFlash(randBtn);
 }

 function checkAns(idx){

    //console.log("curr idx",level)
   if(userSeq[idx]===gameSeq[idx]) {
    if(userSeq.length==gameSeq.length){
        setTimeout(levelUp,1000);
    }
   }
   else{
       h2.innerHTML=`GAME OVER ! your score was <b>${level}</b> 1<br> press any key to start.`;
       document.querySelector("body").style.backgroundColor="red";
       setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
       },150)
       reset();
    }
 }  

 function btnPress(){

   console.log(this);//this is allbtns 
   let btns=this;
   userFlash(btns);

   //printing color of btn press by user
    userColor=btns.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);//push gen color to array usr

    //check
    checkAns(userSeq.length-1);
 }


 // when user press any btn
 let allBtns=document.querySelectorAll(".btn");
 for (btn of allBtns){
    btn.addEventListener("click",btnPress);
 }

 function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
 }