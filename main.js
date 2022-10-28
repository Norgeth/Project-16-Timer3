const btnStart = document.querySelector('button.start');
const btnReset = document.querySelector('button.reset');
const divTime = document.querySelector('div.insideTime');

let active = false;
let myInterval;

const startStoper = ()=>{

 active = !active;
 
  if(active){

   const clickTime = new Date().getTime() / 1000;
    
   const stoper = ()=>{

    const startTime = new Date().getTime() / 1000;
    let time = startTime - clickTime;
    const stoperTime = time;
    divTime.textContent = stoperTime.toFixed(2);
    console.log("elo");

    }
     myInterval = setInterval(stoper, 10);
     btnStart.textContent = "Pauza";
     console.log("Start");

} 

  else if (!active){

   btnStart.textContent = "Start";
   clearInterval(myInterval);
   console.log("Pauza");

}



}

const reset = ()=>{

 divTime.textContent = "---";
 clearInterval(myInterval);
 active = false;
 btnStart.textContent = "Start";
 console.log("Reset");

}

btnStart.addEventListener('click', startStoper);
btnReset.addEventListener('click', reset);
