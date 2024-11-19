let playerHeading=document.querySelector(".playerHeading");
playerHeading.innerHTML="Player-01";
let playerChances=document.querySelector(".playerChances");
let subHeading=document.querySelector(".subHeading");
let result=document.querySelector(".result");
result.style.display="none"

let box=document.querySelector(".box");
let congrats=document.querySelector(".congrats")

let playeroneInput=document.querySelector(".playerInput");
let playerTwoInput=document.querySelector(".playerTwoInput");
let playerThreeInput=document.querySelector(".playerThreeInput");
let playerFourInput=document.querySelector(".playerFourInput");

let oneBtn=document.querySelector(".submitBtn");
let twoBtn=document.querySelector(".twoBtn");
let threeBtn=document.querySelector(".threeBtn");
let fourBtn=document.querySelector(".fourBtn");

let small=document.querySelector("small");
let playerOneValue;
let playerChance=5;

oneBtn.addEventListener("click",()=>{

    if(playeroneInput.value==""){
         small.innerHTML="Please give a Number"
         small.style.display="block"
    }
    else{
           if(Number(playeroneInput.value)>0 && Number(playeroneInput.value)<=10){
            playerOneValue=playeroneInput.value;
            small.style.display="none";
            displayControll("player1hide")
            playerHeading.innerHTML="Player-02";
            subHeading.style.display="inline-block";
            playerChances.innerHTML=playerChance;

            }
            else{
            small.innerHTML="Please give a Number between 1 to 10"
            small.style.display="block"
           }
    }
    
})


twoBtn.addEventListener("click",()=>{

        if(playerTwoInput.value==""){
            small.innerHTML="Please give a Number"
            small.style.display="block"
       }
       else if(Number(playerTwoInput.value)>0 && Number(playerTwoInput.value)<=10){
                if(playerChance>1){
               playerChance--;
               playerChances.innerHTML=playerChance;
               let value=playerTwoInput.value;
               playerTwoInput.value="";
               small.style.display="none";
               displayControll("player1hide")
               playerHeading.innerHTML="Player-02";
             
               
                  if(playerOneValue==value){
                     result.innerHTML+=`Player 2 Winner <br/>`
                     displayControll("player2hide")
                 playerHeading.innerHTML="Player-03";
                 playerChance=5;
                 playerChances.innerHTML=playerChance;
                  }
                 }
                
               else{
                  result.innerHTML+=`Player 1 Winner <br/>`
                 displayControll("player2hide")
                 playerHeading.innerHTML="Player-03";
                 playerChance=5;
                 playerChances.innerHTML=playerChance;
          
              }
         }
         else{
            small.innerHTML="Please give a Number between 1 to 10"
            small.style.display="block"
           }
   
    
    
})

threeBtn.addEventListener("click",()=>{

        if(playerThreeInput.value==""){
            small.innerHTML="Please give a Number"
            small.style.display="block"
       }
       else if(Number(playerThreeInput.value)>0 && Number(playerThreeInput.value)<=10){
                if(playerChance>1){
               playerChance--;
               playerChances.innerHTML=playerChance;
               let value=playerThreeInput.value;
               playerThreeInput.value="";
               small.style.display="none";
               displayControll("player2hide")
               playerHeading.innerHTML="Player-03";
             
    
                  if(playerOneValue==value){
                     result.innerHTML+=`Player 3 Winner <br/>`
                     displayControll("player3hide")
                     playerHeading.innerHTML="Player-04";
                     playerChance=5;
                     playerChances.innerHTML=playerChance;
                  }
               
                 }
                
               else{
                        result.innerHTML+=`Player 1 Winner <br/>`
                 displayControll("player3hide")
                 playerHeading.innerHTML="Player-04";
                 playerChance=5;
                 playerChances.innerHTML=playerChance;
          
              }
         }
         else{
            small.innerHTML="Please give a Number between 1 to 10"
            small.style.display="block"
           }
   
    
})


fourBtn.addEventListener("click",()=>{

   if(playerFourInput.value==""){
       small.innerHTML="Please give a Number"
       small.style.display="block"
  }
  else if(Number(playerFourInput.value)>0 && Number(playerFourInput.value)<=10){
           if(playerChance>1){
          playerChance--;
          playerChances.innerHTML=playerChance;
          small.style.display="none";
          let value=playerFourInput.value;
          playerFourInput.value="";
          displayControll("player3hide")
          playerHeading.innerHTML="Player-04";
        
     
             if(playerOneValue==value){
                result.innerHTML+=`Player 4 Winner <br/>`
                box.style.display="none"
                result.style.display="block"
                congrats.style.display="block"
             }
             else if(playerChance==1){
               result.innerHTML+=`Player 1 Winner <br/>`
               box.style.display="none"
               result.style.display="block"
               congrats.style.display="block"
             }
             
          
            }
   
    }
    else{
       small.innerHTML="Please give a Number between 1 to 10"
       small.style.display="block"
      }

})
 


 function displayControll(type){

 if(type=="player1hide"){
    playeroneInput.style.display="none"
    oneBtn.style.display="none"
     playerTwoInput.style.display="block"
    twoBtn.style.display="block"
 }
 else if(type=="player2hide"){
    playerTwoInput.style.display="none"
    twoBtn.style.display="none"
    playerThreeInput.style.display="block"
    threeBtn.style.display="block"
 }
 else if(type=="player3hide"){
    playerThreeInput.style.display="none"
    threeBtn.style.display="none"
    playerFourInput.style.display="block"
    fourBtn.style.display="block"
 }
 else if(type=="player4hide"){
    playerFourInput.style.display="none"
    fourBtn.style.display="none"
 }
 


 }

