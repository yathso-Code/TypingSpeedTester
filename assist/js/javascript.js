let word =[
 "This is yatharth shukla and iam here to do study",
 "Hey how was going and we are here to teach about javaScript",
 "This is pranjal shukla and I am here to do my study for the purpode of Bca and want a job from as Reactjs Developer"
]

let mes = document.getElementById("message");
let text_box = document.getElementById("text_box");
let btn = document.getElementById("btn");
let StartTime, EndTime;


// start game function
function playGame(){
 let randomNumber = Math.floor(Math.random()*word.length);
 //console.log(randomNumber);
 mes.innerText = word[randomNumber];
 let date = new Date();
 StartTime = date.getTime();
 btn.innerText = "Done";  
}

// End game function  
function endGame(){
 btn.innerText = "Start";
 let date = new Date();
 EndTime = date.getTime();
 let TotalTime = ((EndTime - StartTime)/ 1000)
 //    console.log("Timing of word=>"+ TotalTime);
 let totalStr = text_box.value;
 let wordCount = wordCou(totalStr);

 let speed = Math.round((wordCount / TotalTime)* 60);
 let finalMes = "You Typing Speed is "+speed+" word per minutes";
 finalMes +=compareWord(mes.innerText, totalStr );
 mes.innerText = finalMes;

}  

//   compayer words from text and words
  function compareWord(str1, str2){
     let words1 = str1.split(" ");
     let words2 = str2.split(" ");
     let cnt = 0;

     words1.forEach((value, index)=>{
          if(value == words2[index]){
             cnt++;
          }
     });

     let errorWord = (words1.length - cnt);
     return (" "+cnt + " correct out of " +words1.length+ " words and the total number of error are "+ errorWord+ " "); 
  }


// counting the word in text_box
const  wordCou=(str)=>{
     let response = str.split(" ").length;
    // console.log("Total word=>"+response);
     return response;
}                 

// start and stop game button
btn.addEventListener("click", ()=>{
 if(btn.innerText == "Start"){
     text_box.disable= false;
     playGame();
 }else if(btn.innerText = "Done"){
     text_box.disable = true;
     endGame();
 }
})
