// menu button function
let menubarbutton =document.querySelector('.menubarbutton');
let isOriginal = true;

menubarbutton.addEventListener('click',()=>{
  const leftscroll =document.querySelector('.left');
  const rightscroll =document.querySelector('.right');
 
  if (isOriginal) {
    leftscroll.style.display = 'block';
    rightscroll.style.width = '75vw';
    
     }
     else {  leftscroll.style.display = 'none';
      rightscroll.style.width = '100vw';
     } 
       isOriginal = !isOriginal;

})


// mute setting in music
let music1 = true;
let audiobutton =document.querySelector('.music');
audiobutton.addEventListener('click',()=>{
  const audio =document.querySelector('.music');
  if (music1) {
    audio.innerHTML='music <label for="music1"><audio id="audio" src="before.mp3" autoplay loop muted></audio><div id="music1"><i class="fa-solid fa-volume-xmark"></i>--OFF</div></label>';
    
     }
     else {  
      audio.innerHTML='music <label for="music1"><audio id="audio" src="before.mp3" autoplay loop></audio><div id="music1"><i class="fa-solid fa-music"></i>--ON</div></label>';
     } 
 
     music1 = !music1;
})

// action after pressing start button 
let startbutton =document.querySelector('.start');
startbutton.addEventListener('click',()=>{
  const right =document.querySelector('.right');
  const audio =document.querySelector('.music');
   right.innerHTML='';
    audio.innerHTML='music <label for="music1"><audio id="audio" src="after.mp3" autoplay loop></audio><div id="music1"><i class="fa-solid fa-music"></i>--ON</div></label>';
    right.innerHTML=' <ol><h1>Rules of game</h1><li>computer will choose a no. between 1 to 100 and you have to guess the no.</li><li> total ten attempts will given to you to guess.</li><li>don\'t choose no. less than 1 or greater than 100,otherwise attempts will deducted in this case.</li><li>enter number only, otherwise attempts will deducted in this case.</li><li> all the best don\'t see my js code it will declared as cheating if you are a developer.</li><li>please  wait .. till 3 seconds for proper response otherwise your chances would effect.</li></ol><button class="oku" onclick="oku()">yes, i understand</button>'; 

})
const random =Math.floor(Math.random()*100);
// action after pressing rules and button below (oku button)
function oku(){
  const right =document.querySelector('.right');
  right.innerHTML='';
    right.innerHTML='<div class="maincontainer"><img src="thinking1.gif" alt=""><input type="number" placeholder="enter your guessed number here"  id="input"><button class="enterinput" onclick="guessed()">i think</button><h1 class="output" style="color: red;"></h1></div>'; 
}

let won = true;
let i =1;
let soundeffect =document.querySelector('#soundeffect');
// actual function of guessing No
let guessed =()=>{
  const right =document.querySelector('.right');
  const input =document.querySelector('#input');
  let k = input.value;
  let inputvalue =Number.parseInt(k);
  const output =document.querySelector('.output');
  if(i <10){
    if(inputvalue<=100 && inputvalue >0){
        if(inputvalue<random){
          won= false;
            output.innerHTML='<img src="loading.gif" alt="">';
            setTimeout(()=>{
              soundeffect.setAttribute('src', 'failure.mp3');
          output.innerHTML =`wrong guess.. try again your entered number is "LESSER" than computer's guessed no.`;
          input.value ='';
            },2000 );

        }
        else if(inputvalue>random){
          won= false;
            output.innerHTML='<img src="loading.gif" alt="">';
            setTimeout(()=>{
              soundeffect.setAttribute('src', 'failure.mp3');
              output.innerHTML =`wrong guess.. try again your entered number is "GREATER" than computer's guessed no.`;
              input.value ='';
            },2000 );

         
        }
        else{
          won =true;
            output.innerHTML='<img src="loading.gif" alt="">';

            setTimeout(()=>{

              soundeffect.setAttribute('src', 'cheering.mp3');
              right.innerHTML='<div class="maincontainer"><button class="tryagain" onclick="reloadPage()"; i =1;">Play again</button><img src="boy.gif" alt=""><h1 class="output" style="color: green;"></h1></div>';
              const output =document.querySelector('.output');
              output.innerText =`GREAT JOB "${random}" is the correct no.`;
            },2000 );
         
          
        };
    };
   
    
  }
  else{
    won= false;
    const right =document.querySelector('.right');
  right.innerHTML='';
    right.innerHTML='<div class="maincontainer"><img src="loading.gif" alt=""></div>'; 
   setTimeout(()=>{
    soundeffect.setAttribute('src', 'gameover.mp3');
    right.innerHTML='<div class="maincontainer"><button class="tryagain" onclick="reloadPage()"; i =1;">try again</button><img src="lose.gif" alt=""><h1 class="output" style="color: red;"></h1></div>';
    const output =document.querySelector('.output');
    output.innerText =`sorry you already have reached your limits . Number guessed by computer is "${random}"`;
  },2000);
    
   
   
  };
  if(won){
    
  }
  else{
    setTimeout(()=>{  output.innerText +=`\n you still have "${11-i}" chance`;},3000);
  }

  i++;
 
  
}
function reloadPage() { location.reload(); };

